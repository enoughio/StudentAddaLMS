import Image from "next/image";
import { plusJakarta } from '@/app/fonts';

interface CardItem {
  title: string;
  description: string[];
  icon: string;
}

export default function Cards1() {
  const cardData: CardItem[] = [
    {
      title: "Smart Library Access",
      description: [
        "Search and book seats in nearby libraries",
        "Access both physical and digital books",
        "Flexible membership plans with online payments"
      ],
      icon: "/home/card11.png"
    },
    {
      title: "Built-in Study Tools",
      description: [
        "Pomodoro timer, habit tracker, streak logs, planner",
        "Daily progress tracking and productivity boosters",
        "Practice quizzes by topic"
      ],
      icon: "/home/card12.png"
    },
    {
      title: "Engaging Community Features",
      description: [
        "Public forum for Q&A, discussions & study help",
        "Create or join study groups",
        "Share knowledge, get support, stay motivated"
      ],
      icon: "/home/card13.png"
    }
  ];
  
  return (
    <div className="w-full py-12 md:py-16 mt-4 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-[#ECE3DA] w-full max-w-[21.5rem] h-auto min-h-[15rem] p-5 rounded-xl transition duration-300 border-[0.6px] border-[#BF847EBD] hover:shadow-lg"
          >
            {/* Icon in black circle */}
            <div className="bg-black w-12 h-12 rounded-full mb-4 flex items-center justify-center">
              <Image
                src={card.icon}
                alt={`${card.title} Icon`}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h2 className={`${plusJakarta.className} font-bold text-sm leading-[18.12px] tracking-normal text-[#824800] mb-2`}>
              {card.title}
            </h2>

            {/* Description */}
            <div className="text-gray-700 space-y-1">
              {card.description.map((text, idx) => (
                <p
                  className={`${plusJakarta.className} font-semibold text-xs leading-[18.12px] tracking-normal`}
                  key={idx}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
