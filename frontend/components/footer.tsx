import { Send, Globe, MessageCircle, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#796146] text-white font-jakarta px-4 sm:px-6 py-6">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-6">
        {/* Logo and Tagline */}
        <div className="col-span-2 flex flex-col items-start space-y-2">
          <img
            src="/home/logo2.png"
            alt="Footer Visual"
            className="rounded-xl w-48 h-8 object-cover"
          />
          <p className="text-sm tracking-wide font-light">
            Smart Libraries. Smarter Learning.
          </p>
        </div>

        {/* Quick Links, Resources, Company */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Links */}
          <div>
            <h2 className="text-base sm:text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-1 text-sm">
              <li>Home</li>
              <li>About Us</li>
              <li>Features</li>
              <li>Library Listings</li>
              <li>Community Forum</li>
              <li>Blog</li>
              <li>FAQ & Help Center</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-base sm:text-lg font-semibold mb-2">Resources</h2>
            <ul className="space-y-1 text-sm">
              <li>Seat Booking</li>
              <li>E-Library</li>
              <li>Book Inventory</li>
              <li>Productivity Tools</li>
              <li>Quizzes</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-base sm:text-lg font-semibold mb-2">Company</h2>
            <ul className="space-y-1 text-sm">
              <li>Our Story</li>
              <li>Mission & Vision</li>
              <li>The Team</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t my-4" style={{ borderColor: "#E3DBD8" }}></div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 justify-between items-center">
        {/* Email Input */}
        <div className="flex w-full max-w-md items-center bg-black rounded-full overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 bg-black text-white text-sm placeholder-gray-400 outline-none"
          />
          <button className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition">
            <Send size={16} className="text-black" />
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center">
          <Globe className="text-white hover:text-gray-300 cursor-pointer" />
          <MessageCircle className="text-white hover:text-gray-300 cursor-pointer" />
          <Share2 className="text-white hover:text-gray-300 cursor-pointer" />
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-6 flex flex-wrap justify-center items-center text-center text-sm tracking-wide font-light gap-4">
        <a href="">Privacy Policy</a>
        <a href="">Terms Of Use</a>
        <a href="">Sales and Refunds</a>
        <a href="">Legal</a>
      </div>
    </footer>
  );
}
