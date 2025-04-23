export default function Card4() {
  const cards = [
    {
      title: "Are you individual?",
      description:
        "Keep everything that’s important to you and your family shareable and safe in one place.",
      action: "Create an account",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#824800]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A10.97 10.97 0 0112 15c2.5 0 4.847.82 6.879 2.204M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Are you business?",
      description:
        "Work efficiently with teammates and clients, stay in sync on projects and keep company data safe.",
      action: "Join Us",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#824800]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h18M9 21h6m-3-11V3m0 0L5.5 8m6.5-5l6.5 5"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 md:px-20 justify-items-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[#FBF5E9] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-left max-w-sm w-full"
        >
          {/* Icon container */}
          <div className="w-12 h-12 bg-[#f3e9e2] rounded-full mb-4 flex items-center justify-center">
            {card.icon}
          </div>

          {/* Title */}
          <h1 className="text-xl font-extralight text-gray-800 mb-2">
            {card.title}
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-4 font-extralight text-xs">{card.description}</p>

          {/* Action button */}
          <h2 className="text-[#824800] font-medium hover:underline cursor-pointer flex items-center gap-2">
            {card.action} <span className="text-lg">→</span>
          </h2>
        </div>
      ))}
    </div>
  );
}
