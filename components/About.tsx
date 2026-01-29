
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-sky-200 rounded-full opacity-50 blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800" 
              alt="Security Technology" 
              className="relative z-10 rounded-3xl shadow-2xl border-8 border-white"
            />
            <div className="absolute -bottom-8 -right-8 bg-sky-600 text-white p-6 rounded-2xl shadow-xl z-20">
              <p className="text-3xl font-black italic">Est. 2015</p>
              <p className="text-xs uppercase tracking-widest font-bold">Leading Innovation</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black text-sky-700 mb-6 italic">Welcome to ES (Event Security System)</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed italic">
              <p>
                Our company "ES" was established in 2015. A professionally managed firm engaged in providing solutions in the digital security domain, under the able guidance of our owner <span className="text-sky-600 font-bold">"Mr. Arman"</span>.
              </p>
              <p>
                ES has been a pioneer of change since its inception, creating a niche for itself and introducing the best products and services in the market that best address the security demands. Over the years, ES has played a vital role in eliminating the fears of lack of security by introducing state-of-the-art electronic surveillance systems.
              </p>
              <p>
                We are catering to the digital security requirements of the corporate and government sector. Representing renowned international companies by offering a wide range of digital security systems, we provide effective communication security solutions keeping in mind the budgetary constraints of our clients.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-100">
                <div className="text-sky-500 mb-4 flex justify-between items-center">
                   <h3 className="font-black text-xl">Mission</h3>
                   <span className="text-4xl text-sky-100 font-black">01</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  To enhance safety and efficiency for our clients by delivering reliable, innovative, and cost-effective security and technology solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-sky-100">
                <div className="text-sky-500 mb-4 flex justify-between items-center">
                   <h3 className="font-black text-xl">Vision</h3>
                   <span className="text-4xl text-sky-100 font-black">02</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  To be the global leader in security and automation technology, transforming spaces into safe, secure, and seamlessly connected environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
