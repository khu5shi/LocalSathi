import React, { useState } from 'react';
import { FiPlus, FiBriefcase, FiUsers, FiUser, FiStar, FiMessageSquare, FiEdit2, FiSearch, FiFilter, FiCalendar, FiMapPin, FiDollarSign, FiClock, FiX, FiBell, FiSettings, FiLogOut, FiChevronDown, FiMail, FiPhone, FiHome } from 'react-icons/fi';
import { FaGlobe, FaMoon, FaSun } from 'react-icons/fa';

const EmployerDashboard = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [showJobModal, setShowJobModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [theme, setTheme] = useState('light');
  const [currentLang, setCurrentLang] = useState('EN');
  const [scrolled, setScrolled] = useState(false);
  
  const [employerProfile, setEmployerProfile] = useState({
    name: 'Rajesh Gupta',
    company: 'Gupta Constructions',
    email: 'rajesh@guptaconstructions.com',
    phone: '+91 98765 43210',
    location: 'Sector 29, Gurugram, Haryana',
    avatar: 'https://ui-avatars.com/api/?name=Rajesh+Gupta&background=3b82f6&color=fff'
  });

  const [notifications, setNotifications] = useState([
    { id: 1, type: 'application', message: 'New application for Construction Worker position', time: '5 min ago', unread: true },
    { id: 2, type: 'rating', message: 'Rajesh Kumar rated you 5 stars', time: '1 hour ago', unread: true },
    { id: 3, type: 'message', message: 'Priya Sharma sent you a message', time: '2 hours ago', unread: false },
    { id: 4, type: 'available', message: 'Vijay Singh is now available for work', time: '3 hours ago', unread: false },
  ]);

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'HI', name: 'हिंदी' },
    { code: 'PA', name: 'ਪੰਜਾਬੀ' },
    { code: 'GU', name: 'ગુજરાતી' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
  };

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

  const [newJob, setNewJob] = useState({
    title: '',
    location: '',
    salary: '',
    type: 'Full-time',
    description: '',
    shiftTiming: 'Day Shift',
    requirements: ''
  });

  const [rating, setRating] = useState({
    stars: 5,
    comment: ''
  });

  const handleAddJob = () => {
    if (newJob.title && newJob.location && newJob.salary) {
      setJobs([...jobs, { 
        id: jobs.length + 1, 
        ...newJob, 
        posted: 'Just now', 
        applicants: 0 
      }]);
      setNewJob({ title: '', location: '', salary: '', type: 'Full-time', description: '', shiftTiming: 'Day Shift', requirements: '' });
      setShowJobModal(false);
    }
  };

  const handleSubmitRating = () => {
    if (selectedWorker && rating.comment) {
      const updatedWorkers = workers.map(w => 
        w.id === selectedWorker.id 
          ? { ...w, rating: ((w.rating * w.reviews + rating.stars) / (w.reviews + 1)).toFixed(1), reviews: w.reviews + 1 }
          : w
      );
      setWorkers(updatedWorkers);
      setShowRatingModal(false);
      setRating({ stars: 5, comment: '' });
      setSelectedWorker(null);
    }
  };

  const handleUpdateProfile = () => {
    setShowProfileModal(false);
  };

  const filteredWorkers = workers.filter(worker =>
    worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    worker.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    worker.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 to-slate-100'
    }`}>
      {/* Modern Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? theme === 'dark'
              ? 'bg-gray-800/95 backdrop-blur-lg shadow-lg shadow-black/40 py-3'
              : 'bg-white/95 backdrop-blur-lg shadow-xl shadow-indigo-100/50 py-3'
            : theme === 'dark'
            ? 'bg-gray-800/80 backdrop-blur-md py-4'
            : 'bg-white/80 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="group relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <FiBriefcase className="text-white text-xl" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'
                }`}>
                  LocalSathi
                </h1>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                  Employer Dashboard
                </p>
              </div>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={() => setActiveTab('jobs')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'jobs'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                    : theme === 'dark'
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-indigo-50'
                }`}
              >
                <FiBriefcase className="text-lg" />
                <span>Job Posts</span>
              </button>
              <button
                onClick={() => setActiveTab('workers')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'workers'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                    : theme === 'dark'
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-indigo-50'
                }`}
              >
                <FiUsers className="text-lg" />
                <span>Workers</span>
              </button>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Language Selector */}
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-xl font-medium transition-all duration-300 ${
                    showLangMenu
                      ? 'bg-indigo-500 text-white shadow-lg'
                      : theme === 'dark'
                      ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                      : 'bg-white/80 text-gray-700 hover:bg-indigo-50 border border-gray-200'
                  }`}
                >
                  <FaGlobe className="text-sm" />
                  <span className="text-sm">{currentLang}</span>
                  <FiChevronDown
                    className={`text-xs transition-transform duration-300 ${
                      showLangMenu ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {showLangMenu && (
                  <div className={`absolute right-0 mt-2 w-40 rounded-xl shadow-xl overflow-hidden animate-slideDown ${
                    theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                  }`}>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setShowLangMenu(false);
                        }}
                        className={`w-full px-4 py-2 text-left transition-colors ${
                          currentLang === lang.code
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                            : theme === 'dark'
                            ? 'text-gray-200 hover:bg-gray-700'
                            : 'text-gray-700 hover:bg-indigo-50'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
                    : 'bg-white/80 hover:bg-indigo-50 text-indigo-600 border border-gray-200'
                }`}
              >
                {theme === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
              </button>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className={`relative p-2 rounded-xl transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                      : 'bg-white/80 hover:bg-indigo-50 text-gray-700 border border-gray-200'
                  }`}
                >
                  <FiBell className="text-lg" />
                  {notifications.some(n => n.unread) && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  )}
                </button>

                {showNotifications && (
                  <div className={`absolute right-0 mt-2 w-80 rounded-xl shadow-xl overflow-hidden animate-slideDown ${
                    theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                  }`}>
                    <div className={`px-4 py-3 border-b ${
                      theme === 'dark' ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50'
                    }`}>
                      <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        Notifications
                      </h3>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className={`px-4 py-3 border-b transition-colors ${
                            notif.unread
                              ? theme === 'dark'
                                ? 'bg-gray-700/50 border-gray-700'
                                : 'bg-indigo-50/50 border-gray-200'
                              : theme === 'dark'
                              ? 'border-gray-700 hover:bg-gray-700'
                              : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <p className={`text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                            {notif.message}
                          </p>
                          <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                            {notif.time}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all duration-300 ${
                    showUserMenu
                      ? 'bg-indigo-500 text-white shadow-lg'
                      : theme === 'dark'
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-white/80 hover:bg-indigo-50 border border-gray-200'
                  }`}
                >
                  <img
                    src={employerProfile.avatar}
                    alt="Profile"
                    className="w-8 h-8 rounded-full ring-2 ring-white/50"
                  />
                  <span className={`hidden sm:block font-medium ${
                    showUserMenu ? 'text-white' : theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    {employerProfile.name}
                  </span>
                  <FiChevronDown
                    className={`text-sm transition-transform duration-300 ${
                      showUserMenu ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {showUserMenu && (
                  <div className={`absolute right-0 mt-2 w-64 rounded-xl shadow-xl overflow-hidden animate-slideDown ${
                    theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                  }`}>
                    {/* User Info */}
                    <div className={`px-4 py-3 border-b ${
                      theme === 'dark' ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <img
                          src={employerProfile.avatar}
                          alt="Profile"
                          className="w-12 h-12 rounded-full ring-2 ring-indigo-500"
                        />
                        <div>
                          <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            {employerProfile.name}
                          </p>
                          <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            {employerProfile.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      <button
                        onClick={() => {
                          setShowProfileModal(true);
                          setShowUserMenu(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 transition-colors ${
                          theme === 'dark' ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-indigo-50'
                        }`}
                      >
                        <FiUser className="text-lg" />
                        <span>My Profile</span>
                      </button>
                      <button
                        className={`w-full flex items-center space-x-3 px-4 py-3 transition-colors ${
                          theme === 'dark' ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-indigo-50'
                        }`}
                      >
                        <FiSettings className="text-lg" />
                        <span>Settings</span>
                      </button>
                      <div className={`my-2 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}></div>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <FiLogOut className="text-lg" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">{/* Added margin top for navbar spacing */}
        {/* Jobs Tab */}
        {activeTab === 'jobs' && (
                      <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                Your Job Posts
              </h2>
              <button
                onClick={() => setShowJobModal(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <FiPlus className="text-lg" />
                <span className="font-medium">Post New Job</span>
              </button>
            </div>

            <div className="grid gap-6">
              {jobs.map((job, index) => (
                <div
                  key={job.id}
                  className={`rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border hover:border-blue-300 animate-slideUp ${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-slate-200'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                        {job.title}
                      </h3>
                      <div className={`flex flex-wrap gap-4 text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                        <div className="flex items-center space-x-1">
                          <FiMapPin className="text-blue-600" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FiDollarSign className="text-green-600" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FiClock className="text-purple-600" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FiCalendar className="text-orange-600" />
                          <span>Posted: {job.posted}</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-lg">
                        <FiUsers className="text-blue-600" />
                        <span className="text-sm font-medium text-blue-700">{job.applicants} Applicants</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Workers Tab */}
        {activeTab === 'workers' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                Available Workers
              </h2>
              <div className="w-full sm:w-96 relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name, role, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'border-slate-300 bg-white'
                  }`}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredWorkers.map((worker, index) => (
                <div
                  key={worker.id}
                  className={`rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border hover:border-blue-300 animate-slideUp ${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-slate-200'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={worker.avatar}
                      alt={worker.name}
                      className="w-16 h-16 rounded-full ring-4 ring-slate-100"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                            {worker.name}
                          </h3>
                          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                            {worker.role}
                          </p>
                          <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>
                            {worker.experience} experience
                          </p>
                        </div>
                        {worker.available ? (
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                            Available
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                            Busy
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <FiStar
                              key={i}
                              className={`text-sm ${
                                i < Math.floor(worker.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-slate-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-slate-700">{worker.rating}</span>
                        <span className="text-sm text-slate-500">({worker.reviews} reviews)</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {worker.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => {
                          setSelectedWorker(worker);
                          setShowRatingModal(true);
                        }}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <FiStar className="text-sm" />
                        <span className="text-sm font-medium">Rate Worker</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Add Job Modal */}
      {showJobModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className={`rounded-2xl p-8 max-w-2xl w-full shadow-2xl animate-scaleIn ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                Post a New Job
              </h3>
              <button
                onClick={() => setShowJobModal(false)}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark' ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-slate-100 text-slate-500'
                }`}
              >
                <FiX className="text-xl" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Job Title
                </label>
                <input
                  type="text"
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-slate-300'
                  }`}
                  placeholder="e.g., Construction Worker, Plumber, Cook"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Location
                </label>
                <input
                  type="text"
                  value={newJob.location}
                  onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-slate-300'
                  }`}
                  placeholder="e.g., Gurugram, Delhi NCR, Noida"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Salary Range
                </label>
                <input
                  type="text"
                  value={newJob.salary}
                  onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-slate-300'
                  }`}
                  placeholder="e.g., ₹15,000 - ₹25,000/month"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Job Type
                </label>
                <select
                  value={newJob.type}
                  onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'border-slate-300'
                  }`}
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Daily Wage</option>
                  <option>Monthly Basis</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Shift Timing
                </label>
                <select
                  value={newJob.shiftTiming}
                  onChange={(e) => setNewJob({ ...newJob, shiftTiming: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'border-slate-300'
                  }`}
                >
                  <option>Day Shift (9 AM - 6 PM)</option>
                  <option>Night Shift (9 PM - 6 AM)</option>
                  <option>Morning Shift (6 AM - 2 PM)</option>
                  <option>Evening Shift (2 PM - 10 PM)</option>
                  <option>Flexible Hours</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Requirements
                </label>
                <textarea
                  value={newJob.requirements}
                  onChange={(e) => setNewJob({ ...newJob, requirements: e.target.value })}
                  rows="3"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-slate-300'
                  }`}
                  placeholder="e.g., 2+ years experience, own tools, physical fitness..."
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Job Description
                </label>
                <textarea
                  value={newJob.description}
                  onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                  rows="3"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-slate-300'
                  }`}
                  placeholder="Describe the work responsibilities and daily tasks..."
                />
              </div>
              <div className="flex space-x-4 pt-4">
                <button
                  onClick={() => setShowJobModal(false)}
                  className={`flex-1 px-6 py-3 border rounded-xl transition-all duration-300 ${
                    theme === 'dark' ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddJob}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Post Job
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rating Modal */}
      {showRatingModal && selectedWorker && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className={`rounded-2xl p-8 max-w-lg w-full shadow-2xl animate-scaleIn ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                Rate Worker
              </h3>
              <button
                onClick={() => setShowRatingModal(false)}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark' ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-slate-100 text-slate-500'
                }`}
              >
                <FiX className="text-xl" />
              </button>
            </div>
            <div className={`flex items-center space-x-4 mb-6 pb-6 border-b ${
              theme === 'dark' ? 'border-gray-700' : 'border-slate-200'
            }`}>
              <img
                src={selectedWorker.avatar}
                alt={selectedWorker.name}
                className="w-16 h-16 rounded-full ring-4 ring-slate-100"
              />
              <div>
                <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                  {selectedWorker.name}
                </h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                  {selectedWorker.role}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Your Rating
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating({ ...rating, stars: star })}
                      className="transform hover:scale-110 transition-transform"
                    >
                      <FiStar
                        className={`text-3xl ${
                          star <= rating.stars
                            ? 'fill-yellow-400 text-yellow-400'
                            : theme === 'dark' ? 'text-gray-600' : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className={`ml-2 text-lg font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-slate-700'
                  }`}>
                    {rating.stars}.0
                  </span>
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Your Comment
                </label>
                <textarea
                  value={rating.comment}
                  onChange={(e) => setRating({ ...rating, comment: e.target.value })}
                  rows="4"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-slate-300'
                  }`}
                  placeholder="Share your experience working with this person..."
                />
              </div>
              <div className="flex space-x-4 pt-4">
                <button
                  onClick={() => setShowRatingModal(false)}
                  className={`flex-1 px-6 py-3 border rounded-xl transition-all duration-300 ${
                    theme === 'dark' ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitRating}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Submit Rating
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className={`rounded-2xl p-8 max-w-2xl w-full shadow-2xl animate-scaleIn ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                Edit Profile
              </h3>
              <button
                onClick={() => setShowProfileModal(false)}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark' ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-slate-100 text-slate-500'
                }`}
              >
                <FiX className="text-xl" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={employerProfile.avatar}
                  alt="Profile"
                  className="w-20 h-20 rounded-full ring-4 ring-slate-100"
                />
                <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                  Change Photo
                </button>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Full Name
                </label>
                <input
                  type="text"
                  value={employerProfile.name}
                  onChange={(e) => setEmployerProfile({ ...employerProfile, name: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'border-slate-300'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Company Name
                </label>
                <input
                  type="text"
                  value={employerProfile.company}
                  onChange={(e) => setEmployerProfile({ ...employerProfile, company: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'border-slate-300'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  value={employerProfile.email}
                  onChange={(e) => setEmployerProfile({ ...employerProfile, email: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'border-slate-300'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Phone
                </label>
                <input
                  type="tel"
                  value={employerProfile.phone}
                  onChange={(e) => setEmployerProfile({ ...employerProfile, phone: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'border-slate-300'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Location
                </label>
                <input
                  type="text"
                  value={employerProfile.location}
                  onChange={(e) => setEmployerProfile({ ...employerProfile, location: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'border-slate-300'
                  }`}
                />
              </div>
              <div className="flex space-x-4 pt-4">
                <button
                  onClick={() => setShowProfileModal(false)}
                  className={`flex-1 px-6 py-3 border rounded-xl transition-all duration-300 ${
                    theme === 'dark' ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateProfile}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default EmployerDashboard;