import Image from "next/image";

export default function Cards1() {
  const cardData = [
    {
      title: "Smart Library Access",
      description: [
        "Search and book seats in nearby libraries . Access both physical and digital books ",
        "Flexible membership plans with online payments"
      ],
      icon: "/home/card11.png"
    },
    {
      title: "Built-in Study Tools",
      description: [
        "Pomodoro timer, habit tracker, streak logs, planner. Daily progress tracking and productivity boosters.  Practice quizzes by topic",
     
      ],
      icon: "/home/card12.png"
    },
    {
      title: "Engaging Community Features",
      description: [
        "Public forum for Q&A, discussions & study help .Create or join study groups",
        "Share knowledge, get support, stay motivated"
      ],
      icon: "/home/card13.png"
    }
  ];

  return (
    <div className="w-full py-6 sm:py-12 lg:py-16 mt-4 px-1 sm:px-6 lg:px-12">
    {/* Container for all cards */}
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
      {/* First 2 cards - side by side on mobile, sm, and md */}
      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 lg:gap-7 mb-3 sm:mb-6">
        {cardData.slice(0, 2).map((card, index) => (
          <div
            key={index}
            className="bg-[#ECE3DA] w-full px-2 py-2 sm:p-5 rounded-xl transition duration-300 border-[0.6px] border-[#BF847EBD] flex flex-col"
          >
            {/* Icon in black circle */}
            <div className="bg-black w-9 h-9 p-1 sm:w-12 md:w-12 md:h-12 rounded-full mb-4 flex items-center justify-center">
              <Image
                src={card.icon}
                alt="Icon"
                width={12}
                height={12}
                className="object-contain w-[19px] sm:w-[24px] md:w-[27px]"
              />
            </div>
            
            {/* Title */}
            <h2 className="font-[Plus_Jakarta_Sans] font-bold text-[11px] sm:text-sm md:text-xl leading-[18.12px] tracking-normal text-[#824800] mb-1 sm:mb-2">
              {card.title}
            </h2>
            
            {/* Description */}
            <div className="text-gray-700 font-bold">
              {card.description.map((text, idx) => (
                <p
                  className="font-[Plus_Jakarta_Sans] font-bold text-[8px] sm:text-xs md:text-sm leading-[12px] sm:leading-[18.12px] break-words"
                  key={idx}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Third card - full width for mobile, sm, and md, but matching card 1 & 2 style on lg */}
      <div className="w-full lg:ml-7 lg:max-w-xs">
        {cardData.slice(2, 3).map((card, index) => (
          <div
            key={index}
            className="bg-[#ECE3DA] w-full px-2 py-2 sm:p-5 rounded-xl transition duration-300 border-[0.6px] border-[#BF847EBD] flex flex-row sm:flex-col md:flex-row lg:flex-col"
          >
            {/* Icon in black circle */}
            <div className="bg-black w-9 h-9 p-1 sm:w-12 md:w-12 md:h-12 rounded-full mb-0 sm:mb-4 md:mb-0 lg:mb-4 flex-shrink-0 flex items-center justify-center">
              <Image
                src={card.icon}
                alt="Icon"
                width={12}
                height={12}
                className="object-contain w-[19px] sm:w-[24px] md:w-[27px]"
              />
            </div>
            
            <div className="flex flex-col ml-4 sm:ml-0 md:ml-6 lg:ml-0">
              {/* Title */}
              <h2 className="font-[Plus_Jakarta_Sans] font-bold text-[11px] sm:text-sm md:text-xl leading-[18.12px] tracking-normal text-[#824800] mb-1 sm:mb-2">
                {card.title}
              </h2>
              
              {/* Description */}
              <div className="text-gray-700 font-bold">
                {card.description.map((text, idx) => (
                  <p
                    className="font-[Plus_Jakarta_Sans] font-bold text-[8px] sm:text-xs md:text-sm leading-[12px] sm:leading-[18.12px] break-words"
                    key={idx}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}