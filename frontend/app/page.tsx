import Navbar from "./components/navbar"
import Cards1 from "./components/homepage_components/homepage_card"
import Cards2 from "./components/homepage_components/homepageimage_card"
import Card3 from "./components/homepage_components/homepage_card3"
import Card4 from "./components/homepage_components/homepage_card4"
import Footer from "./components/footer"

import { ArrowRight } from 'lucide-react';


export default function Home(){
  return (
    <div className="w-full min-h-screen bg-[#ECE3DA]">

      <Navbar/>
      <div className="advertisement w-full h-[240px] "></div>

      <div className="px-4 md:px-10 lg:px-20 bg-[#ECE3DA]">

  {/* this is our introduction to our website */}
  <div className="px-4 md:px-10 lg:px-20 bg-[#ECE3DA]">

{/* this is our introduction to our website */}
<div className="relative w-full bg-[#EFEAE5] rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 mt-20">

  {/* Floating Image */}
  <div className="absolute top-[-50px] right-[-50px] md:top-[-40px] md:right-10 z-10 w-[300px] h-[250px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[500px] object-contain sm:w-[450px] sm:h-[350px] sm:top-[-80px] sm:right-[30px]">
    <img
      src="/image.png" //
      alt="Library Illustration"
      className="w-full h-full object-contain"
    />
  </div>

  {/* Left Section */}
  <div className="left_intro_part max-w-xl text-left flex flex-col items-center md:items-start">
    <h1 className="text-3xl md:text-5xl font-light leading-tight mb-4 text-black text-center md:text-left">
      <span className="text-[#796146]">Smart</span> Library<br />
      Management<br />
      <span className="text-[#796146]">All in One Place</span>
    </h1>

    <p className="text-lg font-light text-gray-600 mb-6 text-center md:text-left">
      Manage books, seat bookings,<br />
      members, and digital libraries.
    </p>

    <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-light leading-tight flex items-center gap-2 hover:bg-gray-900 transition">
      Get Started
      <ArrowRight size={20} />
    </button>
  </div>
</div>

</div>

      {/* Cards 1   */}
      <Cards1/>

      {/* text1 */}
      <div className="py-10 px-0 mt-9 mb-9">
  <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-extralight text-center text-gray-800 leading-relaxed">
    "Empowering minds{" "}
    <span className="text-gray-500 font-extralight">
      with seamless access to knowledge,
    </span>
    <br />
    collaborative tools, and smarter learning spaces."
  </h1>
</div>



      {/* text2 */}

      <div className="mt-52 text-center text-black">
  <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold mb-4">
    Smart Libraries. Smarter Learning
  </h1>

  <div className="w-24 sm:w-32 md:w-40 h-2 bg-[#824800] mx-auto mb-6 rounded"></div>

  <p className="text-base sm:text-lg md:text-xl lg:text-xl font-light inline-block px-4 sm:px-6">
    More than just a library platform — <span className="font-medium">Student Adda</span> is a space to grow, learn, and connect with those chasing the same goals.
  </p>
</div>


   {/* Interface Image Section */}
<div className="w-full min-h-[400px] py-8 mt-20 px-12 flex flex-col md:flex-row items-center justify-between">
  {/* Left Section (Image) */}
  <div className="left_side w-full md:w-10/12 flex justify-center mb-6 md:mb-0 font-light">
    <img
      src="/image.png"
      alt="Library Illustration"
      className="w-full md:w-[800px] h-auto object-contain"
    />
  </div>

  {/* Right Section (Text and Button) */}
  <div className="right_side w-full md:w-5/12 text-center md:text-left mt-18">
    <h2 className="text-xl sm:text-xl md:text-xl font-bold text-gray-800 mb-4">
      Book seats, boost focus, and<br />  connect with your study <br />community —<span className="text-[#824800]">all in one place.</span> 
    </h2>
    <p className="text-sm sm:text-base md:text-base text-gray-700 mb-6 font-extralight">
  Student Adda brings together everything you need — book a seat at nearby libraries, stay productive with built-in tools, and engage in meaningful Q&A through our community forums. Study smarter, not harder.
</p>


    <button className="bg-black text-white px-6 py-3 rounded-3xl text-sm sm:text-base font-medium shadow-md hover:bg-gray-800 transition">
      Start Exploring
    </button>

    {/* Experience Section */}
    <div className="experiencing mt-10 flex flex-wrap justify-center md:justify-start gap-6 md:gap-12 text-center md:text-left">
      <div className="experience-item">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">13 Years</h1>
        <p className="text-sm sm:text-base text-gray-600">Experience</p>
      </div>

      <div className="experience-item">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">256+</h1>
        <p className="text-sm sm:text-base text-gray-600">Clients</p>
      </div>

      <div className="experience-item">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">99.8%</h1>
        <p className="text-sm sm:text-base text-gray-600">Satisfaction</p>
      </div>
    </div>
  </div>
</div>

      <Cards1/>

      {/* why studentAdda */}
      <div className="why py-12 px-6 ">
        {/* Title Section */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-gray-800 mb-6">
          Why StudentAdda?
        </h1>

        {/* Line */}
        <div className="w-24 h-1 bg-[#824800] mx-auto mb-8 rounded"></div>

        {/* Cards Section */}
       
          <Cards2 />
    
      </div>


{/* whta is student Adda */}
      <div className="what px-4 py-16 bg-white text-center">
  {/* Heading */}
  <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
    What is Student Adda
  </h1>

  {/* Underline Line */}
  <div className="w-16 h-2 bg-[#824800] mb-6 mx-auto rounded"></div>

  {/* Description */}
  <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
    Student Adda is a smart, all-in-one platform designed to transform how students engage with libraries and manage their study life. It brings together seat booking, digital library access, productivity tools, and a peer-driven forum — all under one clean and intuitive interface.
    <br /><br />
    Whether you're a student looking to focus better, a library owner managing operations, or someone who just wants a productive study space — Student Adda makes it effortless.
  </p>

  {/* Image with Half Blur */}
  <div className="relative w-full max-w-4xl mx-auto mt-8">
    <img
      src="/home/library.jpg"
      alt="Student Adda Illustration"
      className="w-full h-[300px] object-cover rounded-xl"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/70 via-white/30 to-transparent backdrop-blur-sm rounded-xl" />
  </div>
</div>




{/* Collection / features of Student Adda */}
{/* Collection / features of Student Adda */}
<div className="py-24 px-4 md:px-20 bg-[#EFEAE5] mt-12 text-black">

  {/* Flex row for Text + First 2 Cards */}
  <div className="flex flex-col md:flex-row justify-between gap-6 mb-16">

{/* Left Text Section - 30% width */}
<div className="md:w-[30%] text-center md:text-left">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4 font-urbanist">
    Explore Our <br />
    <span className="text-[#824800]">Standout Features</span>
  </h2>
</div>

{/* Right 2 Cards - 70% width */}
<div className="md:w-[70%] grid grid-cols-1 gap-6 sm:grid-cols-2">

  {/* Card 1 */}
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform min-h-[200px]">
    <div className="w-10 h-10 border-2 border-[#824800] rounded-full flex items-center justify-center mb-6 mt-2">
      <img src="/homeiamge.png" alt="Pomodoro Icon" className="w-4 h-4" />
    </div>
    <h1 className="text-xl font-semibold text-gray-800 mb-2">Pomodoro Timer</h1>
    <p className="text-gray-600 mb-4 text-sm">
      There are many variety of passages of passages of engineer's available have suffered.
    </p>
    <h2 className="text-black font-medium flex gap-2 cursor-pointer text-sm mt-12">
      Learn More  
      <ArrowRight size={16} className="text-black" />
    </h2>
  </div>

  {/* Card 2 */}
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform min-h-[200px]">
    <div className="w-10 h-10 border-2 border-[#824800] rounded-full flex items-center justify-center mb-6 mt-2">
      <img src="/homeiamge.png" alt="Planner Icon" className="w-4 h-4" />
    </div>
    <h1 className="text-xl font-semibold text-gray-800 mb-2">Daily Planner</h1>
    <p className="text-gray-600 mb-4 text-sm">
      Create daily tasks & goals<br />
      Drag-and-drop reordering
    </p>
    <h2 className="text-black font-medium flex gap-2 mt-12 cursor-pointer text-sm">
      Learn More 
      <ArrowRight size={16} className="text-black" />
    </h2>
  </div>

</div>




</div>


  {/* 3 Cards Row */}
  <div className="flex flex-wrap gap-8">
    
    {/* Card 3 */}
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform w-full sm:w-[48%] md:w-[31%]">
      <div className="w-12 h-12 border-2 border-[#824800] rounded-full flex items-center justify-center mb-6">
        <img src="/homeiamge.png" alt="Time Tracker Icon" className="w-5 h-5" />
      </div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Time Tracker</h1>
      <p className="text-gray-600 mb-4 text-sm">
        Session logging by subject/task<br />
        Analytics for weekly/monthly study time<br />
        Visual stats to stay accountable
      </p>
      <h2 className="text-black font-medium flex gap-2 cursor-pointer text-sm">
        Learn More
        <ArrowRight size={16} className="text-black" />
      </h2>
    </div>

    {/* Card 4 */}
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform w-full sm:w-[48%] md:w-[31%]">
      <div className="w-12 h-12 border-2 border-[#824800] rounded-full flex items-center justify-center mb-6">
        <img src="/homeiamge.png" alt="Streak Icon" className="w-5 h-5" />
      </div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Streak Overview</h1>
      <p className="text-gray-600 mb-4 text-sm">
        Visual streak charts (weekly/monthly)<br />
        XP or rewards-based motivation<br />
        “Don’t break the chain” gamification
      </p>
      <h2 className="text-black font-medium flex gap-2 cursor-pointer text-sm">
        Learn More
        <ArrowRight size={16} className="text-black" />
      </h2>
    </div>

    {/* Card 5 */}
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform w-full sm:w-[48%] md:w-[31%]">
      <div className="w-12 h-12 border-2 border-[#824800] rounded-full flex items-center justify-center mb-6">
        <img src="/homeiamge.png" alt="Focus Music Icon" className="w-5 h-5" />
      </div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Focus Music</h1>
      <p className="text-gray-600 mb-4 text-sm">
        Lo-fi beats, nature sounds, café ambience<br />
        Playlists optimized for focus<br />
        Timer-based playback
      </p>
      <h2 className="text-black flex font-medium gap-2 cursor-pointer text-sm">
        Learn More <ArrowRight size={16} className="text-black" />
        
      </h2>
    </div>
  </div>
</div>


      {/* ready to start part */}


      <div className="w-full p-5 text-black bg-[#796146] mt-[-50px] flex flex-col md:flex-row items-center justify-between rounded-3xl max-w-6xl mx-auto">
  {/* Left Section */}
  <div className="left max-w-lg text-center md:text-left flex flex-col items-center md:items-start">
    <h1 className="text-3xl font-semibold mb-4 text-white">Are you ready to start?</h1>
    <p className="text-lg text-gray-200 mb-6 font-extralight">
      Custom Software Development Tailored Solutions for Your Business Custom Software Development Tailored Solutions
    </p>

    {/* Input Part */}
    <div className="input_part flex flex-col md:flex-row justify-center md:justify-start gap-4">
      <input
        type="email"
        placeholder="Enter Email"
        className="px-4 py-2 w-full sm:w-[300px] md:w-[350px] rounded-full border border-gray-300 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <button className="px-6 py-3 mt-4 md:mt-0 bg-[#FFFFFF] text-black rounded-full text-sm font-medium hover:bg-gray-300 transition duration-300">
        Contact Us
      </button>
    </div>
  </div>

  {/* Right Section - Image */}
  <div className="right mt-8 md:mt-0 flex justify-center">
    <img
      src="/image.png"
      alt="Group Illustration"
      className="max-w-xs md:max-w-lg lg:max-w-xl"
    />
  </div>
</div>

{/* FAQ & Help Center */}

<div className="w-full mt-24 px-4 py-8 sm:px-6">
  <div className="flex flex-col lg:flex-row gap-10">
    {/* Left Section */}
    <div className="flex lg:flex-row flex-col gap-2 lg:w-1/2">
      {/* Main Image */}
      <div className="rounded-xl flex-1 flex flex-col justify-between">
        <img
          src="/home/Rectange.png"
          alt="Main Visual"
          className="w-full h-[250px] object-cover rounded-2xl shadow-md"
        />
        <div className="flex items-start gap-4 mt-4">
          <div className="w-10 h-10 rounded-full bg-[#824800]"></div>
          <div>
            <h2 className="text-base font-semibold text-gray-800">Student Adda</h2>
            <p className="text-xs text-gray-600">Your all-in-one study companion</p>
          </div>
        </div>
      </div>

      {/* Two stacked images */}
      <div className="flex flex-col justify-between gap-4 flex-1">
        <img
          src="/home/Rectangle 2763.png"
          alt="Visual 1"
          className="w-full h-[120px] object-cover rounded-2xl shadow-md"
        />
        <img
          src="/home/Rectiamge.png"
          alt="Visual 2"
          className="w-full h-[180px] object-cover rounded-2xl shadow-md"
        />
      </div>
    </div>

    {/* Right Section */}
    <div className="lg:w-1/2 flex flex-col gap-6">
  {/* ASK QUESTION Section */}
  <div className="flex items-center gap-1">
    <h2 className="text-lg font-semibold text-gray-800">ASK QUESTION</h2>
    <img src="/image.png" alt="FAQ Icon" className="w-5 h-5" />
  </div>

  {/* Main Title */}
  <h2 className="text-5xl font-thick text-black mb-2">FAQ and Help Center</h2>

  {/* Accordion */}
  <div className="rounded-xl divide-y divide-gray-200 overflow-hidden space-y-2">
  <details className="group p-6 rounded-lg border border-[#796146]">
    <summary className="cursor-pointer text-sm font-medium text-gray-800 flex justify-between items-center">
      What is the Pomodoro Timer?
      <div className="w-6 h-6 rounded-full bg-[#796146] flex items-center justify-center ml-2 group-open:rotate-180 transition-transform">
        <span className="text-base text-white leading-none">&#9650;</span> {/* ▲ Icon */}
      </div>
    </summary>
    <p className="mt-2 text-xs text-gray-600 transition-all duration-300">
      A tool to help you study in focused 25-minute intervals followed by short breaks.
    </p>
  </details>

  <details className="group p-6 rounded-lg border border-[#796146]">
    <summary className="cursor-pointer text-sm font-medium text-gray-800 flex justify-between items-center">
      How do I borrow or return a physical book?
      <div className="w-6 h-6 rounded-full bg-[#796146] flex items-center justify-center ml-2 group-open:rotate-180 transition-transform">
        <span className="text-base text-white leading-none">&#9650;</span>
      </div>
    </summary>
    <p className="mt-2 text-xs text-gray-600 transition-all duration-300">
      Visit the library desk with your ID. To return, drop the book in the return box or hand it to the librarian.
    </p>
  </details>

  <details className="group p-6 rounded-lg border border-[#796146]">
    <summary className="cursor-pointer text-sm font-medium text-gray-800 flex justify-between items-center">
      How does the Pomodoro timer work?
      <div className="w-6 h-6 rounded-full bg-[#796146] flex items-center justify-center ml-2 group-open:rotate-180 transition-transform">
        <span className="text-base text-white leading-none">&#9650;</span>
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


      {/* ready to get started */}
{/* done */}
      <div className="w-full  py-12 px-4 text-center text-black ready_to_start">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Ready to get started?</h1>

      {/* Line */}
      <div className="w-20 h-2 bg-[#824800] mx-auto mb-6 rounded-full"></div>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base mb-10 px-2">
        The IPFS file storage and sharing with collaboration solution that suits any industry and business size.
      </p>

      {/* Cards */}
      {/* {completed with responsive} */}
      <Card4 />
    </div>

      



      </div>

      {/* {completed with responsive} */}
      
      <Footer/>

      </div>

  )
}