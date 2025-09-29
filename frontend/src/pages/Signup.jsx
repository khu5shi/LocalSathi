import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaMicrophone, FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { sendOtpFirebase } from "../firebase.js";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function useSpeech(setter) {
  const recognitionRef = useRef(null);
  const start = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }
    const recog = new SpeechRecognition();
    recog.lang = "en-IN";
    recog.interimResults = false;
    recog.maxAlternatives = 1;
    recog.onresult = (e) => {
      const txt = e.results[0][0].transcript;
      setter(txt);
    };
    recog.onerror = () => recog.stop();
    recognitionRef.current = recog;
    recog.start();
  };
  const stop = () => recognitionRef.current && recognitionRef.current.stop();
  return { start, stop };
}

function DraggableMarker({ formData, setFormData }) {
  const [position, setPosition] = useState(
    formData.location ? [formData.location.lat, formData.location.lng] : [20.5937, 78.9629]
  );
  const markerRef = useRef(null);

  const updateAddress = async (lat, lng) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
      const data = await res.json();
      const address = data.display_name;
      setFormData({ ...formData, location: { lat, lng, address } });
    } catch (err) {
      console.error("Error fetching address:", err);
    }
  };

  useEffect(() => {
    if (formData.location) {
      setPosition([formData.location.lat, formData.location.lng]);
    }
  }, [formData.location]);

  return (
    <Marker
      draggable={true}
      eventHandlers={{
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            const pos = marker.getLatLng();
            setPosition([pos.lat, pos.lng]);
            updateAddress(pos.lat, pos.lng);
          }
        },
      }}
      position={position}
      icon={markerIcon}
      ref={markerRef}
    />
  );
}

