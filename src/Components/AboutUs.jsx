import React from 'react'

const mission = [
    {id:1, title1:"Mission", title2: "Our", detail:"Our mission is to nurture young minds in a  joyful, and stimulating environment where every child is empowered to explore, and grow."},
    {id:2, title1:"Vision", title2:"Our", detail:"We envision a future where children develop a passion for discovery, empathy for others, and the confidence to pursue their dreams."}
];

const teachers = [
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
];

export default function AboutUs() {
  return (
    <>
     <div className='w-full min-h-screen bg-[#FBF9F0] flex flex-col items-center'>
        <h1 className='text-3xl md:text-5xl font-semibold text-[#081646] mt-8 md:mt-12'>About Us</h1>
        <div className="w-full min-h-auto rounded-t-[60px] md:rounded-t-[100px] flex flex-col md:flex-row items-center bg-[#ffffff] mt-8 md:mt-20 p-4 md:p-6">
            <div className="w-full h-auto p-10 flex flex-wrap justify-center gap-6">
                {mission.map((mission)=>(
                    <div key={mission.id} className="bg-[#F7F9FC] border rounded-2xl shadow-lg w-72 md:w-130 p-6 text-center flex flex-col items-center">
                        <h3 className='md:text-4xl text-3xl text-[#081646]'>{mission.title2}</h3>
                        <h2 className='md:text-5xl text-4xl text-[#081646] mt-3 font-semibold'>{mission.title1}</h2>
                        <p className=' text-[#081646] mt-4'>{mission.detail}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-full bg-[#FF6B6B] py-12 rounded-t-[100px] flex items-center justify-center flex-col">
        <h2 className="text-3xl md:text-5xl font-semibold text-white">Our</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white">Teachers</h1>
            
            <div className="w-full flex flex-wrap justify-center gap-8 mt-10">
                {teachers.map((teacher) => (
                    <div key={teacher.id} className="bg-white border rounded-2xl shadow-lg w-80 p-6 text-center flex flex-col items-center">
                        <img src={teacher.image} alt={teacher.name} className="w-64 h-48 rounded-lg object-cover mb-4" />
                        <h3 className="text-xl font-bold text-[#081646]">{teacher.name}</h3>
                        <p className="text-md text-gray-600 font-medium">{teacher.role}</p>
                        <p className="text-gray-500 text-sm mt-2">{teacher.description}</p>
                    </div>
                ))}
            </div>
        </div>
     </div>
    </>
  )
}
