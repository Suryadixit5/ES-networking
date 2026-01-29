
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
               <div className="w-12 h-8 bg-sky-500 rounded flex items-center justify-center font-bold">ES</div>
               <span className="font-black text-xl italic tracking-tighter">Event Security</span>
            </div>
            <p className="text-gray-400 text-sm italic leading-relaxed">
              ES (Event Security System) is a leading security provider founded in 2015 by Mr. Arman, dedicated to providing high-quality surveillance and protection systems.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sky-500 mb-6 italic uppercase">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400 italic">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sky-500 mb-6 italic uppercase">Core Services</h4>
            <ul className="space-y-4 text-sm text-gray-400 italic">
              <li>CCTV Surveillance</li>
              <li>Fire Safety Systems</li>
              <li>Access Control</li>
              <li>EPABX Networking</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sky-500 mb-6 italic uppercase">Social Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-600 transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-600 transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-600 transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-600 transition-all">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 text-center text-gray-500 text-xs italic">
          <p>&copy; {new Date().getFullYear()} ES (Event Security System). All Rights Reserved. Managed by Mr. Arman.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
