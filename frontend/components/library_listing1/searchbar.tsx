'use client'
import { useState } from 'react'
import { Search, MapPin, Heart, Filter, Map, X } from "lucide-react";

export default function Search(){

    const [searchQuery, setSearchQuery] = useState("");
    return (

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

    )
}