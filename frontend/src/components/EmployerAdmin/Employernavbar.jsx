import React, { useState } from 'react';
import { FiBriefcase, FiChevronDown, FiUsers } from 'react-icons/fi';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import NotificationsMenu from './NotificationsMenu';
import UserMenu from './UserMenu';
import CurrentLocation from "../CurrentLocation";
// adjust these two imports if your file structure is different
import logo from '../../assets/logo.png';
import logow from '../../assets/logo2.png';

const Employernavbar = ({
  theme,
  toggleTheme,
  employerProfile,
  notifications,
  setShowProfileModal,
  setCurrentLang,
  activeTab,
  setActiveTab
}) => {
  const [scrolled] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500  ${
          scrolled
            ? theme === "dark"
              ? "bg-gray-800 backdrop-blur-lg shadow-lg shadow-black/40 py-2"
              : "bg-white/95 backdrop-blur-lg shadow-xl shadow-indigo-100/50 py-2"
            : theme === "dark"
            ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-3"
            : "bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-3"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="group relative cursor-pointer flex items-center space-x-3">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            <img
              src={theme === 'dark' ? logow : logo}
              alt="LocalSathi"
              className="relative h-14 w-14 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
            />
            
          </div>

          {/* Center nav buttons (Jobs / Workers) */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => setActiveTab && setActiveTab('jobs')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'jobs'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                  : theme === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-indigo-50'
              }`}
            >
              <FiBriefcase className="text-lg" />
              <span>Job Posts</span>
            </button>

            <button
              onClick={() => setActiveTab && setActiveTab('workers')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'workers'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                  : theme === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-indigo-50'
              }`}
            >
              <FiUsers className="text-lg" />
              <span>Workers</span>
            </button>
          </div>

          {/* right side */}
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

            <UserMenu employerProfile={employerProfile} theme={theme} setShowProfileModal={setShowProfileModal} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Employernavbar;
