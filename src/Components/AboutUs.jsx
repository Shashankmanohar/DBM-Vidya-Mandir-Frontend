<<<<<<< HEAD
import React from 'react'
=======
import React from 'react';
import SubodhKumar from '../assets/SubodhKumar.jpg';
import SumanKumari from '../assets/SumanKumari.jpg';
import SudhirKumar from '../assets/SudhirKumar.jpg';
import AnishKumar from '../assets/AnishKumar.jpg';
import AmrishRaj from '../assets/AmrishRaj.jpg';
import RinaKumari from '../assets/RinaKumari.jpg';
import TannuKumari from '../assets/TannuKumari.jpg';
import SoniKumari from '../assets/SoniKumari.jpg';
import Gulafshava from '../assets/Gulafshava.jpg';
import AasmaaPerween from '../assets/AasmaPerween.jpg';
import SushmaDevi from '../assets/SushmaDevi.jpg';
>>>>>>> 3a55cf0 (Adding teacher Photo)

const mission = [
  {
    id: 1,
    title1: "Mission",
    title2: "Our",
    detail: "Our mission is to nurture young minds in a joyful, and stimulating environment where every child is empowered to explore, and grow."
  },
  {
    id: 2,
    title1: "Vision",
    title2: "Our",
    detail: "We envision a future where children develop a passion for discovery, empathy for others, and the confidence to pursue their dreams."
  }
];

const teachers = [
<<<<<<< HEAD
    {
        id: 1,
        name: "Brandon Miller",
        role: "Curriculum Coordinator",
        description: "Brandon ensures that all learning programs are designed to foster growth.",
        image:
    },
    {
        id: 2,
        name: "Emily Johnson",
        role: "Physical Education Teacher",
        description: "Dedicated to supporting students' emotion, providing guidance and care.",
        image: 
    },
    {
        id: 3,
        name: "Michael Davis",
        role: "School Counselor",
        description: "Engaging activities to promote physical health and teamwork development.",
        image: 
    }
=======
  { id: 1, name: "Anish Kumar", role: "Mathematics Teacher", image: AnishKumar },
  { id: 2, name: "Amrish Raj", role: "Social Science", image: AmrishRaj },
  { id: 3, name: "Rina Kumari", role: "Hindi Teacher", image: RinaKumari },
  { id: 4, name: "Tannu Kumari", role: "Science Teacher", image: TannuKumari },
  { id: 5, name: "Soni Kumari", role: "Class 1st Teacher", image: SoniKumari },
  { id: 6, name: "Gulafshava", role: "Kids Teacher", image: Gulafshava },
  { id: 7, name: "Sushma Devi", role: "Kids Teacher", image: SushmaDevi },
  { id: 8, name: "Aasma Perween", role: "Kids Teacher", image: AasmaaPerween }
>>>>>>> 3a55cf0 (Adding teacher Photo)
];

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-[#FBF9F0] flex flex-col items-center">
      {/* About Us Title */}
      <h1 className="text-3xl md:text-5xl font-semibold text-[#081646] mt-8 md:mt-12">About Us</h1>

      {/* Mission & Vision Cards */}
      <div className="w-full rounded-t-[60px] md:rounded-t-[100px] bg-white mt-8 md:mt-20 p-6 flex flex-wrap justify-center gap-6">
        {mission.map((item) => (
          <div key={item.id} className="bg-[#F7F9FC] border rounded-2xl shadow-lg w-72 md:w-130 p-6 text-center flex flex-col items-center">
            <h3 className="md:text-4xl text-3xl text-[#081646]">{item.title2}</h3>
            <h2 className="md:text-5xl text-4xl font-semibold text-[#081646] mt-3">{item.title1}</h2>
            <p className="text-[#081646] mt-4">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Leadership Section */}
      <div className="w-full bg-[#ffcf55] py-12  rounded-t-[60px] md:rounded-t-[100px] flex flex-col items-center gap-16 px-4 md:px-16">
        
        {/* Director */}
        <div className="flex flex-col lg:flex-row items-center w-full max-w-6xl gap-8">
          <div className="w-full lg:w-1/3 flex justify-center">
            <img src={SubodhKumar} alt="Subodh Kumar - Director" className="w-80 h-90 rounded-lg shadow-lg" />
          </div>
          <div className="w-full lg:w-2/3 bg-[#ffcf55] p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold">Welcome from the Director</h2>
            <h1 className="text-4xl font-bold text-[#081646]">Subodh Kumar</h1>
            <p className="mt-4 text-lg text-gray-800">
            Welcome to DBM Vidya Mandir, where learning goes beyond the classroom. As Director, my vision is to create a nurturing, innovative, and inclusive environment where every student is inspired to achieve their best. With a strong focus on academic excellence, character building, and future-ready skills, we aim to shape confident, compassionate, and capable individuals.

Together with our dedicated team, we are committed to making education a meaningful and transformative journey.
            </p>
          </div>
        </div>

        {/* Principal */}
        <div className="flex flex-col lg:flex-row items-center w-full max-w-6xl gap-8">
          <div className="w-full lg:w-1/3 flex justify-center">
            <img src={SumanKumari} alt="Suman Kumari - Principal" className="w-80 h-90 rounded-lg shadow-lg" />
          </div>
          <div className="w-full lg:w-2/3 bg-[#ffcf55] p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold">Welcome from the Principal</h2>
            <h1 className="text-4xl font-bold text-[#081646]">Suman Kumari</h1>
            <p className="mt-4 text-lg text-gray-800">
            Welcome to DBM Vidya Mandir , where every child is encouraged to dream, learn, and grow. As the Principal, I am proud to lead a school that values academic excellence, character development, and a strong sense of community.
            Our dedicated teachers and staff work together to create a safe, inclusive, and engaging environment where students are empowered to reach their full potential.
            </p>
          </div>
        </div>

        {/* Secretary */}
        <div className="flex flex-col lg:flex-row items-center w-full max-w-6xl gap-8">
          <div className="w-full lg:w-1/3 flex justify-center">
            <img src={SudhirKumar} alt="Sudhir Kumar - Secretary" className="w-80 h-90 rounded-lg shadow-lg" />
          </div>
          <div className="w-full lg:w-2/3 bg-[#ffcf55] p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold">Welcome from the Secretary</h2>
            <h1 className="text-4xl font-bold text-[#081646]">Sudhir Kumar</h1>
            <p className="mt-4 text-lg text-gray-800">
            As the Secretary of DBM Vidya Mandir, I am proud to be part of an institution focused on providing a nurturing environment for our students. Working with the Principal and Director, my goal is to ensure smooth operations and create an atmosphere where students can thrive both academically and personally.
            We are committed to shaping individuals who are academically successful and equipped with strong values, creativity, and confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Teachers Section */}
      <div className="w-full bg-[#FF6B6B] py-12 rounded-t-[100px] flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-white">Our</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-white">Teachers</h1>

        <div className="w-full flex flex-wrap justify-center gap-8 mt-10 px-4">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-white border rounded-2xl shadow-lg w-80 p-6 text-center flex flex-col items-center">
              <img src={teacher.image}  alt={teacher.name} className="w-64 h-90 rounded-lg object-cover mb-4" />
              <h3 className="text-xl font-bold text-[#081646]">{teacher.name}</h3>
              <p className="text-md text-gray-600 font-medium">{teacher.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
