import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa";
import { sendOtpFirebase } from "../firebase";
import { useTheme } from "../context/ThemeContext";

export default function Login() {
   const navigate = useNavigate();
  const { theme } = useTheme();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const confirmationRef = useRef(null);
  
  const sendOtp = async () => {
    try {
      const res = await fetch("https://localsathi-backend.onrender.com/api/users/check", {
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

      const res = await fetch("https://localsathi-backend.onrender.com/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: "+91" + phone, idToken }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Login successful ✅");
        navigate("/workerdashboard");
      } else {
        alert("Error: " + data.message);
      }
    } catch (err) {
      alert("Invalid OTP: " + err.message);
    }
  };

  return (
    <div className={`flex max-h-screen pt-20 items-center justify-center bg-gradient-to-br  px-4 ${theme === "dark" ?"from-black via-indigo-950 to-black" :"from-emerald-100 via-white to-emerald-50"}`}>
      <div className={` backdrop-blur-lg text-gray-800 p-8 my-10 rounded-3xl shadow-2xl border  w-full max-w-md relative ${theme  === "dark" ?"bg-white/10 border-gray-200" :"bg-white/90 border-gray-300"}`}>
        {/* Heading */}
        <h2 className={`text-center text-2xl font-bold mb-2  ${theme === "dark" ?"text-indigo-500" :"text-indigo-800"}`}>Welcome Back</h2>
        <p className={`text-center text-sm  mb-6 ${theme === "dark" ?"text-gray-300" :"text-gray-500"}`}>Login to continue</p>

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
          <FaMicrophone className="text-indigo-500 mr-3 hover:scale-110 transition-transform" />
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
              <FaMicrophone className="text-indigo-500 mr-3 hover:scale-110 transition-transform" />
            </div>
            <button
              onClick={verifyAndLogin}
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Verify & Login
            </button>
          </>
        )}

        {/* Footer */}
        <p className={`text-center text-sm mt-6  ${theme === "dark" ?"text-gray-300" :"text-gray-600"}`}>
          Don’t have an account?{" "}
          <Link to="/signup" className={`font-semibold hover:underline ${theme === "dark" ?"text-indigo-500" :"text-indigo-600"}`}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
