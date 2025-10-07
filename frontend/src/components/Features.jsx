import { FaCheckCircle, FaMicrophoneAlt, FaMapMarkerAlt, FaShieldAlt, FaBolt } from "react-icons/fa";
import {useTheme} from "../context/ThemeContext"

export default function Features() {
  const {theme}=useTheme();
  const features = [
    {
      icon: <FaCheckCircle className="text-emerald-500 text-4xl" />,
      title: "Verified Profiles",
      desc: "All workers and employers are verified for trust and safety.",
      gradient: "from-emerald-500/10 to-teal-500/10",
      iconBg: "bg-emerald-500/10",
    },
    {
      icon: <FaMapMarkerAlt className="text-orange-500 text-4xl" />,
      title: "Local Jobs",
      desc: "Quickly find jobs available near your location.",
      gradient: "from-orange-500/10 to-amber-500/10",
      iconBg: "bg-orange-500/10",
    },
    {
      icon: <FaMicrophoneAlt className="text-blue-500 text-4xl" />,
      title: "Voice Search",
      desc: "Easily search for jobs by speaking in any language.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconBg: "bg-blue-500/10",
    },
    {
      icon: <FaShieldAlt className="text-indigo-500 text-4xl" />,
      title: "Trusted Platform",
      desc: "Safe and reliable system for workers and employers.",
      gradient: "from-indigo-500/10 to-purple-500/10",
      iconBg: "bg-indigo-500/10",
    },
    {
      icon: <FaBolt className="text-yellow-500 text-4xl" />,
      title: "Instant Updates",
      desc: "Get real-time job notifications and updates instantly.",
      gradient: "from-yellow-500/10 to-orange-500/10",
      iconBg: "bg-yellow-500/10",
    },
  ];

  return (
    <section className={`relative py-10 overflow-hidden 
                          ${theme ==="dark"
                          ?"bg-gradient-to-r from-indigo-900 to-purple-900"
                           :"bg-gradient-to-r from-indigo-200 to-purple-200"}`}>
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className={`text-4xl md:text-5xl font-bold  mb-4
                           ${theme === "dark" 
                           ?"text-gray-100"
                           :"text-gray-900"}`}>
            Why Choose{" "}
            <span className={`bg-gradient-to-r  bg-clip-text text-transparent
                               ${theme === "dark" 
                           ?"from-indigo-400 to-purple-400"
                           :"from-indigo-600 to-purple-600"}`}>
              Our Platform?
            </span>
          </h2>
          <p className={` text-lg max-w-2xl mx-auto
                          ${theme==="dark"
                            ? "text-gray-300"
                            :"text-gray-600"}`}>
            Experience the future of job matching with our cutting-edge features
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-5 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-200/50 border border-gray-100"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon container with animation */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${item.iconBg} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-indigo-300/50 hover:shadow-xl hover:shadow-indigo-400/50 hover:scale-105 transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}