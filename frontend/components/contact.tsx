'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    // Show success message or redirect
    alert('Message sent successfully!');
  };
  
  return (
    <div className="bg-[#f5f0e8] min-h-screen w-full px-4 md:px-8 lg:px-16 py-8 md:py-10 lg:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center">
            <div className="bg-black p-2 rounded-md mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="font-bold text-lg">StudentAdda</span>
          </div>
          <button className="bg-black text-white rounded-full px-4 py-2 text-sm font-medium">
            Contact Us
          </button>
        </div>
        
        <div className="mb-4 md:mb-6">
          <div className="text-sm mb-2">Get Started</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get in touch with us. We're<br className="hidden md:block" /> here to assist you.
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row md:gap-6 lg:gap-8">
          <div className="w-full md:w-2/3 lg:w-3/4">
            <form onSubmit={handleSubmit} className="mb-8 md:mb-12">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-400 pb-2 focus:outline-none focus:border-black"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-400 pb-2 focus:outline-none focus:border-black"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm mb-1">Phone Number (optional)</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-400 pb-2 focus:outline-none focus:border-black"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm mb-1">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-400 pb-2 h-24 focus:outline-none focus:border-black resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="bg-black text-white rounded-full px-6 py-3 flex items-center text-sm font-medium"
              >
                Leave us a Message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="mb-6 md:mb-8">
              <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Contact Info</h2>
              <p className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                We are always happy<br /> to assist you
              </p>
            </div>
            
            <div className="mb-6">
              <div className="text-sm font-medium mb-1">Email Address</div>
              <div className="text-sm mb-3 md:mb-4 font-medium">help@info.com</div>
              <div className="text-xs mb-4">
                Assistance hours:<br />
                Monday - Friday 9 am to<br />
                8 pm EST
              </div>
            </div>
            
            <div className="mb-6">
              <div className="text-sm font-medium mb-1">Number</div>
              <div className="text-sm mb-3 md:mb-4 font-medium">(808) 098-34256</div>
              <div className="text-xs mb-4">
                Assistance hours:<br />
                Monday - Friday 9 am to<br />
                8 pm EST
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 justify-center md:justify-end mt-4 md:mt-0">
          <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}