import React, { useState } from 'react';
import WorkerNavbar from '../../components/WorkerAdmin/WorkerNavbar';
import JobsList from '../../components/WorkerAdmin/JobsList';
import ApplyModal from '../../components/WorkerAdmin/ApplyModal';
import ProfileModal from '../../components/WorkerAdmin/ProfileModal';

const WorkerDashboard = () => {
  const [theme, setTheme] = useState('light');
  const [currentLang, setCurrentLang] = useState('EN');
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const [profile, setProfile] = useState({
    name: 'Meena Kumari',
    role: 'House Cleaner',
    email: 'meena@example.com',
    phone: '+91 98765 43210',
    location: 'Delhi NCR',
    avatar: 'https://ui-avatars.com/api/?name=Meena+Kumari&background=ef4444&color=fff',
    experience: '4 years'
  });

  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Your application for Plumber was viewed', time: '2h ago', unread: true },
    { id: 2, message: 'New shift available near you', time: '1 day ago', unread: false }
  ]);

  const [jobs, setJobs] = useState([
    { id: 1, title: 'House Cleaning', company: 'Shivani Services', location: 'Delhi NCR', salary: '₹12,000/month', type: 'Part-time', posted: '2 days ago', applied: false },
    { id: 2, title: 'Plumber', company: 'FixIt Co.', location: 'Noida', salary: '₹20,000/month', type: 'Contract', posted: '1 week ago', applied: false },
    { id: 3, title: 'Cook', company: 'Family Home', location: 'Gurugram', salary: '₹18,000/month', type: 'Full-time', posted: '5 days ago', applied: true }
  ]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  const handleApply = (jobId, details) => {
    setJobs(prev => prev.map(j => j.id === jobId ? { ...j, applied: true } : j));
    setNotifications(prev => [{ id: Date.now(), message: `Applied to ${jobs.find(j => j.id === jobId)?.title}`, time: 'Just now', unread: true }, ...prev]);
    setShowApplyModal(false);
    setSelectedJob(null);
  };

  const openApplyModal = (job) => {
    setSelectedJob(job);
    setShowApplyModal(true);
  };

  const handleUpdateProfile = (newProfile) => {
    setProfile(newProfile);
    setShowProfileModal(false);
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-slate-50'}`}>
      <WorkerNavbar
        theme={theme}
        toggleTheme={toggleTheme}
        profile={profile}
        notifications={notifications}
        setCurrentLang={setCurrentLang}
        onOpenProfile={() => setShowProfileModal(true)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
        <JobsList jobs={jobs} theme={theme} onApplyClick={openApplyModal} />
      </main>

      {showApplyModal && selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setShowApplyModal(false)} onSubmit={(details) => handleApply(selectedJob.id, details)} theme={theme} />
      )}

      {showProfileModal && (
        <ProfileModal profile={profile} onClose={() => setShowProfileModal(false)} onSave={handleUpdateProfile} theme={theme} />
      )}
    </div>
  );
};

export default WorkerDashboard;
