import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";
import CurrentLocation from "./CurrentLocation";

const Navbar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [showLang, setShowLang] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowLang(false);
  };

  const languages = [
    { code: "en", name: "English", native: "English" },
    { code: "hi", name: "Hindi", native: "हिंदी" },
    { code: "bho", name: "Bhojpuri", native: "भोजपुरी" },
    { code: "mr", name: "Marathi", native: "मराठी" },
    { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
    { code: "bh", name: "Bihari", native: "बिहारी" },
    { code: "mai", name: "Maithili", native: "मैथिली" },
    { code: "te", name: "Telugu", native: "తెలుగు" },
    { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
  ];

  const navLinks = [
    { id: "home", label: t("home"), path: "/" },
    { id: "about", label: t("about"), path: "/about" },
    { id: "services", label: t("services"), path: "/services" },
    { id: "contact", label: t("contact"), path: "/contact" },
  ];


  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500  ${scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-xl shadow-indigo-100/50 py-2"
            : "bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-3"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-6">
            {/* Logo with animation */}
            <div className="group relative cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <img
                src={logo}
                alt="LocalSathi"
                className="relative h-14 w-14 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
              />
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      navigate(link.path);
                      setActiveSection(link.id);
                    }}
                    className={`relative px-5 py-2 text-base font-semibold rounded-full transition-all duration-300 group ${activeSection === link.id
                        ? "text-white"
                        : "text-gray-700 hover:text-indigo-600"
                      }`}
                  >
                    {activeSection === link.id && (
                      <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-lg animate-fade-in"></span>
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLang(!showLang)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${showLang
                      ? "bg-indigo-500 text-white shadow-lg shadow-indigo-300/50"
                      : "bg-white/80 text-gray-700 hover:bg-indigo-50 border border-gray-200"
                    }`}
                >
                  <FaGlobe className="text-lg" />
                  <span className="text-sm font-semibold">
                    {i18n.language.toUpperCase()}
                  </span>
                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${showLang ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Language Dropdown */}
                {showLang && (
                  <div className="absolute right-0 mt-3 w-56 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl shadow-indigo-200/50 overflow-hidden animate-slide-down">
                    <div className="p-2 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-200">
                      <p className="text-xs font-semibold text-gray-600 px-3 py-1">
                        Select Language
                      </p>
                    </div>
                    <div className="max-h-80 overflow-y-auto p-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full px-4 py-3 text-left rounded-xl transition-all duration-300 group ${i18n.language === lang.code
                              ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                              : "hover:bg-indigo-50 text-gray-700"
                            }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{lang.native}</span>
                            {i18n.language === lang.code && (
                              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            )}
                          </div>
                          <span className="text-xs opacity-70">{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Location Button */}
              <div className="hidden lg:block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-200/50 transition-all duration-300">
                <CurrentLocation />
              </div>

              {/* Auth Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => navigate("/login")}
                  className="px-6 py-2 bg-white/80 text-indigo-600 font-semibold rounded-full border border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 hover:scale-105 shadow-sm"
                >
                  {t("login")}
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="relative px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-indigo-300/50 hover:shadow-xl hover:shadow-indigo-400/50 transition-all duration-300 hover:scale-105 overflow-hidden group"
                >
                  <span className="relative z-10">{t("signup")}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-6 top-1/2 -translate-y-1/2">
          <button className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-xl bg-white/80 border border-gray-200 hover:bg-indigo-50 transition-all duration-300">
            <span className="w-5 h-0.5 bg-gray-700 rounded-full"></span>
            <span className="w-5 h-0.5 bg-gray-700 rounded-full"></span>
            <span className="w-5 h-0.5 bg-gray-700 rounded-full"></span>
          </button>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;