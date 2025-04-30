'use client'

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Booking from "@/components/library_listing1/booking";

export default function Page() {
  const [selectedStep, setSelectedStep] = useState(1);

  return (
    <div className="min-h-screen w-full bg-[#ECE3DA]">
      <Navbar />

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="font-urbanist font-semibold text-[28px] leading-[36px] tracking-[0.2px] text-black mb-6 text-center
                      sm:text-[36px] sm:leading-[44px] sm:tracking-[0.28px]
                      md:text-[40px] md:leading-[48px] md:tracking-[0.32px]
                      lg:text-[45px] lg:leading-[53.18px] lg:tracking-[0.36px]">
          Book Your Seats Now
        </h2>

        {/* Step Tracker */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-3xl mx-auto p-4 rounded-lg space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Step 1 */}
          <div className="flex items-center">
            <button 
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                selectedStep >= 1 ? 'bg-[#824800] text-white' : 'bg-gray-200 text-gray-500'
              }`}
              onClick={() => setSelectedStep(1)}
            >
              1
            </button>
            <p className={`ml-2 font-urbanist font-semibold text-[20.87px] leading-[24.66px] tracking-[0.17px] ${
              selectedStep >= 1 ? 'text-[#824800]' : 'text-gray-500'
            }`}>
              Choose Seat
            </p>
          </div>

          {/* Line 1 */}
          <div className="hidden sm:block flex-1 mx-2">
            <div className={`h-1 w-full ${selectedStep >= 2 ? 'bg-[#824800]' : 'bg-white'}`}></div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center">
            <button 
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                selectedStep >= 2 ? 'bg-[#824800] text-white' : 'bg-white text-black'
              }`}
              onClick={() => selectedStep >= 1 && setSelectedStep(2)}
            >
              2
            </button>
            <p className={`ml-2 font-urbanist font-semibold text-[20.87px] leading-[24.66px] tracking-[0.17px] ${
              selectedStep >= 2 ? 'text-[#824800]' : 'text-gray-700'
            }`}>
              Booking Details
            </p>
          </div>

          {/* Line 2 */}
          <div className="hidden sm:block flex-1 mx-2">
            <div className={`h-1 w-full ${selectedStep >= 3 ? 'bg-[#824800]' : 'bg-white'}`}></div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center">
            <button 
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                selectedStep >= 3 ? 'bg-[#824800] text-white' : 'bg-white text-black'
              }`}
              onClick={() => selectedStep >= 2 && setSelectedStep(3)}
            >
              3
            </button>
            <p className={`ml-2 font-urbanist font-semibold text-[20.87px] leading-[24.66px] tracking-[0.17px] ${
              selectedStep >= 3 ? 'text-[#824800]' : 'text-gray-700'
            }`}>
              Payment
            </p>
          </div>
        </div>

        {/* Main Section */}
        <div className="flex flex-col  lg:flex-row gap-8 mt-9">

            <div className="left_part w-full lg:w-[70%] bg-white p-4 rounded-lg shadow-md">
  {/* Top Heading */}
  <div className="top_heading mb-4">
    <h1 className="text-xl lg:text-2xl font-bold text-gray-800">Central Library - Main Floor</h1>
    <p className="text-gray-600">Select your preferred seat from the map below</p>
  </div>

  {/* Map Image */}
  <div className="image_library mb-6">
    <img src="/listings2/library.png" alt="Library Map" className="w-full rounded-md" />
  </div>

  {/* Booking Details */}
  <h2 className="text-lg font-semibold mb-4">Booking Details</h2>
  <div className="booking_details grid grid-cols-1 sm:grid-cols-2 gap-4">
    
    {/* Date */}
    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">Select a Date</label>
      <input type="date" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
    </div>

    {/* Time Slot */}
    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">Select a Time Slot</label>
      <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
        <option>9:00 AM - 10:00 AM</option>
        <option>10:00 AM - 11:00 AM</option>
        <option>11:00 AM - 12:00 PM</option>
        <option>1:00 PM - 2:00 PM</option>
        <option>2:00 PM - 3:00 PM</option>
        <option>3:00 PM - 4:00 PM</option>
      </select>
    </div>

    {/* Floor Selection */}
    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">Select Floor</label>
      <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
        <option>Main Floor - Reading Area</option>
        <option>Second Floor - Group Discussion Rooms</option>
        <option>Third Floor - Research Zone</option>
      </select>
    </div>

    {/* Seat Selection */}
    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">Select Seat</label>
      <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
        <option>A1</option>
        <option>A2</option>
        <option>A3</option>
        <option>B1</option>
        <option>B2</option>
        <option>B3</option>
      </select>
    </div>

    {/* ID Proof */}
    <div className="flex flex-col sm:col-span-2">
      <label className="mb-1 font-medium text-gray-700">Government ID Proof</label>
      <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
        <option>Select ID type</option>
        <option>Aadhaar Card</option>
        <option>Voter ID</option>
        <option>Passport</option>
        <option>Driving License</option>
      </select>
    </div>

    {/* Drag & Drop File Upload */}
    <div className="browse sm:col-span-2 bg-[#F5F5F5] p-6 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300 text-center">
      <img src="/listings2/browse.png" alt="Upload Icon" className="w-12 h-12 mb-4" />
      <h2 className="text-gray-800 font-semibold mb-2">Drag & drop files or <a href="#" className="text-amber-600 underline">Browse</a></h2>
      <p className="text-sm text-gray-600">Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
    </div>
  </div>
</div>


          {/* Booking Summary (Right Section) */}
          <Booking selectedStep={selectedStep} />

        </div>
      </div>

      <Footer />
    </div>
  );
}
