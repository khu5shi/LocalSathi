import React from 'react';
import { FiStar } from 'react-icons/fi';

const WorkerCard = ({ worker, theme, index = 0, onRate }) => {
  return (
    <div className={`rounded-2xl p-6 shadow-sm hover:shadow-xl border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-slate-200'}`} style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex items-start space-x-4">
        <img src={worker.avatar} alt={worker.name} className="w-16 h-16 rounded-full ring-4 ring-slate-100" />
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{worker.name}</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>{worker.role}</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>{worker.experience} experience</p>
            </div>
            {worker.available ? <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Available</span> : <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">Busy</span>}
          </div>

          <div className="flex items-center space-x-2 mb-3">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => <FiStar key={i} className={`text-sm ${i < Math.floor(worker.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} />)}
            </div>
            <span className="text-sm font-semibold text-slate-700">{worker.rating}</span>
            <span className="text-sm text-slate-500">({worker.reviews} reviews)</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {worker.skills.map(s => <span key={s} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg">{s}</span>)}
          </div>

          <button onClick={onRate} className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl"> <FiStar /> <span className="ml-2">Rate Worker</span> </button>
        </div>
      </div>
    </div>
  );
};

export default WorkerCard;
