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
      console.log("FORM Data >>>",{
        name:formData.name,
        pincode:formData.location,
        role,
        phone:"+91"+phone,
        idToken
      })
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:formData.name,
          pincode:formData.location,
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
    <div className="flex items-center my-15">
      <div className="bg-indigo-800 text-white p-8 mx-35 rounded-lg w-[500px] shadow-gray-500 relative">
        <div className="flex mb-6">
          <button
            className={`flex-1 py-1 font-bold ${role === "employer" ? "bg-orange-200 text-black" : "bg-white text-gray-800"}`}
            onClick={() => setRole("employer")}
          >
            Employer
          </button>
          <button
            className={`flex-1 py-1 font-bold ${role === "worker" ? "bg-orange-200 text-black" : "bg-white text-gray-800"}`}
            onClick={() => setRole("worker")}
          >
            Worker
          </button>
        </div>

        <h2 className="text-center text-xl font-bold mb-3">Signup</h2>
        <hr className="mb-6 border-gray-400" />

        <div className="flex items-center bg-white rounded-lg mb-4">
          <input
            type="text"
            placeholder="Enter Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="flex-grow px-3 py-2 text-black"
          />
          <button
            onMouseDown={nameSpeech.start}
            onMouseUp={nameSpeech.stop}
            className="text-gray-500 mr-2"
          >
            <FaMicrophone />
          </button>
        </div>

        <div className="flex items-center bg-white rounded-lg mb-4">
          <input
            type="text"
            placeholder="Select Location"
            value={formData.location ? formData.location.address : ""}
            readOnly
            className="flex-grow px-3 py-2 text-black"
          />
          <button
            onClick={() => setShowMap(true)}
            type="button"
            className="p-2 bg-gray-200 rounded-r-lg hover:bg-gray-300"
          >
            <FaMapMarkerAlt className="text-red-500" />
          </button>
        </div>

        {showMap && (
          <div className="h-80 mb-4 relative">
            <MapContainer center={currentPos} zoom={13} className="h-full w-full rounded-lg">
              <TileLayer attribution='&copy; <a href="https://osm.org/copyright">OSM</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <SearchBox setFormData={setFormData} />
              <DraggableMarker formData={formData} setFormData={setFormData} />
            </MapContainer>
          </div>
        )}

        <div className="flex items-center bg-white rounded-lg mb-4">
          <span className="px-3 text-black">+91</span>
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-grow px-2 py-2 text-black"
          />
          <button
            onMouseDown={phoneSpeech.start}
            onMouseUp={phoneSpeech.stop}
            className="text-gray-500 mr-2"
          >
            <FaMicrophone />
          </button>
        </div>

        <div id="recaptcha-container"></div>

        {!otpRequested && (
          <button onClick={sendOtp} className="w-full bg-white text-[#264a70] font-bold py-2 rounded-lg mb-3">
            Get OTP
          </button>
        )}

        {otpRequested && (
          <>
            <div className="flex items-center bg-white rounded-lg mb-4">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="flex-grow px-3 py-2 text-black"
              />
            </div>
            <button
              onClick={verifyAndRegister}
              className="w-full bg-white text-[#264a70] font-bold py-2 rounded-lg"
            >
              Verify & Register
            </button>
          </>
        )}

        <p className="text-center text-sm mt-4">
          Already have account?{" "}
          <Link to="/login" className="text-orange-300 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
