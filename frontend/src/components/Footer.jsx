import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
   <footer className="bg-indigo-900 text-gray-300 py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white">LocalSathi</h2>
          <p className="mt-3 text-sm text-gray-400">
            Empowering people with technology solutions.<br />
            Established in <span className="text-gray-200 font-semibold">2025</span>.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white">Quick Links</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-bold text-white">Follow Us</h2>
          <div className="flex  space-x-4 mt-3">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaLinkedinIn size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaTwitter size={22} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaFacebookF size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaInstagram size={22} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaYoutube size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-500 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} LocalSathi. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
