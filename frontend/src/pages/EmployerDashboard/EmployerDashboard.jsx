import React, { useState } from 'react';
import Employernavbar from '../../components/EmployerAdmin/Employernavbar.jsx';
import JobList from '../../components/EmployerAdmin/JobList.jsx';
import JobModal from '../../components/EmployerAdmin/JobModal.jsx';
import WorkersList from '../../components/EmployerAdmin/WorkersList.jsx';
import RatingModal from '../../components/EmployerAdmin/RatingModal.jsx';
import ProfileModal from '../../components/EmployerAdmin/ProfileModal.jsx';

const EmployerDashboard = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [showJobModal, setShowJobModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [theme, setTheme] = useState('light');
  const [currentLang, setCurrentLang] = useState('EN');

  const [employerProfile, setEmployerProfile] = useState({
    name: 'Rajesh Gupta',
    company: 'Gupta Constructions',
    email: 'rajesh@guptaconstructions.com',
    phone: '+91 98765 43210',
    location: 'Sector 29, Gurugram, Haryana',
    avatar: 'https://ui-avatars.com/api/?name=Rajesh+Gupta&background=3b82f6&color=fff'
  });

  const [jobs, setJobs] = useState([
    { id: 1, title: 'Construction Worker', location: 'Gurugram, Haryana', salary: '₹15,000 - ₹20,000/month', type: 'Full-time', posted: '2 days ago', applicants: 24 },
    { id: 2, title: 'House Cleaning Staff', location: 'Delhi NCR', salary: '₹12,000 - ₹15,000/month', type: 'Part-time', posted: '5 days ago', applicants: 18 },
    { id: 3, title: 'Plumber', location: 'Noida, UP', salary: '₹18,000 - ₹25,000/month', type: 'Contract', posted: '1 week ago', applicants: 31 },
    { id: 4, title: 'Electrician', location: 'Faridabad, Haryana', salary: '₹20,000 - ₹30,000/month', type: 'Full-time', posted: '3 days ago', applicants: 15 }
  ]);

  const [workers, setWorkers] = useState([
    { id: 1, name: 'Rajesh Kumar', role: 'Construction Worker', rating: 4.8, reviews: 45, skills: ['Masonry', 'Painting', 'Carpentry'], avatar: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=ec4899&color=fff', available: true, experience: '5 years' },
    { id: 2, name: 'Priya Sharma', role: 'House Cleaning', rating: 4.6, reviews: 32, skills: ['Deep Cleaning', 'Kitchen', 'Bathroom'], avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=8b5cf6&color=fff', available: true, experience: '3 years' },
    { id: 3, name: 'Vijay Singh', role: 'Plumber', rating: 4.9, reviews: 58, skills: ['Pipe Fitting', 'Drainage', 'Water Tank'], avatar: 'https://ui-avatars.com/api/?name=Vijay+Singh&background=10b981&color=fff', available: false, experience: '8 years' },
    { id: 4, name: 'Sunita Devi', role: 'Cook', rating: 4.7, reviews: 41, skills: ['North Indian', 'South Indian', 'Chinese'], avatar: 'https://ui-avatars.com/api/?name=Sunita+Devi&background=f59e0b&color=fff', available: true, experience: '6 years' },
    { id: 5, name: 'Ramesh Yadav', role: 'Electrician', rating: 4.8, reviews: 52, skills: ['Wiring', 'AC Repair', 'Inverter'], avatar: 'https://ui-avatars.com/api/?name=Ramesh+Yadav&background=3b82f6&color=fff', available: true, experience: '7 years' },
    { id: 6, name: 'Meena Kumari', role: 'Maid', rating: 4.5, reviews: 28, skills: ['Dusting', 'Mopping', 'Utensil Cleaning'], avatar: 'https://ui-avatars.com/api/?name=Meena+Kumari&background=ef4444&color=fff', available: true, experience: '4 years' },
    { id: 7, name: 'Suresh Patel', role: 'Driver', rating: 4.6, reviews: 35, skills: ['Car', 'Two-Wheeler', 'Navigation'], avatar: 'https://ui-avatars.com/api/?name=Suresh+Patel&background=06b6d4&color=fff', available: false, experience: '10 years' },
    { id: 8, name: 'Anita Verma', role: 'Babysitter', rating: 4.9, reviews: 48, skills: ['Newborn Care', 'Toddler Care', 'Activities'], avatar: 'https://ui-avatars.com/api/?name=Anita+Verma&background=ec4899&color=fff', available: true, experience: '5 years' }
 
  ]);

  const [notifications, setNotifications] = useState([
     { id: 1, type: 'application', message: 'New application for Construction Worker position', time: '5 min ago', unread: true },
    { id: 2, type: 'rating', message: 'Rajesh Kumar rated you 5 stars', time: '1 hour ago', unread: true },
    { id: 3, type: 'message', message: 'Priya Sharma sent you a message', time: '2 hours ago', unread: false },
    { id: 4, type: 'available', message: 'Vijay Singh is now available for work', time: '3 hours ago', unread: false },
  ]);

  // handlers
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const handleAddJob = (newJob) => {
    setJobs(prev => [...prev, { id: prev.length+1, ...newJob, posted: 'Just now', applicants: 0 }]);
  };
  const handleSubmitRating = (workerId, ratingObj) => {
    setWorkers(prev => prev.map(w =>
      w.id === workerId ? { ...w, rating: ((w.rating * w.reviews + ratingObj.stars) / (w.reviews + 1)).toFixed(1), reviews: w.reviews + 1 } : w
    ));
  };
  const handleUpdateProfile = (updatedProfile) => setEmployerProfile(updatedProfile);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-slate-50'}`}>
      <Employernavbar
        theme={theme}
        toggleTheme={toggleTheme}
        employerProfile={employerProfile}
        notifications={notifications}
        setShowProfileModal={setShowProfileModal}
        setCurrentLang={setCurrentLang}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
  {activeTab === 'jobs' ? (
    <JobList
      jobs={jobs}
      theme={theme}
      onOpenAddJob={() => setShowJobModal(true)}   // so navbar or list can open modal
    />
  ) : (
    <WorkersList
      workers={workers}
      theme={theme}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      onRate={(worker) => {                         // open rating modal with selected worker
        setSelectedWorker(worker);
        setShowRatingModal(true);
      }}
    />
  )}
</main>

      {showJobModal && <JobModal onClose={() => setShowJobModal(false)} onAdd={handleAddJob} theme={theme} />}
      {showRatingModal && selectedWorker && (
        <RatingModal
          worker={selectedWorker}
          onClose={() => { setShowRatingModal(false); setSelectedWorker(null); }}
          onSubmit={(ratingObj) => handleSubmitRating(selectedWorker.id, ratingObj)}
          theme={theme}
        />
      )}
      {showProfileModal && (
        <ProfileModal
          profile={employerProfile}
          onClose={() => setShowProfileModal(false)}
          onSave={handleUpdateProfile}
          theme={theme}
        />
      )}
    </div>
  );
};

export default EmployerDashboard;
