import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use react-router-dom for navigation
import { Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'; 


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-6 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-extrabold text-xl">M</span>
              </div>
              <span className="text-3xl font-extrabold tracking-tight">MedLink</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Revolutionizing healthcare through technology. Making quality healthcare
              accessible, efficient, and secure for everyone.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons - added more examples */}
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer shadow-md">
                  <Facebook className="w-5 h-5 text-gray-300" />
                </div>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer shadow-md">
                  <Twitter className="w-5 h-5 text-gray-300" />
                </div>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer shadow-md">
                  <Linkedin className="w-5 h-5 text-gray-300" />
                </div>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer shadow-md">
                  <Instagram className="w-5 h-5 text-gray-300" />
                </div>
              </a>
              {/* This is the Globe icon from your original code, kept for consistency */}
              <a href="#" aria-label="Website"> {/* Consider linking to the main website or a specific page */}
                 <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer shadow-md">
                   <Globe className="w-5 h-5 text-gray-300" />
                 </div>
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Platform</h3>
            <div className="space-y-3 text-gray-400">
              <Link to="/patients" className="block hover:text-white cursor-pointer transition-colors text-base">For Patients</Link>
              <Link to="/doctors" className="block hover:text-white cursor-pointer transition-colors text-base">For Doctors</Link>
              <Link to="/api-access" className="block hover:text-white cursor-pointer transition-colors text-base">API Access</Link>
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Support</h3>
            <div className="space-y-3 text-gray-400">
              <Link to="/help-center" className="block hover:text-white cursor-pointer transition-colors text-base">Help Center</Link>
              <Link to="/contact" className="block hover:text-white cursor-pointer transition-colors text-base">Contact Us</Link>
              <Link to="/privacy-policy" className="block hover:text-white cursor-pointer transition-colors text-base">Privacy Policy</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MedLink. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm flex items-center justify-center">
            Made with <span className="text-red-500 mx-1">❤️</span> for better healthcare
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;