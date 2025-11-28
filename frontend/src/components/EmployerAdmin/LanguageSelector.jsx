import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const languages = [
  { code: 'EN', name: 'English' },
  { code: 'HI', name: 'हिंदी' },
  { code: 'PA', name: 'ਪੰਜਾਬੀ' },
  { code: 'GU', name: 'ગુજરાતી' },
];

const LanguageSelector = ({ setCurrentLang, theme }) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState('EN');

  const onSelect = (lang) => {
    setCurrent(lang.code);
    setCurrentLang && setCurrentLang(lang.code);
    setOpen(false);
  };

  return (
    <div className="relative hidden sm:block">
      <button onClick={() => setOpen(!open)} className={`flex items-center space-x-2 px-3 py-2 rounded-xl ${open ? 'bg-indigo-500 text-white' : theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-white/80 text-gray-700 border border-gray-200'}`}>
        <FaGlobe className="text-sm" />
        <span className="text-sm">{current}</span>
        <FiChevronDown className={`text-xs ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className={`absolute right-0 mt-2 w-40 rounded-xl shadow-xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          {languages.map(l => (
            <button key={l.code} onClick={() => onSelect(l)} className={`w-full px-4 py-2 text-left ${current === l.code ? 'bg-indigo-500 text-white' : theme === 'dark' ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-indigo-50'}`}>
              {l.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
