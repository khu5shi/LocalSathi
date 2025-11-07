import { useState, useEffect } from "react";
import { 
  FaBriefcase, FaMapMarkerAlt, FaStar, FaBell, FaUser,
  FaHeart, FaEye, FaClock, FaMoneyBillWave, FaCheckCircle,
  FaFilter, FaSearch, FaChartLine, FaTrophy, FaFire,
  FaBuilding, FaWrench, FaCar, FaUtensils, FaBroom, FaTools
} from "react-icons/fa";

const Homepageforworker = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showNotifications, setShowNotifications] = useState(false);
  const [appliedJobs, setAppliedJobs] = useState([]);

  // Mock worker data
  const workerProfile = {
    name: "Rajesh Kumar",
    avatar: "👨‍🔧",
    rating: 4.8,
    completedJobs: 47,
    skills: ["Construction", "Plumbing", "Electrical"],
    location: "New Delhi",
    profileCompletion: 85
  };

  const stats = [
    {
      icon: <FaBriefcase />,
      label: "Jobs Applied",
      value: "12",
      change: "+3 this week",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <FaCheckCircle />,
      label: "Jobs Completed",
      value: "47",
      change: "+5 this month",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <FaStar />,
      label: "Average Rating",
      value: "4.8",
      change: "Excellent",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: <FaMoneyBillWave />,
      label: "Earnings",
      value: "₹45,200",
      change: "+₹8,500 this month",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "job_match",
      title: "New Job Match!",
      message: "A construction job near you matches your profile",
      time: "5 min ago",
      unread: true,
      icon: <FaFire className="text-orange-500" />
    },
    {
      id: 2,
      type: "application",
      title: "Application Viewed",
      message: "Sharma Construction viewed your application",
      time: "1 hour ago",
      unread: true,
      icon: <FaEye className="text-blue-500" />
    },
    {
      id: 3,
      type: "review",
      title: "New Review",
      message: "You received 5 stars from your last job!",
      time: "2 hours ago",
      unread: false,
      icon: <FaStar className="text-yellow-500" />
    }
  ];

  const recommendedJobs = [
    {
      id: 1,
      title: "Construction Worker Needed",
      company: "Sharma Builders",
      location: "Connaught Place, Delhi",
      distance: "2.3 km",
      salary: "₹600-800/day",
      type: "Full-time",
      posted: "2 hours ago",
      urgent: true,
      matchScore: 95,
      icon: <FaBuilding />,
      skills: ["Construction", "Masonry"],
      description: "Need experienced worker for residential project"
    },
    {
      id: 2,
      title: "Plumber Required",
      company: "Quick Fix Services",
      location: "Karol Bagh, Delhi",
      distance: "3.5 km",
      salary: "₹700-1000/day",
      type: "Contract",
      posted: "5 hours ago",
      urgent: false,
      matchScore: 88,
      icon: <FaWrench />,
      skills: ["Plumbing", "Pipe Fitting"],
      description: "Urgent plumbing work in commercial building"
    },
    {
      id: 3,
      title: "Driver Position Open",
      company: "City Logistics",
      location: "Rohini, Delhi",
      distance: "5.1 km",
      salary: "₹15,000-18,000/month",
      type: "Full-time",
      posted: "1 day ago",
      urgent: false,
      matchScore: 72,
      icon: <FaCar />,
      skills: ["Driving", "Navigation"],
      description: "Need reliable driver with valid license"
    },
    {
      id: 4,
      title: "Cook Wanted",
      company: "Tasty Bites Restaurant",
      location: "Lajpat Nagar, Delhi",
      distance: "4.2 km",
      salary: "₹500-700/day",
      type: "Part-time",
      posted: "3 hours ago",
      urgent: true,
      matchScore: 65,
      icon: <FaUtensils />,
      skills: ["Cooking", "Food Prep"],
      description: "Evening shift cook needed immediately"
    }
  ];

  const handleApplyJob = (jobId) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs([...appliedJobs, jobId]);
    }
  };

  const categories = [
    { name: "All Jobs", value: "all", icon: <FaBriefcase /> },
    { name: "Nearby", value: "nearby", icon: <FaMapMarkerAlt /> },
    { name: "High Paying", value: "high-pay", icon: <FaMoneyBillWave /> },
    { name: "Urgent", value: "urgent", icon: <FaClock /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/30">
      {/* Top Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-3xl">{workerProfile.avatar}</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Welcome back, {workerProfile.name}! 👋
                </h2>
                <p className="text-sm text-gray-600">Ready to find your next opportunity?</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-3 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-all duration-300"
                >
                  <FaBell className="text-xl text-indigo-600" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                    2
                  </span>
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-down">
                    <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                      <h3 className="font-bold">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer ${
                            notif.unread ? 'bg-blue-50/50' : ''
                          }`}
                        >
                          <div className="flex gap-3">
                            <div className="text-2xl">{notif.icon}</div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-semibold text-sm text-gray-900">{notif.title}</h4>
                                {notif.unread && (
                                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                )}
                              </div>
                              <p className="text-xs text-gray-600 mb-1">{notif.message}</p>
                              <span className="text-xs text-gray-400">{notif.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Profile */}
              <button className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:shadow-lg transition-all duration-300">
                <FaUser className="text-xl text-white" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Profile Completion Banner */}
        {workerProfile.profileCompletion < 100 && (
          <div className="mb-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Complete Your Profile</h3>
                <p className="text-white/90 mb-3">Get 3x more job matches by completing your profile</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 max-w-xs h-2 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-500"
                      style={{ width: `${workerProfile.profileCompletion}%` }}
                    ></div>
                  </div>
                  <span className="font-bold">{workerProfile.profileCompletion}%</span>
                </div>
              </div>
              <button className="px-6 py-3 bg-white text-orange-600 font-bold rounded-xl hover:scale-105 transition-all duration-300">
                Complete Now
              </button>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 ${stat.bgColor} rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <div className={`text-2xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.icon}
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
              <div className="text-3xl font-black text-gray-900 mb-2">{stat.value}</div>
              <div className="text-xs text-emerald-600 font-semibold">{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Job Listings */}
          <div className="lg:col-span-2">
            {/* Search & Filter Bar */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search jobs by title, skill, or location..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                  />
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                  <FaFilter />
                  Filters
                </button>
              </div>

              {/* Category Tabs */}
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveTab(cat.value)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                      activeTab === cat.value
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.icon}
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Recommended Jobs{" "}
                  <span className="text-lg text-indigo-600">({recommendedJobs.length})</span>
                </h2>
                <button className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                  View All →
                </button>
              </div>

              {recommendedJobs.map((job) => (
                <div
                  key={job.id}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    {/* Job Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {job.icon}
                    </div>

                    {/* Job Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                              {job.title}
                            </h3>
                            {job.urgent && (
                              <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full flex items-center gap-1 animate-pulse">
                                <FaFire /> URGENT
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <span className="flex items-center gap-1">
                              <FaBuilding className="text-gray-400" />
                              {job.company}
                            </span>
                            <span className="flex items-center gap-1">
                              <FaMapMarkerAlt className="text-gray-400" />
                              {job.location}
                            </span>
                          </div>
                        </div>

                        {/* Match Score */}
                        <div className="text-center">
                          <div className="relative inline-flex items-center justify-center w-16 h-16">
                            <svg className="transform -rotate-90 w-16 h-16">
                              <circle
                                cx="32"
                                cy="32"
                                r="28"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                                className="text-gray-200"
                              />
                              <circle
                                cx="32"
                                cy="32"
                                r="28"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                                strokeDasharray={`${2 * Math.PI * 28}`}
                                strokeDashoffset={`${2 * Math.PI * 28 * (1 - job.matchScore / 100)}`}
                                className="text-emerald-500 transition-all duration-1000"
                              />
                            </svg>
                            <span className="absolute text-sm font-bold text-emerald-600">
                              {job.matchScore}%
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">Match</p>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-3">{job.description}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1 text-sm font-bold text-emerald-600">
                            <FaMoneyBillWave />
                            {job.salary}
                          </span>
                          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                            {job.type}
                          </span>
                          <span className="text-xs text-gray-500">{job.distance} away</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                            <FaHeart className={appliedJobs.includes(job.id) ? "text-red-500" : "text-gray-600"} />
                          </button>
                          <button
                            onClick={() => handleApplyJob(job.id)}
                            disabled={appliedJobs.includes(job.id)}
                            className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${
                              appliedJobs.includes(job.id)
                                ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                                : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                            }`}
                          >
                            {appliedJobs.includes(job.id) ? '✓ Applied' : 'Apply Now'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-2xl">
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">{workerProfile.avatar}</div>
                <h3 className="text-2xl font-bold mb-1">{workerProfile.name}</h3>
                <p className="text-white/80 text-sm mb-3">{workerProfile.location}</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <FaStar className="text-yellow-300" />
                  <span className="font-bold">{workerProfile.rating}</span>
                  <span className="text-white/70">({workerProfile.completedJobs} jobs)</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {workerProfile.skills.map((skill, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                    <span className="font-semibold">{skill}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-3 bg-white text-indigo-600 font-bold rounded-xl hover:scale-105 transition-all duration-300">
                View Full Profile
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors text-left">
                  <FaChartLine className="text-indigo-600 text-xl" />
                  <span className="font-semibold text-gray-900">View Analytics</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors text-left">
                  <FaTrophy className="text-emerald-600 text-xl" />
                  <span className="font-semibold text-gray-900">Achievements</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors text-left">
                  <FaStar className="text-purple-600 text-xl" />
                  <span className="font-semibold text-gray-900">My Reviews</span>
                </button>
              </div>
            </div>

            {/* Tips Card */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-orange-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white">
                  💡
                </div>
                <h3 className="font-bold text-gray-900">Pro Tip</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Respond to job applications within 2 hours to increase your chances by 70%!
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Homepageforworker;