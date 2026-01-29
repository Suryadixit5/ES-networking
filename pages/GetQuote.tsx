import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const GetQuote: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preSelectedService = searchParams.get('service');
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preSelectedService || '',
    requirements: '',
    companyName: '',
    location: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Send email using Google Apps Script
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbyrv2tbXF0-P-hZzEEflG_xRDnz2GNwgOb_4nJj_AS7b7fB14l2AHcEbuk6ovKcGYSY/exec';
      
      const params = new URLSearchParams();
      params.append('name', formData.name);
      params.append('email', formData.email);
      params.append('phone', formData.phone);
      params.append('company', formData.companyName);
      params.append('location', formData.location);
      params.append('service', formData.service);
      params.append('requirements', formData.requirements);

      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: params,
        mode: 'no-cors', // Important for Google Apps Script
      });

      console.log('Quote request sent successfully');

      // Show success message
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          requirements: '',
          companyName: '',
          location: '',
        });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error('Email send error:', err);
      setError('Failed to send quote request. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-sky-400 hover:text-sky-300 mb-4 inline-flex items-center gap-2">
            <i className="fas fa-home"></i>
            Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black italic mt-4">Get a Custom Quote</h1>
          <p className="text-sky-100 text-lg mt-4">Tell us about your security needs and we'll provide a tailored solution</p>
          <div className="w-24 h-1 bg-sky-400 rounded-full mt-4"></div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12 animate-fadeIn">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check text-3xl text-green-500"></i>
              </div>
              <h2 className="text-3xl font-black text-gray-800 mb-4">Quote Request Received!</h2>
              <p className="text-gray-600 text-lg mb-8">
                Thank you for your inquiry. Our team will review your requirements and contact you within 24 hours with a customized quote.
              </p>
              <Link 
                to="/" 
                className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105"
              >
                Return to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 font-semibold">{error}</p>
                </div>
              )}

              {/* Personal Information */}
              <div className="bg-sky-50 p-6 rounded-xl border border-sky-200">
                <h3 className="text-lg font-black text-sky-800 mb-4 italic">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
              </div>

              {/* Service & Location */}
              <div className="bg-sky-50 p-6 rounded-xl border border-sky-200">
                <h3 className="text-lg font-black text-sky-800 mb-4 italic">Service Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Service Required *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">-- Select a Service --</option>
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                      placeholder="City, State"
                    />
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-sky-50 p-6 rounded-xl border border-sky-200">
                <h3 className="text-lg font-black text-sky-800 mb-4 italic">Your Requirements</h3>
                <label className="block text-sm font-bold text-gray-700 mb-2">Detailed Requirements *</label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                  placeholder="Please describe your security needs in detail..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-sky-500 hover:bg-sky-600 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin">⟳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-send"></i>
                      Submit
                    </>
                  )}
                </button>
                <Link
                  to="/"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-lg font-bold text-lg transition-all text-center"
                >
                  Cancel
                </Link>
              </div>

              <p className="text-center text-gray-500 text-sm">
                <i className="fas fa-lock text-green-500"></i> Your information is secure and will only be used to provide you a quote.
              </p>
            </form>
          )}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-clock text-2xl text-sky-600"></i>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Quick Response</h4>
            <p className="text-gray-600 text-sm">We'll get back to you within 24 hours with a detailed quote</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-users text-2xl text-sky-600"></i>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Expert Consultation</h4>
            <p className="text-gray-600 text-sm">Our security experts will discuss your specific needs</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-handshake text-2xl text-sky-600"></i>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Custom Solution</h4>
            <p className="text-gray-600 text-sm">Tailored solutions designed for your specific requirements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
