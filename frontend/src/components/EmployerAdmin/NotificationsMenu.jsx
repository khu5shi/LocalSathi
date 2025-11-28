import React, { useState } from 'react';
import { FiBell } from 'react-icons/fi';

const NotificationsMenu = ({ notifications = [], theme }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className={`p-2 rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-white/80 text-gray-700 border border-gray-200'}`}>
        <FiBell />
        {notifications.some(n => n.unread) && <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>}
      </button>

      {open && (
        <div className={`absolute right-0 mt-2 w-80 rounded-xl shadow-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          <div className={`px-4 py-3 border-b ${theme === 'dark' ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50'}`}>
            <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Notifications</h3>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {notifications.map(n => (
              <div key={n.id} className={`px-4 py-3 border-b ${n.unread ? (theme === 'dark' ? 'bg-gray-700/50' : 'bg-indigo-50/50') : (theme === 'dark' ? 'border-gray-700' : 'border-gray-200')}`}>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{n.message}</p>
                <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{n.time}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsMenu;
