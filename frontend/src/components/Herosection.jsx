import { useState, useEffect } from "react";
import hero from "../assets/hero.png";
import { useTheme } from "../context/ThemeContext";

const Herosection = () => {
   const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative  mx-3 rounded-3xl h-[105vh] flex items-center justify-center overflow-hidden
                    ${theme === "dark"
                     ?"bg-black"
                     :"bg-white"}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Background Image with enhanced effects */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="hero"
          className="w-full h-full object-cover rounded-3xl filter blur-[2px] brightness-75 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-900/40 to-pink-900/50 rounded-3xl"></div>
        <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
      </div>

      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-400/15 rounded-full blur-2xl animate-float-slow"></div>
      </div>

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content with staggered animations */}
      <div className={`relative z-10 max-w-4xl text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        

        {/* Main heading with gradient text */}
        <h1 className={`text-6xl md:text-7xl lg:text-8xl font-black mb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl animate-gradient-shift">
            LocalSathi
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-2xl md:text-3xl font-bold text-white/95 mb-6 drop-shadow-lg transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Your Trusted Local Job Platform
        </p>

        {/* Description with glassmorphism */}
        <div className={`backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl mb-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg md:text-xl leading-relaxed text-white/95 font-medium">
            LocalSathi connects nearby workers and employers in a{" "}
            <span className="text-yellow-300 font-bold">simple</span>,{" "}
            <span className="text-blue-300 font-bold">fast</span>, and{" "}
            <span className="text-green-300 font-bold">reliable</span> way. 
            Whether you're looking for work or hiring for a task, everything happens easily, 
            in your language, and close to home.
          </p>
        </div>

        {/* Tagline with icon */}
        <p className={`text-base md:text-lg text-blue-200 italic font-light mb-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          ✨ Bridging the gap between opportunity and talent locally, simply, and reliably.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group relative px-8 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10">Find Work Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group relative px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full backdrop-blur-sm hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-105 shadow-lg">
            <span className="relative z-10">Post a Job</span>
          </button>
        </div>

        {/* Stats or Trust Indicators */}
        <div className={`mt-12 flex flex-wrap justify-center gap-8 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">10K+</div>
            <div className="text-sm text-blue-200">Active Workers</div>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">5K+</div>
            <div className="text-sm text-blue-200">Jobs Posted</div>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">98%</div>
            <div className="text-sm text-blue-200">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2 bg-white rounded-full animate-scroll-dot"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(20px); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes scroll-dot {
          0% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(12px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        .animate-scroll-dot {
          animation: scroll-dot 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Herosection;