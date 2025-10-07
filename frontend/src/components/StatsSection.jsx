import { useState, useEffect, useRef } from "react";
import {useTheme} from "../context/ThemeContext"
const StatsSection = () => {
  const {theme} =useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    { 
      number: 10000, 
      suffix: "+", 
      label: "Active Workers",
      icon: "👷",
      color: "from-blue-500 to-cyan-500",
      glowColor: "shadow-blue-400/50",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    { 
      number: 5000, 
      suffix: "+", 
      label: "Employers",
      icon: "🏢",
      color: "from-purple-500 to-pink-500",
      glowColor: "shadow-purple-400/50",
      bgGradient: "from-purple-50 to-pink-50"
    },
    { 
      number: 25000, 
      suffix: "+", 
      label: "Successful Jobs",
      icon: "✨",
      color: "from-emerald-500 to-teal-500",
      glowColor: "shadow-emerald-400/50",
      bgGradient: "from-emerald-50 to-teal-50"
    },
  ];

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animated counter effect
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let currentCount = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.number) {
          currentCount = stat.number;
          clearInterval(timer);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(currentCount);
          return newCounts;
        });
      }, interval);
    });
  }, [isVisible]);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <section 
      ref={sectionRef}
      className={`relative py-20 overflow-hidden bg-gradient-to-br 
                      ${theme === "dark"
                       ?"from-slate-500 to-indigo-500"
                      :"from-slate-50 via-white to-indigo-50"}`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold  mb-4 transition-all duration-700 delay-100
                           ${theme === "dark"
                            ?"text-gray-100"
                           :"text-gray-900"}`}>
            Growing{" "}
            <span className={`bg-gradient-to-r  bg-clip-text text-transparent
                                 ${theme === "dark"
                                 ?"from-emerald-400 to-teal-400"
                                 :"from-emerald-600 to-teal-600"}`}>
              Together
            </span>
          </h2>
          <p className={` text-lg transition-all duration-700 delay-200 
                           ${theme === "dark"
                           ?"text-gray-300"
                          :"text-gray-600"}`}>
            Join thousands who trust LocalSathi for their employment needs
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-3xl ${item.glowColor} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10`}></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {item.icon}
                  </div>

                  {/* Number with counter animation */}
                  <div className="mb-3">
                    <span className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {isVisible ? formatNumber(counts[index]) : '0'}
                    </span>
                    <span className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.suffix}
                    </span>
                  </div>

                  {/* Label */}
                  <p className="text-lg font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {item.label}
                  </p>

                  {/* Progress bar animation */}
                  <div className="mt-6 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-2000 ease-out`}
                      style={{ 
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${300 + index * 150}ms`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/50 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating particles on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${item.color} rounded-full animate-ping`}></div>
                <div className={`absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r ${item.color} rounded-full animate-ping`} style={{ animationDelay: '0.3s' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className={`text-center mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className={`text-lg mb-6 
                         ${theme === "dark"
                         ?"text-gray-300 "
                        :"text-gray-600 "}`}>
            Be part of our rapidly growing community
          </p>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;