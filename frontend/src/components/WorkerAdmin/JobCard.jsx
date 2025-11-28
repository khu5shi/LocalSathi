import React from 'react';
import { FiMapPin, FiDollarSign, FiClock } from 'react-icons/fi';

const JobCard = ({ job = {}, theme = 'light', index = 0, onApply = () => {} }) => {
  return (
    <div className={`rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-slate-200'}`} style={{ animationDelay: `${index * 80}ms` }}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{job.title}</h3>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>{job.company} • {job.location}</p>

          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1 text-green-600"><FiDollarSign /> <span>{job.salary}</span></div>
            <div className="flex items-center gap-1 text-purple-600"><FiClock /> <span>{job.type}</span></div>
            <div className="flex items-center gap-1 text-blue-600"><FiMapPin /> <span>{job.posted}</span></div>
          </div>
        </div>

        <div className="ml-4 flex flex-col items-end">
          {job.applied ? (
            <div className="px-4 py-2 bg-slate-100 rounded-lg text-slate-700 text-sm">Applied</div>
          ) : (
            <button onClick={onApply} className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg">Apply</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
