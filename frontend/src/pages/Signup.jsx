import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa";
import { setUpRecaptcha } from "../firebase";

export default function Signup() {
  const [role, setRole] = useState("employer");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState(null);
  const [otpVerified, setOtpVerified] = useState(false);
  const [formData, setFormData] = useState({ name: "", pincode: "" });

  const sendOtp = async () => {
    try {
      const confirmation = await setUpRecaptcha("+91" + phone);
      setUser(confirmation);
      alert("OTP sent to +91" + phone);
    } catch (error) {
      alert(error.message);
    }
  };

  const verifyOtp = async () => {
    try {
      const result = await user.confirm(otp);
      const idToken = await result.user.getIdToken();
      setOtpVerified(idToken);
      alert("OTP Verified");
    } catch (error) {
      alert("Invalid OTP: " + error.message);
    }
  };

  const registerUser = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          role,
          phone: "+91" + phone,
          idToken: otpVerified,
        }),
      });
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className="flex items-center my-15">
      <div className="bg-indigo-800 text-white p-8 mx-35 rounded-lg w-[500px] shadow-gray-500">
        <div className="flex mb-6">
          <button
            className={`flex-1 py-1 rounded-full rounded-tr-none rounded-br-none font-bold ${
              role === "employer"
                ? "bg-orange-200 text-black border-orange-400 border-1"
                : "bg-white text-gray-800"
            }`}
            onClick={() => setRole("employer")}
          >
            Employer
          </button>
          <button
            className={`flex-1 py-1 rounded-full rounded-tl-none rounded-bl-none font-bold ${
              role === "worker"
                ? "bg-orange-200 text-black border-orange-400 border-1"
                : "bg-white text-gray-800"
            }`}
            onClick={() => setRole("worker")}
          >
            Worker
          </button>
        </div>

        <h2 className="text-center text-xl font-bold mb-3">Fill the details</h2>
        <hr className="mb-8 border-gray-400 mx-20" />

        <div className="flex items-center bg-white rounded-lg mb-4">
          <span className="px-3 text-black">+91</span>
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-grow px-2 py-2 text-black focus:outline-none"
          />
          <FaMicrophone className="text-gray-500 mr-2" />
        </div>

        <div id="recaptcha-container"></div>

        {!user && (
          <button
            onClick={sendOtp}
            className="w-full bg-white text-[#264a70] font-bold py-2 rounded-lg hover:bg-gray-200 mb-3"
          >
            Get OTP
          </button>
        )}

        {user && !otpVerified && (
          <>
            <div className="flex items-center bg-white rounded-lg mb-4">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="flex-grow px-3 py-2 text-black focus:outline-none"
              />
              <FaMicrophone className="text-gray-500 mr-2" />
            </div>
            <button
              onClick={verifyOtp}
              className="w-full bg-white text-[#264a70] font-bold py-2 rounded-lg hover:bg-gray-200 mb-3"
            >
              Verify OTP
            </button>
          </>
        )}

        {otpVerified && (
          <>
            <div className="flex items-center bg-white rounded-lg mb-4">
              <input
                type="text"
                placeholder="Enter Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="flex-grow px-3 py-2 text-black focus:outline-none"
              />
              <FaMicrophone className="text-gray-500 mr-2" />
            </div>

            <div className="flex items-center bg-white rounded-lg mb-4">
              <input
                type="text"
                placeholder="Pin Code Of Locality"
                value={formData.pincode}
                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                className="flex-grow px-3 py-2 text-black focus:outline-none"
              />
              <FaMicrophone className="text-gray-500 mr-2" />
            </div>

            <button
              onClick={registerUser}
              className="w-full bg-white text-[#264a70] font-bold py-2 rounded-lg hover:bg-gray-200"
            >
              Register
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
