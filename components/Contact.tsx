
import React, { useState } from 'react';
import { askSecurityAdvisor } from '../services/gemini';

const Contact: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAISubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    const res = await askSecurityAdvisor(question);
    setAnswer(res || "Our security specialists are currently offline.");
    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side: Contact Details */}
          <div>
            <h2 className="text-3xl font-black text-sky-700 italic mb-8 uppercase">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 flex-shrink-0">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone Support</h4>
                  <p className="text-gray-600">+91 80106240, 9990567141</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 flex-shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email Address</h4>
                  <p className="text-gray-600">armancctv6@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 flex-shrink-0">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Our Location</h4>
                  <p className="text-gray-600 italic">Head Office: A-11/12 First floor ,Near Yamaha Showroom,Devli Khanpur,New Delhi-110080</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-sky-900 rounded-2xl p-8 text-white relative overflow-hidden">
               <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full -mb-10 -mr-10"></div>
               <h3 className="text-xl font-bold mb-4">ES Expert Planning</h3>
               <p className="text-sky-200 mb-6 italic">Our experts are providing and planning 24/7 technical support services and technologies consultation.</p>
               <div className="flex items-center gap-4">
                  <img src="https://picsum.photos/seed/arman/100/100" className="w-12 h-12 rounded-full border-2 border-sky-400" alt="Mr. Arman" />
                  <div>
                    <p className="font-bold">Mr. Arman</p>
                    <p className="text-xs text-sky-300">Managing Director & Owner</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Side: AI Assistant & Contact Form */}
          <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100">
            <h3 className="text-xl font-black text-sky-800 mb-6 italic flex items-center gap-2">
              <i className="fas fa-robot text-sky-500"></i>
              Ask our AI Security Advisor
            </h3>
            <form onSubmit={handleAISubmit} className="mb-6">
              <textarea 
                className="w-full p-4 rounded-xl border-2 border-sky-200 focus:border-sky-500 outline-none text-sm transition-all italic"
                rows={3}
                placeholder="Ex: What's the best CCTV for a retail store?"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              ></textarea>
              <button 
                type="submit"
                disabled={loading}
                className="mt-4 w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 rounded-xl transition-all shadow-md active:scale-95 disabled:opacity-50"
              >
                {loading ? 'Consulting Advisor...' : 'Ask Advisor Now'}
              </button>
            </form>

            {answer && (
              <div className="p-4 bg-white rounded-xl border border-sky-200 animate-fadeIn">
                <p className="text-xs font-bold text-sky-600 mb-2">Advisor Response:</p>
                <p className="text-sm text-gray-700 leading-relaxed italic">{answer}</p>
              </div>
            )}
            
            <div className="mt-8 pt-8 border-t border-sky-200">
               <p className="text-xs text-gray-500 text-center uppercase tracking-widest font-bold">Standard inquiries: armancctv6@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
