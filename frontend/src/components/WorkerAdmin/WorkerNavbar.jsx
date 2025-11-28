import React, { useState } from 'react';
import { FiUser, FiBell } from 'react-icons/fi';
import LanguageSelector from '../EmployerAdmin/LanguageSelector';
import ThemeToggle from '../EmployerAdmin/ThemeToggle';
import NotificationsMenu from '../EmployerAdmin/NotificationsMenu';
import CurrentLocation from "../CurrentLocation";
import logo from '../../assets/logo.png';
import logow from '../../assets/logo2.png';

const WorkerNavbar = ({ theme, toggleTheme, profile, notifications = [], setCurrentLang, onOpenProfile }) => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [scrolled] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500  ${
          scrolled
            ? theme === "dark"
              ? "bg-gray-800 backdrop-blur-lg shadow-lg shadow-black/40 py-2"
              : "bg-white/95 backdrop-blur-lg shadow-xl shadow-indigo-100/50 py-2"
            : theme === "dark"
            ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-3"
            : "bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-3"
        }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="group relative cursor-pointer flex items-center space-x-3">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <img
                        src={theme === 'dark' ? logow : logo}
                        alt="LocalSathi"
                        className="relative h-14 w-14 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                      />
                      
                    </div>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:block">
              <LanguageSelector setCurrentLang={setCurrentLang} theme={theme} />
            </div>

            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <NotificationsMenu notifications={notifications} theme={theme} />
            <div
                                        className={`cursor-pointer hidden lg:block px-4 py-2 backdrop-blur-sm rounded-full border transition-all duration-300 ${
                                          theme === "dark"
                                            ? "bg-gray-800 border-gray-700 hover:border-indigo-500 hover:shadow-lg hover:shadow-black/30"
                                            : "bg-white/80 border-gray-200 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-200/50"
                                        }`}
                                      >
                                        <CurrentLocation className={`text-sm font-medium transition-colors ${
                              theme === "dark" ? "text-gray-200" : "text-gray-800"
                            }`} />
                                      </div>

            <div className="relative">
              <button onClick={() => { setOpenProfileMenu(prev => !prev); }} className={`flex items-center space-x-2 px-3 py-2 rounded-xl ${theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-white/80 text-gray-700 border border-gray-200'}`}>
                <img src={profile?.avatar} alt="profile" className="w-8 h-8 rounded-full" />
                <span className="hidden sm:block font-medium">{profile?.name}</span>
                <FiUser />
              </button>

              {openProfileMenu && (
                <div className={`absolute right-0 mt-2 w-56 rounded-xl shadow-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                  <div className={`px-4 py-3 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-slate-800'} font-semibold`}>{profile?.name}</p>
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>{profile?.role}</p>
                  </div>
                  <div className="py-2">
                    <button onClick={() => { onOpenProfile && onOpenProfile(); setOpenProfileMenu(false); }} className={`w-full text-left px-4 py-3 ${theme === 'dark' ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-indigo-50'}`}>Edit Profile</button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default WorkerNavbar;
