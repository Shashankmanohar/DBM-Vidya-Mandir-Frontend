import React from "react";
import Paint from '../assets/Paint.jpg'
import Music from '../assets/Music.jpg'
import Science from '../assets/Science.jpg'
const activities = [
  {
    id: 1,
    title: "Art & Painting",
    description: "Unleash creativity with colors, brushes, and imagination.",
    image: Paint,
    category: "Creative Activities",
  },
  {
    id: 2,
    title: "Music",
    description: "Learn musical instruments and explore melodies and rhythms.",
    image: Music,
    category: "Creative Activities",
  },
  {
    id: 3,
    title: "Dance",
    description: "Express yourself through movement and rhythm.",
    image: "/images/dance.jpg",
    category: "Creative Activities",
  },
  {
    id: 4,
    title: "Science Experiments",
    description: "Explore hands-on scientific experiments and innovations.",
    image: Science,
    category: "Academic & Skill-Based Activities",
  },
  {
    id: 5,
    title: "Debate & Public Speaking",
    description: "Build confidence and communication skills through debates.",
    image: "/images/debate.jpg",
    category: "Academic & Skill-Based Activities",
  },
  {
    id: 6,
    title: "Outdoor Sports",
    description: "Engage in sports like football, basketball, and more.",
    image: "/images/sports.jpg",
    category: "Sports & Physical Activities",
  },
];

export default function Activities() {
  return (
    <div className="w-full py-20 px-6 lg:px-16 bg-[#FBF9F0]">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#1D2D50] mb-6">
        Our <span className="text-[#F85555]">Activities</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden p-4 transition transform hover:scale-105"
          >
            <img
              src={activity.image}
              alt={activity.title}
              loading="lazy"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold text-[#1D2D50] mt-4">
              {activity.title}
            </h3>
            <p className="text-gray-600 mt-2">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
