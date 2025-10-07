import { useState } from "react";
import { FaHardHat, FaTractor, FaHome, FaStore, FaTruck, FaUtensils, FaBroom, FaTools } from "react-icons/fa";
import {useTheme} from "../context/ThemeContext"

const Popularjobs = () => {
  const {theme} = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const jobs = [
    { 
      title: "Construction Work", 
      icon: <FaHardHat size={32} />,
      color: "from-slate-500 to-slate-700",
      iconBg: "bg-slate-100",
      iconColor: "text-slate-600",
      glowColor: "shadow-slate-300/50"
    },
    { 
      title: "Farming", 
      icon: <FaTractor size={32} />,
      color: "from-blue-600 to-blue-800",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-700",
      glowColor: "shadow-blue-300/50"
    },
    { 
      title: "Household Work", 
      icon: <FaHome size={32} />,
      color: "from-yellow-500 to-amber-600",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      glowColor: "shadow-yellow-300/50"
    },
    { 
      title: "Shop Assistant", 
      icon: <FaStore size={32} />,
      color: "from-cyan-600 to-cyan-800",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-700",
      glowColor: "shadow-cyan-300/50"
    },
    { 
      title: "Driver", 
      icon: <FaTruck size={32} />,
      color: "from-emerald-500 to-emerald-700",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      glowColor: "shadow-emerald-300/50"
    },
    { 
      title: "Cook", 
      icon: <FaUtensils size={32} />,
      color: "from-rose-500 to-rose-700",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      glowColor: "shadow-rose-300/50"
    },
    { 
      title: "Cleaning", 
      icon: <FaBroom size={32} />,
      color: "from-amber-700 to-amber-900",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-800",
      glowColor: "shadow-amber-300/50"
    },
    { 
      title: "Masonry Work", 
      icon: <FaTools size={32} />,
      color: "from-indigo-700 to-indigo-900",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-800",
      glowColor: "shadow-indigo-300/50"
    },
  ];

  return (
    <section className={`relative py-20 overflow-hidden 
                              ${theme === "dark"
                               ?"bg-black"
                               :"bg-yellow-50"}`}>
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className={`text-4xl md:text-5xl font-bold  mb-4
                             ${theme === "dark" 
                             ?"text-gray-200"
                             :"text-gray-900"}`}>
            Popular{" "}
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Job Categories
            </span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-1.5 w-24 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 hover:scale-110 border border-gray-100 hover:border-transparent"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Gradient border effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${job.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              <div className="absolute inset-[2px] bg-white rounded-2xl -z-10"></div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl shadow-lg ${job.glowColor} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-20`}></div>

              {/* Icon container with rotation animation */}
              <div className={`${job.iconBg} ${job.iconColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-md`}>
                {job.icon}
              </div>

              {/* Job title */}
              <h3 className="text-base font-bold text-gray-800 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-600 group-hover:bg-clip-text transition-all duration-300">
                {job.title}
              </h3>

              {/* Hover indicator */}
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
              </div>

              {/* Particle effect on hover */}
              {hoveredIndex === index && (
                <>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-amber-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className={` mb-6 text-lg
                             ${theme === "dark"
                             ?"text-gray-300"
                            :"text-gray-600"}`}>Can't find what you're looking for?</p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full shadow-lg shadow-orange-300/50 hover:shadow-xl hover:shadow-orange-400/50 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">View All Categories</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Popularjobs;