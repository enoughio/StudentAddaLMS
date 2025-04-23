export default function Cards1() {
  const cardData = [
    {
      title: "Smart Library Access",
      description: [
        "Search and book seats in nearby libraries",
        "Access both physical and digital books",
        "Flexible membership plans with online payments"
      ],
      icon: "/image.png" // Replace with your actual icon path
    },
    {
      title: "Built-in Study Tools",
      description: [
        "Pomodoro timer, habit tracker, streak logs, planner",
        "Daily progress tracking and productivity boosters",
        "Practice quizzes by topic"
      ],
      icon: "/image.png" // Replace with your actual icon path
    },
    {
      title: "Engaging Community Features",
      description: [
        "Public forum for Q&A, discussions & study help",
        "Create or join study groups",
        "Share knowledge, get support, stay motivated"
      ],
      icon: "/image.png" // Replace with your actual icon path
    }
  ];

  return (
    <div className="w-full py-15 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-[#ECE3DA] p-6 rounded-xl shadow hover:shadow-lg transition border-amber-950"
          >
            {/* Black circle with image inside */}
            <div className="bg-black w-12 h-12 rounded-full mb-4 flex items-center justify-center">
              <img
                src={card.icon}
                alt="Icon"
                className="w-6 h-6 object-contain"
              />
            </div>

            {/* Title */}
            <h2 className="text-xl text-[#824800] font-semibold mb-2">{card.title}</h2>

            {/* Descriptions */}
            <div className="text-gray-700 space-y-2">
              {card.description.map((text, idx) => (
                <p className="text-sm font-light" key={idx}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