function SearchBox({ setFormData }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const map = useMap();

  const handleSearch = async () => {
    if (!query) return;
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=5`
      );
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("Error searching location:", err);
    }
  };

  const handleSelect = (place) => {
    const lat = parseFloat(place.lat);
    const lon = parseFloat(place.lon);
    map.setView([lat, lon], 15);
    setFormData((prev) => ({
      ...prev,
      location: { lat, lng: lon, address: place.display_name },
    }));
    setResults([]);
    setQuery(place.display_name);
  };

  return (
    <div className="absolute top-2 left-2 right-2 z-[1000] bg-white rounded-lg shadow p-2">
      <div className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search nearby..."
          className="flex-grow px-2 py-1 border rounded-l-lg text-black"
        />
        <button
          onClick={handleSearch}
          className="px-3 py-1 bg-indigo-600 text-white rounded-r-lg"
        >
          Search
        </button>
      </div>
      {results.length > 0 && (
        <ul className="bg-white mt-2 max-h-40 overflow-y-auto rounded shadow">
          {results.map((place, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(place)}
              className="px-2 py-1 hover:bg-gray-100 cursor-pointer text-black text-sm"
            >
              {place.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Signup() {
  const [role, setRole] = useState("employer");
  const [formData, setFormData] = useState({ name: "", location: null });
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [currentPos, setCurrentPos] = useState([20.5937, 78.9629]);
  const confirmationRef = useRef(null);
  const navigate = useNavigate();

  const nameSpeech = useSpeech((txt) => setFormData((p) => ({ ...p, name: txt })));
  const phoneSpeech = useSpeech((txt) => setPhone(txt));

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        setCurrentPos([latitude, longitude]);
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          const address = data.display_name;
          setFormData((prev) => ({
            ...prev,
            location: { lat: latitude, lng: longitude, address },
          }));
        } catch (err) {
          console.error("Error fetching current address", err);
        }
      });
    }
  }, []);

  const sendOtp = async () => {
    try {
      const confirmation = await sendOtpFirebase("+91" + phone);
      confirmationRef.current = confirmation;
      setOtpRequested(true);
      alert("OTP sent to +91" + phone);
    } catch (err) {
      alert("Error sending OTP: " + err.message);
    }
  };

  const verifyAndRegister = async () => {
    try {
      if (!confirmationRef.current) {
        alert("Please request OTP again");
        return;
      }
      const result = await confirmationRef.current.confirm(otp);

      if (!result.user) {
        alert("Otp verification failed. Please try again.");
        return;
      }

      const idToken = await result.user.getIdToken();

      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          role,
          phone: "+91" + phone,
          idToken,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Registration Successful ✅");
        navigate("/");
      } else {
        alert("Error: " + (data.message || "server error"));
      }
    } catch (err) {
      alert("OTP Verification Failed: " + err.message);
    }
  };

  return (
   <div className="flex max-h-screen items-center justify-center bg-gradient-to-br from-emerald-100 via-white to-emerald-50 ">
      <div className="bg-white/90 backdrop-blur-lg text-gray-800 p-8 my-10 rounded-3xl shadow-2xl border border-gray-200 w-full max-w-md ">
        
        {/* Role Toggle */}
        <div className="flex mb-6 border border-gray-300 rounded-xl overflow-hidden">
          <button
            className={`flex-1 py-2 font-semibold transition-all ${
              role === "employer"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setRole("employer")}
          >
            Employer
          </button>
          <button
            className={`flex-1 py-2 font-semibold transition-all ${
              role === "worker"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setRole("worker")}
          >
            Worker
          </button>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold mb-2 text-indigo-700">Create Account</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Sign up to find work or hire talent
        </p>

        {/* Name */}
        <div className="flex items-center bg-gray-50 rounded-lg mb-4 shadow-sm">
          <input
            type="text"
            placeholder="Enter Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="flex-grow px-3 py-2 bg-transparent text-gray-800 focus:outline-none"
          />
          <button
            onMouseDown={nameSpeech.start}
            onMouseUp={nameSpeech.stop}
            className="text-indigo-500 mr-3 hover:scale-110 transition-transform"
          >
            <FaMicrophone />
          </button>
        </div>

        {/* Aadhaar */}
        <div className="flex items-center bg-gray-50 rounded-lg mb-4 shadow-sm">
          <input
            type="text"
            placeholder="Enter Aadhaar Number"
            value={formData.aadhaar || ""}
            onChange={(e) => setFormData({ ...formData, aadhaar: e.target.value })}
            className="flex-grow px-3 py-2 bg-transparent text-gray-800 focus:outline-none"
          />
          <button
            onMouseDown={nameSpeech.start}
            onMouseUp={nameSpeech.stop}
            className="text-indigo-500 mr-3 hover:scale-110 transition-transform"
          >
            <FaMicrophone />
          </button>
        </div>

        {/* Location */}
        <div className="flex items-center bg-gray-50 rounded-lg mb-4 shadow-sm">
          <input
            type="text"
            placeholder="Select Location"
            value={formData.location ? formData.location.address : ""}
            readOnly
            className="flex-grow px-3 py-2 bg-transparent text-gray-800 focus:outline-none"
          />
          <button
            onClick={() => setShowMap(true)}
            type="button"
            className="p-2 bg-indigo-100 rounded-r-lg hover:bg-indigo-200 transition"
          >
            <FaMapMarkerAlt className="text-indigo-600" />
          </button>
        </div>

        {showMap && (
          <div className="h-72 mb-4 relative rounded-lg overflow-hidden border border-gray-300 shadow">
            <MapContainer center={currentPos} zoom={13} className="h-full w-full">
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OSM</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <SearchBox setFormData={setFormData} />
              <DraggableMarker formData={formData} setFormData={setFormData} />
            </MapContainer>
          </div>
        )}

        {/* Phone */}
        <div className="flex items-center bg-gray-50 rounded-lg mb-4 shadow-sm">
          <span className="px-3 text-gray-500">+91</span>
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-grow px-2 py-2 bg-transparent text-gray-800 focus:outline-none"
          />
          <button
            onMouseDown={phoneSpeech.start}
            onMouseUp={phoneSpeech.stop}
            className="text-indigo-500 mr-3 hover:scale-110 transition-transform"
          >
            <FaMicrophone />
          </button>
        </div>

        <div id="recaptcha-container"></div>

        {/* OTP */}
        {!otpRequested && (
          <button
            onClick={sendOtp}
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg mb-3 shadow hover:bg-indigo-700 transition"
          >
            Get OTP
          </button>
        )}

        {otpRequested && (
          <>
            <div className="flex items-center bg-gray-50 rounded-lg mb-4 shadow-sm">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="flex-grow px-3 py-2 bg-transparent text-gray-800 focus:outline-none"
              />
            </div>
            <button
              onClick={verifyAndRegister}
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Verify & Register
            </button>
          </>
        )}

        {/* Footer */}
        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
