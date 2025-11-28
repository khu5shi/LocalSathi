import React, { useState } from 'react';
import { FiX, FiStar } from 'react-icons/fi';

const RatingModal = ({ worker, onClose, onSubmit, theme }) => {
  const [rating, setRating] = useState({ stars: 5, comment: '' });

  const submit = () => {
    if (rating.comment) {
      onSubmit(rating);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`rounded-2xl p-8 max-w-lg w-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Rate Worker</h3>
          <button onClick={onClose} className="p-2 rounded-lg"><FiX /></button>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <img src={worker.avatar} alt={worker.name} className="w-16 h-16 rounded-full" />
          <div>
            <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{worker.name}</h4>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>{worker.role}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-3">Your Rating</label>
            <div className="flex items-center space-x-2">
              {[1,2,3,4,5].map(s => (
                <button key={s} onClick={() => setRating(prev => ({...prev, stars: s}))} className="transform hover:scale-110">
                  <FiStar className={`text-3xl ${s <= rating.stars ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} />
                </button>
              ))}
              <span className="ml-2 text-lg font-semibold">{rating.stars}.0</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Your Comment</label>
            <textarea value={rating.comment} onChange={e => setRating({...rating, comment: e.target.value})} rows="4" className="w-full px-4 py-3 border rounded-xl" placeholder="Share your experience..."></textarea>
          </div>

          <div className="flex space-x-4 pt-4">
            <button onClick={onClose} className="flex-1 px-6 py-3 border rounded-xl">Cancel</button>
            <button onClick={submit} className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl">Submit Rating</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;
