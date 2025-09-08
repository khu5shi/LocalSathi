
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa";

export default function Signup() {
  const [role, setRole] = useState("employer");

  return (
    <div className="flex items-center  my-15">
        <img src="" alt="" />
      <div className="bg-indigo-800 text-white p-8 mx-35 rounded-lg w-[500px] shadow-gray-500 ">
        {/* Role Toggle */}
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
                ? "bg-orange-200 text-black  border-orange-400 border-1"
                : "bg-white text-gray-800"
            }`}
            onClick={() => setRole("worker")}
          >
            Worker
          </button>
        </div>

        {/* Heading */}
        <h2 className="text-center text-xl font-bold mb-3">
          Fill the details
        </h2>
        <hr className="mb-8 border-gray-400 mx-20 " />

        {/* Phone Number */}
        <div className="flex items-center bg-white rounded-lg mb-4">
          <span className="px-3 text-black">+91</span>
          <input
            type="text"
            placeholder="Phone Number"
            className="flex-grow px-2 py-2 text-black focus:outline-none"
          />
          <FaMicrophone className="text-gray-500 mr-2" />
        </div>

        {/* Name */}
        <div className="flex items-center bg-white rounded-lg mb-4">
          <input
            type="text"
            placeholder="Enter Name"
            className="flex-grow px-3 py-2 text-black focus:outline-none"
          />
          <FaMicrophone className="text-gray-500 mr-2" />
        </div>

        {/* Pin Code */}
        <div className="flex items-center bg-white rounded-lg mb-4">
          <input
            type="text"
            placeholder="Pin Code Of Locality"
            className="flex-grow px-3 py-2 text-black focus:outline-none"
          />
          <FaMicrophone className="text-gray-500 mr-2" />
        </div>
         {/* otp verification Code */}
        <div className="flex items-center bg-white rounded-lg mb-6">
          <input
            type="text"
            placeholder="OTP "
            className="flex-grow px-3 py-2 text-black focus:outline-none"
          />
          <FaMicrophone className="text-gray-500 mr-2" />
        </div>

        {/* Get OTP Button */}
        <button className="w-full bg-white text-[#264a70] font-bold py-2 rounded-lg hover:bg-gray-200">
          Get OTP
        </button>

        {/* Login Redirect */}
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
