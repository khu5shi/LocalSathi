import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className={`p-2 rounded-xl ${theme === 'dark' ? 'bg-gray-700 text-yellow-400' : 'bg-white/80 text-indigo-600 border border-gray-200'}`}>
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
