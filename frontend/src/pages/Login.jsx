import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa";
import { sendOtpFirebase } from "../firebase";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const confirmationRef = useRef(null);
  const navigate = useNavigate();

  const sendOtp = async () => {
    try {
      // check if user exists in DB
      const res = await fetch("http://localhost:5000/api/users/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: "+91" + phone }),
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.message || "User not registered");
        return;
      }

      const confirmation = await sendOtpFirebase("+91" + phone);
      confirmationRef.current = confirmation;
      setOtpRequested(true);
      alert("OTP sent to +91" + phone);
    } catch (err) {
      alert("Error sending OTP: " + err.message);
    }
  };

  const verifyAndLogin = async () => {
    try {
      if (!confirmationRef.current) {
        alert("Please request OTP again");
        return;
      }

      const result = await confirmationRef.current.confirm(otp);
      const idToken = await result.user.getIdToken(true);

      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: "+91" + phone, idToken }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Login successful ✅");
        navigate("/");
      } else {
        alert("Error: " + data.message);
      }
    } catch (err) {
      alert("Invalid OTP: " + err.message);
    }
  };

  return (
    <div className="flex items-center my-15">
      <div className="bg-indigo-800 text-white p-8 mx-35 rounded-lg w-[500px] shadow-gray-500">
        <h2 className="text-center text-xl font-bold mb-3">Login</h2>
        <hr className="mb-6 border-gray-400" />

        <div className="flex items-center bg-white rounded-lg mb-4">
          <span className="px-3 text-black">+91</span>
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-grow px-2 py-2 text-black"
          />
          <FaMicrophone className="text-gray-500 mr-2" />
        </div>

        <div id="recaptcha-container"></div>

        {!otpRequested && (
          <button
            onClick={sendOtp}
            className="w-full bg-white text-[#264a70] font-bold py-2 rounded-lg mb-3"
          >
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
              <FaMicrophone className="text-gray-500 mr-2" />
            </div>
            <button
              onClick={verifyAndLogin}
              className="w-full bg-white text-[#264a70] font-bold py-2 rounded-lg"
            >
              Verify & Login
            </button>
          </>
        )}

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-orange-300 font-semibold">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
