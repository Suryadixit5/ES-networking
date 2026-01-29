
import React from 'react';
import { INDUSTRIES } from '../constants';

const Industries: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black italic mb-6">Industries We Serve</h2>
          <p className="max-w-3xl mx-auto text-gray-400 italic">
            At ES, we specialize in providing comprehensive security system solutions across a wide range of industries. Our dedicated experts understand the unique challenges and requirements of each sector.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INDUSTRIES.map((industry) => (
            <div 
              key={industry.name}
              className="bg-white hover:bg-sky-500 transition-all cursor-default p-4 text-center rounded shadow-md group"
            >
              <p className="text-gray-900 font-bold italic group-hover:text-white transition-colors">
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
