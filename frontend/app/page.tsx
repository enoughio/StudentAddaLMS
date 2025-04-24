import Navbar from '@/components/navbar' 
import Cards1 from '@/components/homepage_components/homepage_card'
import Cards2 from '@/components/homepage_components/homepageimage_card' 
import Card3 from '@/components/homepage_components/homepage_card3' 
import Card4 from '@/components/homepage_components/homepage_card4' 
import Footer from '@/components/footer' 
import { ArrowRight } from 'lucide-react';
import { plusJakarta } from './fonts';

export default function Home(){
  return (
    <div className="w-full min-h-screen bg-[#ECE3DA]">

      {/* NAVBAR SECTION  */}
      <Navbar/>

      {/* THIS IS THE REST OF THE DIV FULL PAGE  */}
      <div className="w-full min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-6 md:py-12 lg:py-20">

        {/* Introduction to our website */}
        <div className="flex items-center justify-center">
          <div className="relative w-full bg-[#EFEAE5] rounded-2xl shadow-lg p-4 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 lg:gap-16 mt-8 md:mt-16 lg:mt-20">
            {/* Left Section */}
            <div className="left_intro_part max-w-full md:max-w-lg p-4 text-center md:text-left flex flex-col items-center md:items-start z-10">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[3.28rem] leading-tight md:leading-[3.71rem] tracking-[0.02375rem] font-[Urbanist] font-light text-black mb-4">
                <span className="text-[#796146] font-semibold">Smart</span> Library
                <br />
                Management
                <br />
                <span className="text-[#796146] font-semibold">All in One Place</span>
              </h1>

              <p className={`${plusJakarta.className} text-sm md:text-base lg:text-[1.12rem] leading-tight md:leading-[1.42rem] tracking-[0.0081rem] font-light text-black mb-6 mt-3 md:mt-5 text-center md:text-left md:ml-4`}>
                Manage books, seat bookings,
                <br />
                members, and digital libraries.
              </p>

              <button className="bg-black text-white px-6 md:px-8 py-2 rounded-full text-sm md:text-base font-light leading-tight flex items-center gap-2 hover:bg-gray-900 transition">
                Get Started
                <ArrowRight size={16} className="md:size-20" />
              </button>
            </div>

            {/* Floating Image */}
            <div className="relative w-full md:w-1/2 mt-8 md:mt-0 md:absolute md:top-[-6rem] md:right-0 lg:top-[-6rem] lg:right-5 z-0">
              <img
                src="/home/image1.png"
                alt="Library Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Cards 1 */}
        <Cards1/>

        {/* Advertisement Section */}
        <div className="w-full mt-8 flex items-center justify-center bg-gray-100 overflow-hidden">
          <img 
            src="/home/adv1.png" 
            alt="Example" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text1 */}
        <div className="py-8 md:py-12 lg:py-16 mt-6 md:mt-10 mb-6 md:mb-9">
          <h1 className="font-[Plus Jakarta Sans] text-xl sm:text-2xl md:text-3xl lg:text-[2.29rem] leading-tight md:leading-[3.1rem] tracking-[0.018rem] text-black text-center font-normal mx-auto px-4">
            "Empowering minds{" "}
            <span className="text-black font-300 font-light">
              with seamless access to knowledge,
            </span>
            <br className="hidden sm:block" />
            collaborative tools, and smarter learning spaces.""
          </h1>
        </div>
      </div>

      {/* Text2 */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-start">
        {/* Left Advertisement */}
        <div className="hidden md:block md:w-1/6 bg-amber-300 py-4 flex items-center justify-center" style={{ height: "10%" }}>
          <img src="/home/adv2.png" alt="Left Advertisement" className="h-full object-contain" />
        </div>

        {/* Middle Content */}
        <div className="py-5 px-2 w-full md:flex-grow">
          {/* Top Text Content */}
          <div className="mt-1 text-center text-black">
            <h1 className="font-[Plus Jakarta Sans] text-xl sm:text-2xl md:text-3xl lg:text-[2.22rem] leading-tight md:leading-[3.95rem] font-bold text-gray-900 mb-4">
              Smart Libraries. Smarter Learning
            </h1>
            <div className="w-15 sm:w-27 md:w-40 h-1.5 bg-[#824800] mx-auto mt-0 mb-6 rounded"></div>
            <p className="font-[Plus Jakarta Sans] text-sm md:text-[0.92rem] leading-snug md:leading-[1.63rem] font-semibold text-black text-center px-4 sm:px-6">
              More than just a library platform — <span className="font-semibold text-black">Student Adda</span> is a space to grow, learn, and connect with those chasing the same goals.
            </p>
          </div>

          {/* Interface Image + Text */}
          <div className="w-full py-6 md:py-8 px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center md:items-start justify-between">
            {/* Right Text Section - Reordered for mobile */}
            <div className="w-full md:w-5/12 text-center md:text-left mt-6 order-2 md:order-1">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mt-4 md:mt-9">
                Book seats, boost focus, and<br className="hidden sm:block" /> connect with your study <br className="hidden sm:block" />community — <span className="text-[#824800]">all in one place.</span>
              </h2>
              <p className="text-sm md:text-base text-gray-700 mb-6 font-extralight">
                Student Adda brings together everything you need — book a seat at nearby libraries, stay productive with built-in tools, and engage in meaningful Q&A through our community forums. Study smarter, not harder.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-3xl text-sm sm:text-base font-medium shadow-md hover:bg-gray-800 transition">
                Start Exploring
              </button>

              {/* Experience Stats */}
              <div className="mt-8 md:mt-10 flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 lg:gap-12 text-center md:text-left">
                <div className="experience-item">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">13 Years</h1>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">Experience</p>
                </div>
                <div className="experience-item">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">256+</h1>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">Clients</p>
                </div>
                <div className="experience-item">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">99.8%</h1>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Left Image Section */}
            <div className="relative w-full md:w-7/12 lg:w-[800px] h-auto order-1 md:order-2">
              <img
                src="/home/image3.png"
                alt="Library Illustration"
                className="w-full h-auto object-contain"
              />
              {/* Light Blur Overlay */}
              <div
                className="absolute bottom-0 right-0 w-[150px] h-[150px] md:w-[300px] md:h-[300px] pointer-events-none z-10"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  filter: 'blur(32.42px)',
                  boxShadow: '0px 15.56px 32.42px rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Advertisement */}
        <div className="hidden md:block md:w-1/6 bg-amber-600 py-4 flex items-center justify-center" style={{ height: "100%" }}>
          <img src="/home/adv2.png" alt="Right Advertisement" className="h-full object-contain" />
        </div>
      </div>

      {/* Why studentAdda */}
      <div className="why py-8 md:py-12 px-4 md:px-6">
        {/* Title Section */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-800 mb-6">
          Why StudentAdda?
        </h1>

        {/* Line */}
        <div className="w-24 h-1 bg-[#824800] mx-auto mb-8 rounded"></div>

        <div className="w-full px-2 sm:px-4 md:px-9 flex flex-col md:flex-row items-stretch">
          {/* Left Advertisement */}
          <div className="hidden md:block md:w-1/9 bg-amber-300">
            <img src="/home/adv2.png" alt="Left Advertisement" className="h-24 object-contain" />
          </div>

          {/* Middle Content */}
          <div className="py-4 md:py-5 px-4 sm:px-6 md:px-12 lg:px-28 w-full md:w-10/12 flex flex-col md:flex-row gap-4">
            {/* Left Image */}
            <div className="w-full md:w-1/3 bg-red-100 flex justify-center items-center">
              <img src="/home/image4.png" alt="Image 4" className="h-auto w-full md:h-full md:w-auto object-contain" />
            </div>

            {/* Right Content Inside Middle */}
            <div className="w-full md:w-3/4 flex flex-col justify-between md:pl-6 mt-4 md:mt-0">
              {/* Top Image - Half Height */}
              <div className="flex-1 mb-4">
                <img src="/home/image5.png" alt="Image 5" className="w-full h-full object-contain" />
              </div>

              {/* Bottom Two Images - Side by Side */}
              <div className="flex flex-1 gap-4">
                <img src="/home/image6.png" alt="Image 6" className="w-1/2 h-full object-contain" />
                <img src="/home/image7.png" alt="Image 7" className="w-1/2 h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Right Advertisement */}
          <div className="hidden md:block md:w-1/9 bg-amber-600 flex items-center justify-center">
            <img src="/home/adv2.png" alt="Right Advertisement" className="h-24 object-contain" />
          </div>
        </div>
      </div>

      {/* Adv 2 */}
      <div className="w-full flex justify-center items-center p-4 md:p-15">
        <img src="/home/adv5.png" alt="Advertisement" className="h-auto max-h-70 object-contain" />
      </div>

      {/* WHAT is student Adda */}
      <div className="what px-4 py-8 md:py-16 bg-white text-center">
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          What is Student Adda
        </h1>

        {/* Underline Line */}
        <div className="w-16 h-2 bg-[#824800] mb-6 mx-auto rounded"></div>

        {/* Description */}
        <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-10">
          Student Adda is a smart, all-in-one platform designed to transform how students engage with libraries and manage their study life. It brings together seat booking, digital library access, productivity tools, and a peer-driven forum — all under one clean and intuitive interface.
          <br /><br />
          Whether you're a student looking to focus better, a library owner managing operations, or someone who just wants a productive study space — Student Adda makes it effortless.
        </p>

        {/* Image with Half Blur */}
        <div className="relative w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto mt-8">
          <img
            src="/home/image.png"
            alt="Student Adda Illustration"
            className="w-full h-auto sm:h-[200px] md:h-[300px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Adv 3 */}
      <div className="w-full flex justify-center items-center p-4 md:p-9">
        <img src="/home/adv5.png" alt="Advertisement" className="h-auto max-h-89 object-contain" />
      </div>

      {/* Collection / features of Student Adda */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 py-12 md:py-20 w-full">
        <div className="py-8 md:py-16 lg:py-30 px-4 md:px-20 mb-12 bg-[#EFEAE5] mt-6 md:mt-12 text-black rounded-xl">
          {/* Flex row for Text + First 2 Cards */}
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-8 md:mb-16">
            {/* Left Text Section - 30% width */}
            <div className="md:w-[30%] text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-snug mb-4 font-urbanist">
                Explore Our <br />
                <span className="text-[#824800]">Standout Features</span>
              </h2>
            </div>

            {/* Right 2 Cards - 70% width */}
            <div className="md:w-[70%] grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Card 1 */}
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform min-h-[180px] md:min-h-[200px]">
                <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-[#824800] rounded-full flex items-center justify-center mb-4 md:mb-6 mt-2">
                  <img src="/homeiamge.png" alt="Pomodoro Icon" className="w-3 h-3 md:w-4 md:h-4" />
                </div>
                <h1 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Pomodoro Timer</h1>
                <p className="text-gray-600 mb-4 text-xs md:text-sm">
                  There are many variety of passages of passages of engineer's available have suffered.
                </p>
                <h2 className="text-black font-medium flex gap-2 cursor-pointer text-xs md:text-sm mt-6 md:mt-12">
                  Learn More  
                  <ArrowRight size={14} className="text-black" />
                </h2>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform min-h-[180px] md:min-h-[200px]">
                <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-[#824800] rounded-full flex items-center justify-center mb-4 md:mb-6 mt-2">
                  <img src="/homeiamge.png" alt="Planner Icon" className="w-3 h-3 md:w-4 md:h-4" />
                </div>
                <h1 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Daily Planner</h1>
                <p className="text-gray-600 mb-4 text-xs md:text-sm">
                  Create daily tasks & goals<br />
                  Drag-and-drop reordering
                </p>
                <h2 className="text-black font-medium flex gap-2 mt-6 md:mt-12 cursor-pointer text-xs md:text-sm">
                  Learn More 
                  <ArrowRight size={14} className="text-black" />
                </h2>
              </div>
            </div>
          </div>

          {/* 3 Cards Row */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-8">
            {/* Card 3 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform w-full sm:w-[48%] md:w-[31%]">
              <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#824800] rounded-full flex items-center justify-center mb-4 md:mb-6">
                <img src="/homeiamge.png" alt="Time Tracker Icon" className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Time Tracker</h1>
              <p className="text-gray-600 mb-4 text-xs md:text-sm">
                Session logging by subject/task<br />
                Analytics for weekly/monthly study time<br />
                Visual stats to stay accountable
              </p>
              <h2 className="text-black font-medium flex gap-2 cursor-pointer text-xs md:text-sm">
                Learn More
                <ArrowRight size={14} className="text-black" />
              </h2>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform w-full sm:w-[48%] md:w-[31%]">
              <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#824800] rounded-full flex items-center justify-center mb-4 md:mb-6">
                <img src="/homeiamge.png" alt="Streak Icon" className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Streak Overview</h1>
              <p className="text-gray-600 mb-4 text-xs md:text-sm">
                Visual streak charts (weekly/monthly)<br />
                XP or rewards-based motivation<br />
                "Don't break the chain" gamification
              </p>
              <h2 className="text-black font-medium flex gap-2 cursor-pointer text-xs md:text-sm">
                Learn More
                <ArrowRight size={14} className="text-black" />
              </h2>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform w-full sm:w-[48%] md:w-[31%]">
              <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#824800] rounded-full flex items-center justify-center mb-4 md:mb-6">
                <img src="/homeiamge.png" alt="Focus Music Icon" className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Focus Music</h1>
              <p className="text-gray-600 mb-4 text-xs md:text-sm">
                Lo-fi beats, nature sounds, café ambience<br />
                Playlists optimized for focus<br />
                Timer-based playback
              </p>
              <h2 className="text-black flex font-medium gap-2 cursor-pointer text-xs md:text-sm">
                Learn More <ArrowRight size={14} className="text-black" />
              </h2>
            </div>
          </div>
        </div>

        {/* Ready to start part */}
        <div className="w-full px-4 sm:px-8 md:px-16 text-black bg-[#796146] mt-8 md:mt-[-100px] flex flex-col md:flex-row items-center justify-between rounded-3xl max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto py-6 md:py-8">
          {/* Left Section */}
          <div className="left max-w-xs sm:max-w-md md:max-w-lg text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-white">Are you ready to start?</h1>
            <p className="text-sm md:text-lg text-gray-200 mb-4 md:mb-6 font-extralight">
              Custom Software Development Tailored Solutions for Your Business Custom Software Development Tailored Solutions
            </p>

            {/* Input Part */}
            <div className="input_part flex flex-col md:flex-row justify-center md:justify-start gap-4 w-full">
              <input
                type="email"
                placeholder="Enter Email"
                className="px-4 py-2 w-full sm:w-[250px] md:w-[300px] lg:w-[350px] rounded-full border border-gray-300 text-xs md:text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="px-4 sm:px-6 py-2 md:py-3 mt-2 md:mt-0 bg-[#FFFFFF] text-black rounded-full text-xs md:text-sm font-medium hover:bg-gray-300 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="right mt-6 md:mt-[-14px] flex justify-center">
            <img
              src="/home/image10.png"
              alt="Group Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* FAQ & Help Center */}
        <div className="w-full mt-12 md:mt-24 px-4 py-8 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
            {/* Left Section */}
            <div className="flex lg:flex-row flex-col gap-2 lg:w-1/2">
              {/* Main Image */}
              <div className="rounded-xl flex-1 flex flex-col justify-between">
                <img
                  src="/home/image11.png"
                  alt="Main Visual"
                  className="w-full h-[200px] sm:h-[250px] md:h-[340px] object-cover rounded-2xl shadow-md"
                />
                <div className="flex items-start gap-4 mt-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#824800]"></div>
                  <div>
                    <h2 className="text-sm md:text-base font-semibold text-gray-800">Student Adda</h2>
                    <p className="text-xs text-gray-600">Your all-in-one study companion</p>
                  </div>
                </div>
              </div>

              {/* Two stacked images */}
              <div className="flex flex-col justify-between gap-4 flex-1 mt-4 lg:mt-0">
                <img
                  src="/home/image12.png"
                  alt="Visual 1"
                  className="w-full h-[80px] sm:h-[100px] md:h-[120px] object-cover rounded-2xl shadow-md"
                />
                <img
                  src="/home/image13.png"
                  alt="Visual 2"
                  className="w-full h-[180px] sm:h-[220px] md:h-[280px] object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 flex flex-col gap-4 md:gap-6 mt-6 lg:mt-0">
              {/* ASK QUESTION Section */}
              <div className="flex items-center gap-1">
                <h2 className="text-base md:text-lg font-semibold text-gray-800">ASK QUESTION</h2>
                <img src="/home/image14.png" alt="FAQ Icon" className="w-4 h-4 md:w-5 md:h-5" />
              </div>

              {/* Main Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thick text-black mb-2">FAQ and Help Center</h2>

              {/* Accordion */}
              <div className="rounded-xl divide-y divide-gray-200 overflow-hidden space-y-2">
                <details className="group p-4 md:p-6 rounded-lg border border-[#796146]">
                  <summary className="cursor-pointer text-xs md:text-sm font-medium text-gray-800 flex justify-between items-center">
                    What is the Pomodoro Timer?
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#796146] flex items-center justify-center ml-2 group-open:rotate-180 transition-transform">
                      <span className="text-sm md:text-base text-white leading-none">&#9650;</span> {/* ▲ Icon */}
                    </div>
                  </summary>
                  <p className="mt-2 text-xs text-gray-600 transition-all duration-300">
                    A tool to help you study in focused 25-minute intervals followed by short breaks.
                  </p>
                </details>

                <details className="group p-4 md:p-6 rounded-lg border border-[#796146]">
                  <summary className="cursor-pointer text-xs md:text-sm font-medium text-gray-800 flex justify-between items-center">
                    How do I borrow or return a physical book?
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#796146] flex items-center justify-center ml-2 group-open:rotate-180 transition-transform">
                      <span className="text-sm md:text-base text-white leading-none">&#9650;</span>
                    </div>
                  </summary>
                  <p className="mt-2 text-xs text-gray-600 transition-all duration-300">
                    Visit the library desk with your ID. To return, drop the book in the return box or hand it to the librarian.
                  </p>
                </details>

                <details className="group p-4 md:p-6 rounded-lg border border-[#796146]">
                  <summary className="cursor-pointer text-xs md:text-sm font-medium text-gray-800 flex justify-between items-center">
                    How does the Pomodoro timer work?
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#796146] flex items-center justify-center ml-2 group-open:rotate-180 transition-transform">
                      <span className="text-sm md:text-base text-white leading-none">&#9650;</span>
                    </div>
                  </summary>
                  <p className="mt-2 text-xs text-gray-600 transition-all duration-300">
                    It breaks your work into intervals (25 mins) separated by short breaks (5 mins) to improve focus.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to get started */}
        <div className="w-full py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12 text-center text-black ready_to_start">
          {/* Heading */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Ready to get started?
          </h1>

          {/* Line */}
          <div className="w-12 sm:w-16 md:w-20 h-1.5 md:h-2 bg-[#824800] mx-auto mb-3 sm:mb-4 md:mb-6 rounded-full"></div>

          {/* Description */}
          <p className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-10 px-2">
            The IPFS file storage and sharing with collaboration solution that suits any industry and business size.
          </p>

          {/* Cards */}
          <div className="w-full">
            <Card4 />
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}
                    