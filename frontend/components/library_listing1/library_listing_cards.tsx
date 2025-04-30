'use client'
import React from 'react';
import { Heart } from 'lucide-react';

const LibraryList = () => {
  const dummyLibraries = [
    {
      name: 'Central Library',
      location: 'Downtown, New York',
      reviews: 128,
      timing: '8:00 am to 9:00 pm',
      seats: 25,
      type: 'Paid',
      status: 'Open Now',
      image: '/api/placeholder/400/320',
      amenities: ['WiFi', 'AC', 'Comfort', 'Code'],
    },
    {
      name: 'Book Haven',
      location: 'Brooklyn, NY',
      reviews: 98,
      timing: '9:00 am to 8:00 pm',
      seats: 10,
      type: 'Free',
      status: 'Open Now',
      image: '/api/placeholder/400/320?2',
      amenities: ['WiFi', 'Tea', 'Quiet Zone'],
    },
    {
      name: 'Study Lounge',
      location: 'Queens, NY',
      reviews: 56,
      timing: '7:30 am to 10:00 pm',
      seats: 40,
      type: 'Paid',
      status: 'Open Now',
      image: '/api/placeholder/400/320?3',
      amenities: ['AC', 'WiFi', 'Lockers'],
    }
  ];

  return (
    <div className="p-4">
      {dummyLibraries.map((data, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
          <div className="flex flex-col md:flex-row">
            {/* Library Image Section */}
            <div className="relative w-full md:w-1/3 h-48 bg-gray-200">
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                <Heart size={20} className="text-gray-500" />
              </button>
              <img 
                src={data.image} 
                alt="Library" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <span className="bg-white px-3 py-1 rounded-md text-sm font-medium">
                  {data.status}
                </span>
              </div>
            </div>

            {/* Library Details Section */}
            <div className="w-full md:w-2/3 p-4">
              <div className="flex justify-between mb-4">
                <div>
                  <h1 className="text-xl font-bold">{data.name}</h1>
                  <p className="text-gray-600">{data.location}</p>
                  <p className="text-gray-500 text-sm">({data.reviews} reviews)</p>
                </div>
                
                <div className="text-right">
                  <p className="text-gray-600">{data.timing}</p>
                  <h1 className="text-green-600 font-medium mt-1">
                    {data.seats} Seats Available
                  </h1>
                  <button className="mt-1 px-2 py-1 bg-amber-100 text-amber-800 rounded text-sm">
                    {data.type}
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-between items-center mt-4 pt-4 border-t border-gray-200">
                <div className="flex gap-2 flex-wrap">
                  {data.amenities.map((item, idx) => (
                    <p key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {item}
                    </p>
                  ))}
                </div>
                
                <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LibraryList;
