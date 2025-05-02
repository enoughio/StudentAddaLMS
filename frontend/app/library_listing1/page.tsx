"use client"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import InputLibrary from "@/components/input";
import { ChevronDown } from "lucide-react";
import LibraryCard from "@/components/library_listing1/librarycard";

export default function AllLibraries() {
  return (
    <div className="bg-[#ECE3DA]">
      <Navbar />

      <div className="main_section relative px-4 md:px-[10%] bg-[#ECE3DA] min-h-screen w-full">
        {/* Header */}
        <div className="p-2 py-10 mt-4 text-center text-[32px] md:text-[45px] leading-[1.2] tracking-[0.36px] font-urbanist text-gray-900">
          <span className="font-semibold">Explore </span>Libraries Near You
        </div>

        <InputLibrary />

        {/* Filter and Content Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Filter */}
          <div className="p-4 w-full lg:w-[30%] space-y-6">
            <div className="flex justify-between items-center">
              <div className="text-lg md:text-[19.65px] font-urbanist font-medium">
                Filter
              </div>
              <div className="hidden">Map</div>
            </div>

            {/* Location */}
            <div>
              <h1 className="font-urbanist font-medium text-[18px] mb-2">Location</h1>
              <input
                type="text"
                placeholder="All location"
                className="w-full px-3 py-2 rounded border border-black"
              />
            </div>

            {/* Seats */}
            <div>
              <h1 className="font-urbanist font-medium text-[18px] mb-2">Available Seats</h1>
              <div className="space-y-2">
                {["5+ seats", "10+ seats", "20+ seats"].map((seat, index) => (
                  <label key={index} className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border border-black rounded-sm appearance-none checked:bg-transparent checked:border-black"
                    />
                    <span className="text-sm font-urbanist">{seat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Membership */}
            <div>
              <h1 className="font-urbanist font-medium text-[18px] mb-2">Membership</h1>
              <div className="space-y-2">
                {["Free", "Paid"].map((type, index) => (
                  <label key={index} className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border border-black rounded-sm appearance-none checked:bg-transparent checked:border-black"
                    />
                    <span className="text-sm font-urbanist">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <h1 className="font-urbanist font-medium text-[18px] mb-2">Rating</h1>
              <div className="space-y-1">
                {["3+", "4+"].map((rating, index) => (
                  <label key={index} className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border border-black rounded-sm appearance-none checked:bg-transparent checked:border-black"
                    />
                    <span className="text-sm font-urbanist">{rating}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[70%] p-4">
            {/* Top Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="font-urbanist font-medium text-[18px]">1,2314 Results</p>

              <div className="flex items-center space-x-2">
                <p className="text-sm font-urbanist">Sort by</p>
                <div className="relative flex items-center">
                  <select className="bg-transparent border px-4 py-2 rounded text-sm font-urbanist text-gray-700 cursor-pointer">
                    <option>Newest</option>
                    <option>Medium</option>
                    <option>Oldest</option>
                  </select>
                  <ChevronDown className="ml-[-24px]" />
                </div>
              </div>
            </div>

            {/* Cards */}
            <LibraryCard />

            {/* Pagination */}
            <div className="flex flex-wrap space-x-2 mt-6">
              {[1, 2, 3, 4, 5].map((page, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center font-urbanist font-medium text-[16px]
                    ${page === 1 ? 'bg-black text-white' : 'bg-transparent text-gray-500 hover:text-black hover:border-black'}
                    ${page > 3 ? 'opacity-50' : ''}`}
                >
                  {page}
                </button>
              ))}

              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-black">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
