import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaHeart, FaRocket } from "react-icons/fa";

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    { 
      icon: <FaLinkedinIn size={20} />, 
      url: "https://linkedin.com", 
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:bg-blue-500",
      name: "LinkedIn"
    },
    { 
      icon: <FaTwitter size={20} />, 
      url: "https://twitter.com", 
      color: "from-sky-400 to-sky-600",
      hoverColor: "hover:bg-sky-400",
      name: "Twitter"
    },
    { 
      icon: <FaFacebookF size={20} />, 
      url: "https://facebook.com", 
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:bg-blue-600",
      name: "Facebook"
    },
    { 
      icon: <FaInstagram size={20} />, 
      url: "https://instagram.com", 
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600",
      name: "Instagram"
    },
    { 
      icon: <FaYoutube size={20} />, 
      url: "https://youtube.com", 
      color: "from-red-500 to-red-700",
      hoverColor: "hover:bg-red-500",
      name: "YouTube"
    },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-950 text-gray-300 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <FaRocket className="text-white text-xl" />
              </div>
              <h2 className="text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                LocalSathi
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Empowering people with innovative technology solutions that connect communities and create opportunities.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Established in</span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full font-bold border border-indigo-500/30">
                2025
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full group-hover:w-6 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Follow Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Join our community and stay updated with the latest news
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className={`group relative w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 ${social.hoverColor} hover:border-transparent transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                >
                  <span className={`${hoveredSocial === index ? 'text-white' : 'text-gray-400'} transition-colors duration-300`}>
                    {social.icon}
                  </span>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 blur-xl rounded-xl transition-opacity duration-300 -z-10`}></div>
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12 p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl border border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Stay In The Loop</h3>
            <p className="text-gray-400 mb-6">Subscribe to our newsletter for updates and exclusive offers</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-all duration-300 flex-1 sm:max-w-md"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gradient-to-r from-indigo-950 via-indigo-900 to-purple-950 text-gray-500">
              ✦
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} LocalSathi.</span>
            <span className="hidden sm:inline">All Rights Reserved.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <a href="/terms" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>in India</span>
          </div>
        </div>
      </div>

      {/* Animated bottom accent */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x"></div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;