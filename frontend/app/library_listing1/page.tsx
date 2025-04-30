"use client"
import { useState } from "react";
import { Search, MapPin, Heart, Filter, Map, X } from "lucide-react";
import Navbar from "@/components/navbar";
import LibraryList from "@/components/library_listing1/library_listing_cards";
import Footer from "@/components/footer";


export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="bg-[#ECE3DA] min-h-screen w-full">
      <Navbar />

      <div className="px-4 py-8 bg-[#ECE3DA]">
        <h1 className="text-3xl font-bold mb-6">
          Explore <span className="text-amber-700">Libraries Near You</span>
        </h1>

        {/* Search Bar */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 relative">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by library name or location" 
                className="w-full py-3 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Search className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <Filter size={18} />
                <span>Filter</span>
              </button>
              
              <button className="flex items-center gap-1 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                <Map size={18} />
                <span>Map view</span>
              </button>
              
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="flex items-center gap-1 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  <X size={18} />
                  <span>Clear</span>
                </button>
              )}
              
              <button className="px-4 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Sidebar */}
          <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-4">Filter</h2>
            
            <div className="mb-4">
              <h3 className="font-medium mb-2">Location</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="All locations" 
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <MapPin className="absolute right-3 top-2 text-gray-400" size={18} />
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium mb-2">Available Seats</h3>
              <div className="space-y-2">
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>5+ seats</option>
                </select>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>10+ seats</option>
                </select>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>20+ seats</option>
                </select>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium mb-2">Membership</h3>
              <div className="space-y-2">
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Free</option>
                </select>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Paid</option>
                </select>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium mb-2">Rating</h3>
              <div className="space-y-2">
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>3+</option>
                </select>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>4+</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">1,234 Results</h2>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Sort by:</span>
                <h2 className="font-semibold">Newest</h2>
              </div>
            </div>
            
            {/* Library Card */}
            <LibraryList/>
            
            {/* Additional libraries would be listed here */}
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}