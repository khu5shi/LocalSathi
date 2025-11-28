import React from 'react';
import WorkerCard from './WorkerCard';
import { FiSearch } from 'react-icons/fi';

const WorkersList = ({ workers = [], searchTerm, setSearchTerm, onRate, theme }) => {
  const filtered = workers.filter(w =>
    w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Available Workers</h2>
        <div className="w-full sm:w-96 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input type="text" placeholder="Search by name, role, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className={`w-full pl-10 pr-4 py-3 border rounded-xl ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'border-slate-300 bg-white'}`} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((w, i) => <WorkerCard key={w.id} worker={w} theme={theme} index={i} onRate={() => onRate(w)} />)}
      </div>
    </div>
  );
};

export default WorkersList;
