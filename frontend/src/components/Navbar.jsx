import logo from "../assets/logo.png";
import CurrentLocation from "./CurrentLocation";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [showLang, setShowLang] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowLang(false);
  };

  return (
    <nav className="flex items-center px-8 bg-indigo-200 shadow-md relative">
      <div>
        <img
          src={logo}
          alt="Jobbazar"
          className="hover:bg-indigo-300 rounded-full h-18"
        />
      </div>

      <ul className="flex gap-2 mx-auto text-xl font-semibold">
        <li>
          <a
            href="#home"
            className="text-blue-900 rounded-full hover:bg-indigo-300 transition duration-300 px-4 py-1"
          >
            {t("home")}
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-blue-900 rounded-full hover:bg-indigo-300 transition duration-300 px-4 py-1"
          >
            {t("about")}
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="text-blue-900 rounded-full hover:bg-indigo-300 transition duration-300 px-4 py-1"
          >
            {t("services")}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-blue-900 rounded-full hover:bg-indigo-300 transition duration-300 px-4 py-1"
          >
            {t("contact")}
          </a>
        </li>
      </ul>

      {/* 🌐 Language Selector */}
      <div className="relative mx-4">
        <button
          onClick={() => setShowLang(!showLang)}
          className="flex items-center gap-2 px-3 py-1 rounded-full shadow hover:bg-indigo-300 transition duration-300"
        >
          <FaGlobe className="text-blue-900 h-7 w-10" />
          <span>{i18n.language.toUpperCase()}</span>
        </button>

        {showLang && (
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
            <button
              onClick={() => changeLanguage("en")}
              className="block w-full px-4 py-2 text-left hover:bg-blue-100"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage("hi")}
              className="block w-full px-4 py-2 text-left hover:bg-blue-100"
            >
              हिंदी
            </button>
            <button
              onClick={() => changeLanguage("bho")}
              className="block w-full px-4 py-2 text-left hover:bg-blue-100"
            >
              भोजपुरी
            </button>
            <button
              onClick={() => changeLanguage("mr")}
              className="block w-full px-4 py-2 text-left hover:bg-blue-100"
            >
              मराठी
            </button>
            <button
              onClick={() => changeLanguage("pa")}
              className="block w-full px-4 py-2 text-left hover:bg-blue-100"
            >
              ਪੰਜਾਬੀ
            </button>
            <button
              onClick={() => changeLanguage("bh")}
              className="block w-full px-4 py-2 text-left hover:bg-blue-100"
            >
              बिहारी
            </button>
            <button
              onClick={() => changeLanguage("mai")}
              className="block w-full px-4 py-2 text-left hover:bg-blue-100"
            >
              मैथिली
            </button>
            <button
              onClick={() => changeLanguage("te")}
              className="block w-full px-4 py-2 text-left hover:bg-blue-100"
            >
              తెలుగు
            </button>
            <button
              onClick={() => changeLanguage("gu")}
              className="block w-full px-4 py-2 text-left hover:bg-blue-100"
            >
              ગુજરાતી
            </button>
          </div>
        )}
      </div>

      <div className="mx-4 rounded-full hover:bg-indigo-300 transition duration-300 px-4 py-1 shadow">
        <CurrentLocation />
      </div>

      <div className="flex gap-4">
        <button className="px-6 py-1 bg-indigo-300 text-blue-900 font-medium rounded-full shadow-md hover:bg-indigo-700 hover:text-white transition duration-300"
           onClick={() => navigate("/login")}>
          {t("login")}
        </button>
        <button className="px-6 py-1 bg-indigo-300 text-blue-900 font-medium rounded-full shadow-md hover:bg-indigo-700 hover:text-white transition duration-300"
           onClick={() => navigate("/signup")}>
          {t("signup")}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
