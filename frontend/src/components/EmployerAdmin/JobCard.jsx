import React from 'react';
import { FiMapPin, FiDollarSign, FiClock, FiCalendar, FiUsers } from 'react-icons/fi';

const JobCard = ({ job, theme, index = 0 }) => {
  return (
    <div className={`rounded-2xl p-6 shadow-sm hover:shadow-xl border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-slate-200'}`} style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{job.title}</h3>
          <div className={`flex flex-wrap gap-4 text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
            <div className="flex items-center space-x-1"><FiMapPin className="text-blue-600" /><span>{job.location}</span></div>
            <div className="flex items-center space-x-1"><FiDollarSign className="text-green-600" /><span>{job.salary}</span></div>
            <div className="flex items-center space-x-1"><FiClock className="text-purple-600" /><span>{job.type}</span></div>
            <div className="flex items-center space-x-1"><FiCalendar className="text-orange-600" /><span>Posted: {job.posted}</span></div>
          </div>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-lg">
            <FiUsers className="text-blue-600" />
            <span className="text-sm font-medium text-blue-700">{job.applicants} Applicants</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
