import React from "react";

const learningPaths = [
  {
    id: 1,
    title: "Play & Kindergarten",
    age: "1.5 - 5 years",
    description:
      "A nurturing space where young minds explore and learn through play, creativity, and structured activities.",
    icon: "🧸",
  },
  {
    id: 2,
    title: "Primary School",
    age: "6 - 10 years (Grade 1 - 5)",
    description:
      "Building strong academic foundations through interactive learning, problem-solving, and communication skills.",
    icon: "📖",
  },
  {
    id: 3,
    title: "Middle School",
    age: "11 - 14 years (Grade 6 - 8)",
    description:
      "Advanced learning with a focus on academics, leadership, extracurricular activities, and career exploration.",
    icon: "🎓",
  },
];

export default function LearningPaths() {
  return (
    <div className="w-full bg-[#ffcf55] py-12 rounded-t-[100px]">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0D1321] mb-6">
        Our <span className="text-[#1D2D50]">Learning Paths</span>
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-16">
        {learningPaths.map((path) => (
          <div
            key={path.id}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <div className="text-5xl">{path.icon}</div>
            <h3 className="text-2xl font-semibold text-[#1D2D50] mt-3">
              {path.title}
            </h3>
            <p className="text-gray-700 font-medium">{path.age}</p>
            <p className="text-gray-600 mt-2">{path.description}</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-white text-[#1D2D50] font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-200 transition">
          View More →
        </button>
      </div>
    </div>
  );
}
