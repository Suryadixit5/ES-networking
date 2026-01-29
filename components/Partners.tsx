
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-center text-sky-800 italic mb-12">Our Clients</h2>
        
        <div className="marquee border-y-4 border-gray-900 bg-black py-6">
          <div className="marquee-content">
            {CLIENT_LOGOS.map((logo, i) => (
              <div key={i} className="bg-white w-56 h-32 flex items-center justify-center p-2 rounded-sm mx-4">
                <img src={logo} alt="Partner" className="w-48 h-28 object-contain grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="marquee-content">
            {CLIENT_LOGOS.map((logo, i) => (
              <div key={`dup-${i}`} className="bg-white w-56 h-32 flex items-center justify-center p-2 rounded-sm mx-4">
                <img src={logo} alt="Partner" className="w-48 h-28 object-contain grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
