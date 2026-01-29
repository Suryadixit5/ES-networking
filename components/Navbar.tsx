
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (href: string) => {
    if (href.startsWith('#')) {
      setActiveDropdown(null);
      const targetId = href;
      setTimeout(() => {
        document.querySelector(targetId)?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 0);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-16 h-12 flex items-center justify-center">
               <svg viewBox="0 0 100 60" className="w-full h-full">
                 <path d="M10 30 Q 30 10, 50 30 T 90 30" stroke="#0ea5e9" fill="none" strokeWidth="4" />
                 <text x="50" y="45" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#0369a1">ES</text>
               </svg>
            </div>
            <div className={`font-bold text-xl ${isScrolled ? 'text-sky-700' : 'text-sky-700'}`}>
              <span className="block leading-tight">ES</span>
              <span className="text-xs uppercase tracking-widest text-sky-600 block leading-none">Networking</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.label} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.label === 'Home' ? (
                  <Link 
                    to="/"
                    className={`text-sm font-semibold hover:text-sky-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
                  >
                    {link.label}
                  </Link>
                ) : link.href.startsWith('#') ? (
                  <a 
                    href={link.href}
                    onClick={() => handleAnchorClick(link.href)}
                    className={`text-sm font-semibold hover:text-sky-500 transition-colors cursor-pointer ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
                  >
                    {link.label}
                    {link.subLinks && <i className="fas fa-chevron-down ml-1 text-[10px]"></i>}
                  </a>
                ) : (
                  <Link 
                    to={link.href}
                    className={`text-sm font-semibold hover:text-sky-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
                  >
                    {link.label}
                    {link.subLinks && <i className="fas fa-chevron-down ml-1 text-[10px]"></i>}
                  </Link>
                )}
                
                {link.subLinks && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border-t-2 border-sky-500 rounded-b-lg py-2 animate-fadeIn">
                    {link.subLinks.map((sub) => (
                      <Link 
                        key={sub} 
                        to={`/service/${encodeURIComponent(sub)}`}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2 text-xs text-gray-700 hover:bg-sky-50 hover:text-sky-600 border-b border-gray-50 last:border-0 transition-colors"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <Link to="/get-quote" className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-sky-200 transition-all hover:scale-105 active:scale-95 inline-block">
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
