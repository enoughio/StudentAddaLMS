import { Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#796146] text-white font-jakarta px-6 py-10">
      {/* Top Divider Line */}
      <div className="w-full border-t mb-6" style={{ borderColor: "#E3DBD8" }}></div>


      {/* Top Section */}
      <div className="max-w-5xl ml-auto mr-20"> {/* Adjusted right margin */}
        <div className="footer_end grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2 mb-6 items-start">
          {/* Services */}
          <div className="head1 text-left w-full">
            <div className="max-w-xs mx-auto">
              <h1 className="text-xl font-semibold mb-4">Services</h1>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer transition hover:text-gray-300">Mistakes To Avoid</li>
                <li className="cursor-pointer transition hover:text-gray-300">Your Startup</li>
                <li className="cursor-pointer transition hover:text-gray-300">Know About Fonts</li>
              </ul>
            </div>
          </div>

          {/* Useful Links */}
          <div className="head2 text-left w-full">
            <div className="max-w-xs mx-auto">
              <h1 className="text-xl font-semibold mb-4">Useful Links</h1>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer transition hover:text-gray-300">Latest News</li>
                <li className="cursor-pointer transition hover:text-gray-300">Careers</li>
                <li className="cursor-pointer transition hover:text-gray-300">General Inquiries</li>
                <li className="cursor-pointer transition hover:text-gray-300">Case Studies</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="head3 text-left w-full">
            <div className="max-w-xs mx-auto">
              <h1 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h1>
              <p className="text-sm mb-4 font-extralight">
                Corporate business typing refers to <br />
                large-scale mansola it.
              </p>
              <div className="flex items-center bg-black rounded-full overflow-hidden w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-black text-white text-sm placeholder-gray-400 outline-none"
                />
                <button className="bg-gray-300 p-3 rounded-full flex items-center justify-center hover:bg-gray-400 transition">
                  <Send size={18} className="text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>


        {/* Line After Columns */}
        <div className="w-full border-t mb-6" style={{ borderColor: "#E3DBD8" }}></div>
<div className="max-w-5xl ml-auto mr-20">

        {/* Bottom Section */}
        <div className="footer_down flex flex-col md:flex-row items-center justify-between pt-4 gap-4">
          <p className="text-sm text-center md:text-left">@Yoursitename 2024 | All Rights Reserved</p>
          <div className="flex flex-wrap gap-4 text-sm justify-center md:justify-end">
            <a href="#" className="transition hover:text-gray-300">Terms & Conditions</a>
            <a href="#" className="transition hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="transition hover:text-gray-300">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
