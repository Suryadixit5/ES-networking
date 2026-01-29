
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';
import GetQuote from './pages/GetQuote';

const AppContent: React.FC = () => {
  const location = useLocation();

  // Simple scroll behavior for anchor links
  useEffect(() => {
    if (location.pathname === '/') {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId) {
            document.querySelector(targetId)?.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });
    }
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900 selection:bg-sky-200">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Partners />
            <Services />
            <Industries />
            <Contact />
          </>
        } />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/get-quote" element={<GetQuote />} />
      </Routes>
      <Footer />

      {/* Persistent Floating Contact Buttons */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        <a 
          href="https://wa.me/918010626480" 
          target="_blank" 
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform animate-bounce"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
        <a 
          href="tel:+918010626480" 
          className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        >
          <i className="fas fa-phone-alt text-xl"></i>
        </a>
      </div>

      {/* Floating Scroll Top */}
      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-sky-500/20 hover:bg-sky-500 backdrop-blur-md rounded-lg flex items-center justify-center text-sky-600 hover:text-white transition-all border border-sky-200"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
