import React, { useState } from 'react';
import { FiUser, FiSettings, FiLogOut, FiChevronDown } from 'react-icons/fi';

const UserMenu = ({ employerProfile, theme, setShowProfileModal }) => {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className={`flex items-center space-x-2 px-3 py-2 rounded-xl ${open ? 'bg-indigo-500 text-white' : theme === 'dark' ? 'bg-gray-700' : 'bg-white/80 border border-gray-200'}`}>
        <img src={employerProfile.avatar} alt="Profile" className="w-8 h-8 rounded-full ring-2 ring-white/50" />
        <span className="hidden sm:block font-medium">{employerProfile.name}</span>
        <FiChevronDown className={`${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className={`absolute right-0 mt-2 w-64 rounded-xl shadow-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          <div className={`px-4 py-3 border-b ${theme === 'dark' ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50'}`}>
            <div className="flex items-center space-x-3">
              <img src={employerProfile.avatar} alt="Profile" className="w-12 h-12 rounded-full ring-2 ring-indigo-500" />
              <div>
                <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{employerProfile.name}</p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{employerProfile.company}</p>
              </div>
            </div>
          </div>

          <div className="py-2">
            <button onClick={() => { setShowProfileModal(true); setOpen(false); }} className={`w-full flex items-center space-x-3 px-4 py-3 ${theme === 'dark' ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-indigo-50'}`}>
              <FiUser /> <span>My Profile</span>
            </button>
            <button className={`w-full flex items-center space-x-3 px-4 py-3 ${theme === 'dark' ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-indigo-50'}`}>
              <FiSettings /> <span>Settings</span>
            </button>
            <div className={`my-2 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}></div>
            <button onClick={handleLogout} className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50">
              <FiLogOut /> <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

