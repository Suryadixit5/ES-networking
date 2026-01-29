
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1920" 
          alt="Security Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h2 className="text-sky-600 font-bold text-2xl mb-2 italic">ES Networking</h2>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            We Offer a Wide Variety of <br/>
            <span className="text-sky-600">Facility Management</span> <br/>
            Services in Global
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl">
            ES provides a single-window approach to e-Security solutions. A Pan-India network of technical teams for speedy installation and support. Comprehensive site, environment, and OB surveys to help determine the ideal solution.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#about" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-md font-bold transition-all shadow-lg hover:shadow-sky-200 inline-block">
              About Us
            </a>
            <Link to="/get-quote" className="bg-white border-2 border-sky-500 text-sky-600 hover:bg-sky-50 px-8 py-3 rounded-md font-bold transition-all inline-block">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute right-10 bottom-10 hidden lg:block animate-bounce-slow">
        <div className="bg-white p-6 rounded-2xl shadow-2xl border border-sky-100 max-w-xs">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white">
              <i className="fas fa-shield-alt text-xl"></i>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-tighter">Trusted By</p>
              <p className="font-bold text-gray-800">500+ Corporations</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 italic">"Delivering impeccable service irrespective of the nature of the industry."</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
