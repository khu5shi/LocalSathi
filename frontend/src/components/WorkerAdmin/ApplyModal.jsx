import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const ApplyModal = ({ job, onClose = () => {}, onSubmit = () => {}, theme = 'light' }) => {
  const [details, setDetails] = useState({ message: '', expectedSalary: '' });

  const submit = () => {
    if (!details.message.trim()) return alert('Please add a short message.');
    onSubmit(details);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`rounded-2xl p-8 max-w-lg w-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Apply to {job.title}</h3>
          <button onClick={onClose} className="p-2 rounded-lg"><FiX /></button>
        </div>

        <div className="space-y-4">
          <textarea value={details.message} onChange={e => setDetails({...details, message: e.target.value})} rows="4" className="w-full px-4 py-3 border rounded-xl" placeholder="Short message to employer (experience, availability)..."></textarea>
          <input value={details.expectedSalary} onChange={e => setDetails({...details, expectedSalary: e.target.value})} placeholder="Expected salary (optional)" className="w-full px-4 py-3 border rounded-xl" />

          <div className="flex space-x-4 pt-4">
            <button onClick={onClose} className="flex-1 px-6 py-3 border rounded-xl">Cancel</button>
            <button onClick={submit} className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl">Submit Application</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
