import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const JobModal = ({ onClose, onAdd, theme }) => {
  const [newJob, setNewJob] = useState({ title: '', location: '', salary: '', type: 'Full-time', description: '', shiftTiming: 'Day Shift', requirements: '' });

  const handleAdd = () => {
    if (newJob.title && newJob.location && newJob.salary) {
      onAdd(newJob);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`rounded-2xl p-8 max-w-2xl w-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Post a New Job</h3>
          <button onClick={onClose} className="p-2 rounded-lg"><FiX /></button>
        </div>

        {/* form fields */}
        <div className="space-y-4">
          <input value={newJob.title} onChange={e => setNewJob({...newJob, title: e.target.value})} placeholder="Job Title" className="w-full px-4 py-3 border rounded-xl" />
          <input value={newJob.location} onChange={e => setNewJob({...newJob, location: e.target.value})} placeholder="Location" className="w-full px-4 py-3 border rounded-xl" />
          <input value={newJob.salary} onChange={e => setNewJob({...newJob, salary: e.target.value})} placeholder="Salary Range" className="w-full px-4 py-3 border rounded-xl" />
          <div className="flex space-x-4 pt-4">
            <button onClick={onClose} className="flex-1 px-6 py-3 border rounded-xl">Cancel</button>
            <button onClick={handleAdd} className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl">Post Job</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
