import Navbar from "@/components/navbar";
import Cards1 from "@/components/homepage_components/homepage_card";
// import Cards2 from '@/components/homepage_components/homepageimage_card'
// import Card3 from '@/components/homepage_components/homepage_card3'
import Card4 from "@/components/homepage_components/homepage_card4";
import Footer from "@/components/footer";
import { ArrowRight } from "lucide-react";
// import { plusJakarta } from './fonts';
import Image from "next/image";
// import ContactPage from '@/components/contact'

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#ECE3DA]">
      {/* NAVBAR SECTION  */}
      <Navbar />

      {/* THIS IS THE REST OF THE DIV FULL PAGE  */}
      <div className="w-full min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-6 md:py-14 lg:py-20">
        {/* Introduction to our website */}
        <div className="flex items-center justify-center">
          <div className="relative w-full bg-[#EFEAE5] rounded-2xl shadow-lg p-3 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 lg:gap-16 mt-8 md:mt-16 lg:mt-20">
            {/* Left Section */}
            <div className="left_intro_part max-w-full md:max-w-lg p-3 text-center md:text-left flex flex-col items-center md:items-start z-10">
              <h1 className="font-[Urbanist] font-light text-5xl leading-[59.37px] tracking-[0.38px] text-black mb-4">
                <span className="text-[#796146] font-semibold">Smart</span>{" "}
                Library
                <br />
                Management
                <br />
                <span className="text-[#796146] font-semibold">
                  All in One Place
                </span>
              </h1>

              <p className="font-[Plus_Jakarta_Sans] font-light text-lg leading-[22.73px] tracking-[0.13px] text-black mb-6 mt-3 md:mt-5 text-center md:text-left md:ml-4 align-middle">
                Manage books, seat bookings,
                <br />
                members, and digital libraries.
              </p>

              <button className="bg-black text-white px-12 md:px-8 py-3 rounded-full text-sm md:text-base font-light leading-tight flex items-center gap-2 hover:bg-gray-900 transition">
                Get Started
                <ArrowRight size={5} className="md:size-5" />
              </button>
            </div>

            {/* Floating Image */}
            <div className="relative w-full md:w-1/2 mt-8 md:mt-0 md:absolute md:top-[-6rem] md:right-0 lg:top-[-6rem] lg:right-5 z-0">
              <Image
                src="/home/image1.png"
                alt="Library Illustration"
                width={500}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Cards 1 */}
        <Cards1 />

        {/* Advertisement Section */}
        <div className="w-full mt-8 flex items-center justify-center bg-gray-100 overflow-hidden">
          <Image
            src="/home/adv1.png"
            alt="Example"
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text1 */}
        <div className="py-4 sm:py-6 md:py-8 lg:py-12 mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6 md:mb-8">
          <h1 className="font-[Plus_Jakarta_Sans] font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[28px] sm:leading-[36px] md:leading-[46px] lg:leading-[50px] tracking-[0.29px] text-black text-center mx-auto px-4">
            <span className="font-medium">Empowering minds</span>{" "}
            <span className="text-black font-extralight">
              with seamless access to knowledge,
            </span>
            <br className="hidden sm:block" />
            collaborative tools, and smarter learning spaces."
          </h1>
        </div>
      </div>

      {/* Text2 */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-start">
        {/* Left Advertisement */}
        <div
          className="hidden md:w-1/6 py-4 md:flex items-center justify-center"
          style={{ height: "100%" }}
        >
          <img
            src="/home/adv2.png"
            alt="Right Advertisement"
            className="h-170 object-contain w-full"
          />
        </div>

        {/* Middle Content */}
        <div className="py-5 px-2 w-full md:flex-grow">
          {/* Top Text Content */}
          <div className="mt-1 text-center text-black">
            <h1 className="font-[Plus_Jakarta_Sans] font-bold text-4xl leading-[63.19px] tracking-normal text-gray-900 mb-4">
              Smart Libraries. Smarter Learning
            </h1>
            {/* line */}
            <div className="w-28 h-1.5 bg-[#796146] mx-auto mb-6 rounded-xl"></div>
            <p className="font-[Plus Jakarta Sans] text-sm md:text-[0.92rem] leading-snug md:leading-[1.63rem] font-semibold text-black text-center px-4 sm:px-6">
              More than just a library platform —{" "}
              <span className="font-semibold text-black">Student Adda</span> is
              a space to grow, learn, and connect with those chasing the same
              goals.
            </p>
          </div>

          {/* Interface Image + Text */}
          <div className="w-full py-2 md:py-8 px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center md:items-start justify-between">
            {/* Right Text Section - Reordered for mobile */}
            <div className="w-full md:w-5/12 text-center md:text-left mt-6 order-2 md:order-1">
              <h2 className="font-[Plus_Jakarta_Sans] font-medium text-2xl leading-[1.2] tracking-normal text-gray-800 mt-4 md:mt-9">
                Book seats, boost <br className="hidden sm:block" />
                focus, and connect with <br className="hidden sm:block" />
                your study community <br className="hidden sm:block" />—{" "}
                <span className="text-[#824800] font-bold">
                  all in one place.
                </span>
              </h2>

              <p className="font-[400] text-[12.63px] leading-[1.3]  font-['Plus_Jakarta_Sans'] text-[#7E7E7E] mb-6 mt-6">
                Student Adda brings together everything you <br /> need — book a
                seat at nearby libraries, stay <br /> productive with built-in
                tools, and engage in <br /> meaningful Q&A through our community{" "}
                <br />
                forums. Study smarter, not harder.
              </p>

              <button className="bg-black text-white px-7 py-2 rounded-3xl text-xs sm:text-sm font-medium shadow-md hover:bg-gray-800 transition">
                Start Exploring
              </button>

              {/* Experience Stats */}
              <div className="mt-6 md:mt-8 flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 lg:gap-8 text-center md:text-left">
                <div className="experience-item">
                  <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                    13 Years
                  </h1>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600">
                    Experience
                  </p>
                </div>
                <div className="experience-item">
                  <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                    256+
                  </h1>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600">
                    Clients
                  </p>
                </div>
                <div className="experience-item">
                  <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                    99.8%
                  </h1>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600">
                    Satisfaction
                  </p>
                </div>
              </div>
            </div>

            {/* Left Image Section */}
            <div className="relative w-full md:w-7/12 lg:w-[800px] h-auto order-1 md:order-2">
              <div className="relative w-full ">
                <Image
                  src="/home/image (1).png"
                  alt="Library Illustration"
                  width={500}
                  height={300}
                  className="w-full h-auto object-contain"
                />

                {/* blur image section */}
                <div
                  className="absolute bottom-0 right-0 w-[180px] h-[180px] md:w-[350px] md:h-[350px] pointer-events-none z-10"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.3) 9%, rgba(255,255,255,0) 80%)",
                    filter: "blur(25%)",
                    boxShadow: "0 0 60px rgba(255,255,255,0.3)", //height weight
                    borderRadius: "50%",
                    mixBlendMode: "screen", // Optional for a soft lighting effect
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Advertisement */}
        <div
          className="hidden  md:w-1/6 py-4 md:flex items-center justify-center"
          style={{ height: "100%" }}
        >
          <img
            src="/home/adv2.png"
            alt="Right Advertisement"
            className="h-170 object-contain w-full"
          />
        </div>
      </div>

      {/* Why studentAdda */}
      <div className="why py-8 md:py-12 px-4 md:px-6">
        {/* Title Section */}
        <h1 className="text-[28px] sm:text-[35px] md:text-[41px] lg:text-[45px] leading-[130%] tracking-[-0.02em] font-bold text-center text-gray-800 font-['Plus_Jakarta_Sans'] mb-4 sm:mb-5 md:mb-6">
          Why StudentAdda?
        </h1>

        {/* Line */}
        <div className="w-[113px] h-[6px] bg-[#824800] mx-auto mb-8 rounded-[14.02px]"></div>

        <div className="w-full px-2 sm:px-4 md:px-9 flex flex-col md:flex-row items-stretch">
          {/* Left Advertisement */}
          <div
            className="hidden md:w-1/4 py-4 md:flex items-center justify-center"
            style={{ height: "100%" }}
          >
            <img
              src="/home/adv2.png"
              alt="Right Advertisement"
              className="h-100 object-contain w-full"
            />
          </div>

          {/* Middle Content */}
          <div className="py-4 md:py-5 px-4 sm:px-6 md:px-12 lg:px-28 w-full md:w-10/12 flex flex-col md:flex-row gap-1">
            {/* Left Image */}
            <div className="w-full md:w-1/3  flex justify-center items-center">
              <img
                src="/home/image4.png"
                alt="Image 4"
                className="h-auto w-full md:h-full md:w-auto object-contain"
              />
            </div>

            {/* Right Content Inside Middle */}
            <div className="w-full md:w-3/4 flex flex-col justify-between md:pl-6 mt-4 md:mt-0">
              {/* Top Image - Half Height */}
              <div className="flex bg-red-700">
                <img
                  src="/home/image5.png"
                  alt="Image 5"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Bottom Two Images - Side by Side */}
              <div className="flex flex-1 gap-2">
                <img
                  src="/home/image6.png"
                  alt="Image 6"
                  className="w-1/2 h-full object-contain"
                />
                <img
                  src="/home/image7.png"
                  alt="Image 7"
                  className="w-1/2 h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Advertisement */}
          <div
            className="hidden md:w-1/4 py-4 md:flex items-center justify-center"
            style={{ height: "100%" }}
          >
            <img
              src="/home/adv2.png"
              alt="Right Advertisement"
              className="h-100 object-contain w-full"
            />
          </div>
        </div>
      </div>

      {/* Adv 2 */}
      <div className="w-full flex justify-center items-center p-4 md:p-15">
        <img
          src="/home/adv5.png"
          alt="Advertisement"
          className="h-auto max-h-70 object-contain"
        />
      </div>

      {/* WHAT is student Adda */}
      <div className="what px-4 py-8 md:py-16  text-center">
        {/* Heading */}
        <h1 className="text-[32px] sm:text-[36px] md:text-[41px] lg:text-[45px] leading-[36px] sm:leading-[42px] md:leading-[48.55px] tracking-[-0.04em] font-bold text-center text-gray-800 font-['Plus_Jakarta_Sans'] mb-4 sm:mb-5 md:mb-6">
          What is Student Adda
        </h1>

        {/* Underline Line */}
        <div className="w-16 h-2 bg-[#824800] mb-6 mx-auto rounded"></div>

        {/* Description */}
        <p className="text-gray-600 text-[15px] leading-[23px] tracking-[-0.04em] font-normal sm:font-semibold max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-10 font-['Plus_Jakarta_Sans']">
          Student Adda is a smart,
          <span className="text-[#8B5716]">all-in-one platform</span> designed
          to transform how students engage with libraries and manage their study
          life. It brings together seat booking, digital library access,
          productivity tools, and a peer-driven forum — all under one clean and
          intuitive interface.
          <br />
          <br />
          <span className="font-bold">
            {" "}
            Whether you're a student looking to focus better, a library owner
            managing operations, or someone who just wants a productive study
            space — Student Adda makes it effortless.
          </span>
        </p>

        {/* Image with Half Blur */}
        <div className="relative w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto mt-8">
          <img
            src="/home/image9.png"
            alt="Student Adda Illustration"
            className="w-full h-auto sm:h-[200px] md:h-[300px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Adv 3 */}
      <div className="w-full flex justify-center items-center p-4 md:p-9">
        <img
          src="/home/adv5.png"
          alt="Advertisement"
          className="h-auto max-h-89 object-contain"
        />
      </div>

      {/* Collection / features of Student Adda */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 py-12 md:py-20 w-full">
        <div className="py-8 md:py-16 lg:py-30 px-4 md:px-20 mb-12 bg-[#EFEAE5] mt-6 md:mt-12 text-black rounded-xl">
          {/* Flex row for Text + First 2 Cards */}
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-8 md:mb-16">
            {/* Left Text Section - 30% width */}
            <div className="md:w-[35%] text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-snug mb-4 font-urbanist">
                Explore Our <br />
                <span className="text-[#824800]">Standout Features</span>
              </h2>

              <div className="w-32 h-2 bg-[#824800] mb-6  rounded"></div>
            </div>

            {/* Right 2 Cards - 70% width */}
            <div className="md:w-[70%] grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Card 1 */}
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform min-h-[180px] md:min-h-[200px]">
                <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#E3DBD8] rounded-full flex items-center justify-center mb-4  md:mb-6 mt-2">
                  <img
                    src="/home/icon1.png"
                    alt="Pomodoro Icon"
                    className="w-5 h-5 object-contain"
                  />
                </div>

                <h1 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  Pomodoro Timer
                </h1>
                <p className="text-[10px] leading-[21.79px] tracking-normal font-normal text-gray-600 mb-4  font-['Plus_Jakarta_Sans']">
                  There are many variety of passages of passages of engineer's
                  available have suffered.
                </p>
                <h2 className="text-black font-medium flex gap-2 cursor-pointer text-xs md:text-sm mt-6 md:mt-12">
                  Learn More
                  <ArrowRight size={14} className="text-black mt-0.5" />
                </h2>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform min-h-[180px] md:min-h-[200px]">
                <div className="w-10 h-10 md:w-12 md:h-12 border-3 border-[#E3DBD8] rounded-full flex items-center justify-center mb-4 md:mb-6 mt-2 ">
                  <img
                    src="/home/icon2.png"
                    alt="Planner Icon"
                    className="w-3 h-3 md:w-4 md:h-4"
                  />
                </div>
                <h1 className="text-[15.98px] leading-[21.79px] tracking-normal font-bold text-[#034833] mb-2 font-['Plus_Jakarta_Sans']">
                  Daily Planner
                </h1>
                <p className="text-[10px] leading-[21.79px] tracking-normal font-normal text-gray-600 mb-4  font-['Plus_Jakarta_Sans']">
                  Create daily tasks & goals
                  <br />
                  Drag-and-drop reordering
                </p>
                <h2 className="text-black font-medium flex gap-2 mt-6 md:mt-12 cursor-pointer text-xs md:text-sm">
                  Learn More
                  <ArrowRight size={14} className="text-black mt-0.5" />
                </h2>
              </div>
            </div>
          </div>

          {/* 3 Cards Row */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-8">
            {/* Card 3 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform w-full sm:w-[48%] md:w-[31%]">
              <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#E3DBD8] rounded-full flex items-center justify-center mb-4 md:mb-6">
                <img
                  src="/home/icon3.png"
                  alt="Time Tracker Icon"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              </div>
              <h1 className="text-[15.98px] leading-[21.79px] tracking-normal font-bold text-[#034833] mb-2 font-['Plus_Jakarta_Sans']">
                Time Tracker
              </h1>
              <p className="text-[10px] leading-[21.79px] tracking-normal font-normal text-gray-600 mb-4  font-['Plus_Jakarta_Sans']">
                Session logging by subject/task
                <br />
                Analytics for weekly/monthly study time
                <br />
                Visual stats to stay accountable
              </p>
              <h2 className="text-black font-medium flex gap-2 cursor-pointer text-xs md:text-sm">
                Learn More
                <ArrowRight size={14} className="text-black mt-0.5" />
              </h2>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform w-full sm:w-[48%] md:w-[31%]">
              <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#E3DBD8] rounded-full flex items-center justify-center mb-4 md:mb-6">
                <img
                  src="/home/icon4.png"
                  alt="Streak Icon"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              </div>
              <h1 className="text-[15.98px] leading-[21.79px] tracking-normal font-bold text-[#034833] mb-2 font-['Plus_Jakarta_Sans']">
                Streak Overview
              </h1>
              <p className="text-[10px] leading-[21.79px] tracking-normal font-normal text-gray-600 mb-4  font-['Plus_Jakarta_Sans']">
                Visual streak charts (weekly/monthly)
                <br />
                XP or rewards-based motivation
                <br />
                "Don't break the chain" gamification
              </p>
              <h2 className="text-black font-medium flex gap-2 cursor-pointer text-xs md:text-sm">
                Learn More
                <ArrowRight size={14} className="text-black mt-0.5" />
              </h2>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:-translate-y-1 transform w-full sm:w-[48%] md:w-[31%]">
              <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#E3DBD8] rounded-full flex items-center justify-center mb-4 md:mb-6">
                <img
                  src="/home/icon5.png"
                  alt="Focus Music Icon"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              </div>
              <h1 className="text-[15.98px] leading-[21.79px] tracking-normal font-bold text-[#034833] mb-2 font-['Plus_Jakarta_Sans']">
                Focus Music
              </h1>

              <p className="text-[10px] leading-[21.79px] tracking-normal font-normal text-gray-600 mb-4  font-['Plus_Jakarta_Sans']">
                Lo-fi beats, nature sounds, café ambience
                <br />
                Playlists optimized for focus
                <br />
                Timer-based playback
              </p>
              <h2 className="text-black flex font-medium gap-2 cursor-pointer  text-xs md:text-sm">
                Learn More{" "}
                <ArrowRight size={14} className="text-black mt-0.5" />
              </h2>
            </div>
          </div>
        </div>

        {/* Ready to start part */}
        <div className="w-full px-4 sm:px-8 md:px-16 text-black bg-[#796146] mt-16 md:mt-[-90px] flex flex-col md:flex-row items-center justify-between rounded-3xl max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto py-4 md:py-6">
          {/* Left Section */}
          <div className="left max-w-xs sm:max-w-md md:max-w-lg text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-[28px] leading-[34px] tracking-normal font-bold text-[#ffffff] mb-2 font-['Plus_Jakarta_Sans']">
              Are you ready to start?
            </h1>

            <p className="text-[12px] leading-[18px] tracking-normal font-normal text-gray-200 mb-4 md:mb-6 font-['Plus_Jakarta_Sans']">
              Custom Software Development Tailored Solutions for Your Business
              Custom Software Development Tailored Solutions
            </p>

            {/* Input Part */}
            <div className="input_part flex flex-col md:flex-row justify-center md:justify-start gap-4 w-full">
              <input
                type="email"
                placeholder="Enter Email"
                className="px-4 py-2 w-full sm:w-[200px] md:w-[250px] lg:w-[300px] rounded-full border border-gray-300 text-xs md:text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="px-6 py-2 md:mt-0 bg-[#FFFFFF] text-black rounded-full text-xs md:text-sm font-medium whitespace-nowrap hover:bg-gray-300 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="right mt-16 md:mt-[-56px] flex justify-center">
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
                    <h2 className="text-sm md:text-base font-semibold text-gray-800">
                      Student Adda
                    </h2>
                    <p className="text-xs text-gray-600">
                      Your all-in-one study companion
                    </p>
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
                <h2 className="text-base md:text-lg font-semibold text-gray-800">
                  ASK QUESTION
                </h2>
                <img
                  src="/home/image14.png"
                  alt="FAQ Icon"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              </div>

              {/* Main Title */}
              <h2 className="text-[37.38px] leading-[44.86px] tracking-normal font-bold text-black mb-2 font-['Plus_Jakarta_Sans']">
                FAQ and Help Center
              </h2>

              {/* Accordion */}
              <div className="rounded-xl divide-y divide-gray-200 overflow-hidden space-y-2">
                <details className="group p-4 md:p-6 rounded-lg border border-[#796146]">
                  <summary className="cursor-pointer text-xs md:text-sm font-medium text-gray-800 flex justify-between items-center">
                    <h3 className="text-[13.46px] leading-[20.93px] tracking-normal font-semibold text-black">
                      What is the Pomodoro Timer?
                    </h3>

                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#796146] flex items-center justify-center ml-2 group-open:rotate-180 transition-transform">
                      <span className="text-sm md:text-base text-white leading-none">
                        &#9650;
                      </span>{" "}
                      {/* ▲ Icon */}
                    </div>
                  </summary>
                  <p className="mt-2 text-xs text-gray-600 transition-all duration-300">
                    A tool to help you study in focused 25-minute intervals
                    followed by short breaks.
                  </p>
                </details>

                <details className="group p-4 md:p-6 rounded-lg border border-[#796146]">
                  <summary className="cursor-pointer text-xs md:text-sm font-medium text-gray-800 flex justify-between items-center">
                    <h3 className="text-[13.46px] leading-[20.93px] tracking-normal font-semibold text-black">
                      How do I borrow or return a physical book?
                    </h3>
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#796146] flex items-center justify-center ml-2 group-open:rotate-180 transition-transform">
                      <span className="text-sm md:text-base text-white leading-none">
                        &#9650;
                      </span>
                    </div>
                  </summary>
                  <p className="mt-2 text-xs text-gray-600 transition-all duration-300">
                    Visit the library desk with your ID. To return, drop the
                    book in the return box or hand it to the librarian.
                  </p>
                </details>

                <details className="group p-4 md:p-6 rounded-lg border border-[#796146]">
                  <summary className="cursor-pointer text-xs md:text-sm font-medium text-gray-800 flex justify-between items-center">
                    <h3 className="text-[13.46px] leading-[20.93px] tracking-normal font-semibold text-black">
                      How does the Pomodoro timer work?
                    </h3>
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#796146] flex items-center justify-center ml-2 group-open:rotate-180 transition-transform">
                      <span className="text-sm md:text-base text-white leading-none">
                        &#9650;
                      </span>
                    </div>
                  </summary>
                  <p className="mt-2 text-xs text-gray-600 transition-all duration-300">
                    It breaks your work into intervals (25 mins) separated by
                    short breaks (5 mins) to improve focus.
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
            The IPFS file storage and sharing with collaboration solution that
            suits any industry and business size.
          </p>

          {/* Cards */}
          <div className="w-full">
            <Card4 />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
