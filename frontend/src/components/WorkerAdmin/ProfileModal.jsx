import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const ProfileModal = ({ profile = {}, onClose = () => {}, onSave = () => {}, theme = 'light' }) => {
  const [form, setForm] = useState(profile);

  const save = () => {
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`rounded-2xl p-8 max-w-2xl w-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Edit Profile</h3>
          <button onClick={onClose} className="p-2 rounded-lg"><FiX /></button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img src={form.avatar} alt="avatar" className="w-20 h-20 rounded-full" />
            <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg">Change Photo</button>
          </div>

          <input value={form.name || ''} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 border rounded-xl" />
          <input value={form.role || ''} onChange={e => setForm({...form, role: e.target.value})} className="w-full px-4 py-3 border rounded-xl" />
          <input value={form.email || ''} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 border rounded-xl" />
          <input value={form.phone || ''} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 border rounded-xl" />
          <input value={form.location || ''} onChange={e => setForm({...form, location: e.target.value})} className="w-full px-4 py-3 border rounded-xl" />
          <input value={form.experience || ''} onChange={e => setForm({...form, experience: e.target.value})} className="w-full px-4 py-3 border rounded-xl" />

          <div className="flex space-x-4 pt-4">
            <button onClick={onClose} className="flex-1 px-6 py-3 border rounded-xl">Cancel</button>
            <button onClick={save} className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
