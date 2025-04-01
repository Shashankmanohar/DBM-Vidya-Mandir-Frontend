import { Contact } from 'lucide-react';
import React from 'react';
import Ad1 from '../assets/Ad1.svg';
import Ad2 from '../assets/Ad2.svg';
import Ad3 from '../assets/Ad3.svg';

const Steps = [
    { id: 1, title: "Contact", description: "The first step in our admission process is reaching out to us. Whether through a phone call...", icon: Ad1 },
    { id: 2, title: "Application", description: "Once you've gathered all the necessary information, the next step is submitting an application.", icon: Ad2 },
    { id: 3, title: "Counselling", description: "After receiving your application, we schedule a counselling session to discuss your child's needs.", icon: Ad3 },
    { id: 4, title: "Admission", description: "Finally, once all the steps are completed, you'll receive confirmation of admission and next steps.", icon: Ad3 }
];

const Fees = [
  { id: 1, title: "Play Group :", presentfees: "₹800/-", oldfees: "₹1000/-" },
  { id: 2, title: "Nursery - UKG :", presentfees: "₹499/-", oldfees: "₹800/-" },
  { id: 3, title: "Class: 1 - 5 :", presentfees: "₹599/-", oldfees: "₹900/-" },
  { id: 4, title: "Class: 6 - 8 :", presentfees: "₹699/-", oldfees: "₹1000/-" },
  { id: 5, title: "Bus Fees :", description: "Bus Fees applicable according to distance." }
];

export default function AdmissionProcess() {
  return (
    <div className='w-full min-h-screen bg-[#FBF9F0] flex flex-col items-center'>
      <h1 className='text-3xl md:text-5xl font-semibold text-[#081646] mt-8 md:mt-12'>Admission</h1>
      <div className="w-full min-h-auto rounded-t-[40px] md:rounded-t-[100px] flex flex-col items-center bg-[#ffffff] mt-8 md:mt-20 p-4 mt-4 md:p-6">
        <h2 className='text-2xl md:text-4xl text-[#081646]'>Our</h2>
        <h2 className='text-2xl md:text-4xl text-[#081646] font-bold'>Admission Process</h2>
        <section className='w-full flex flex-wrap justify-center gap-4 md:gap-6 py-6 md:py-10'>
          {Steps.map((step) => (
            <div key={step.id} className='bg-white shadow-lg border-2 border-[#081646] rounded-2xl p-4 md:p-6 w-64 md:w-72 text-center relative'>
              <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#ff6464] text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-lg font-bold'>
                {step.id}
              </div>
              <img src={step.icon} alt={step.title} className='w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 mt-6' />
              <h3 className='text-lg md:text-xl font-semibold mb-2'>{step.title}</h3>
              <p className='text-gray-600 text-sm md:text-base'>{step.description}</p>
            </div>
          ))}
        </section>
      </div>
      <div className="w-full h-auto bg-[#ffcf55] md:rounded-t-[100px] rounded-t-[40px] flex flex-col items-center py-8 md:py-12">
        <h2 className='text-2xl md:text-4xl text-[#081646]'>Our</h2>
        <h2 className='text-2xl md:text-4xl text-[#081646] font-bold'>Program Fees</h2>
        <div className="w-full h-auto py-6 md:py-12 flex flex-col items-center px-4 md:px-0">
          {Fees.map((Fee) => (
            <div key={Fee.id} className='bg-white border-2 border-[#081646] py-4 md:py-7 rounded-2xl w-full md:w-180 flex flex-col md:flex-row items-center justify-between mt-4 md:mt-5 px-6 md:px-10 shadow-md'>
              <h3 className='text-xl md:text-2xl font-semibold text-[#081646]'>{Fee.title}</h3>
              {Fee.presentfees && Fee.oldfees ? (
                <div className="flex flex-col md:flex-row items-center gap-2 mt-2 md:mt-0 md:gap-4">
                  <p className='text-[#081646] font-semibold text-lg md:text-xl'>{Fee.presentfees}</p>
                  <p className='text-[#081646] font-semibold text-lg md:text-xl line-through'>{Fee.oldfees}</p>
                </div>
              ) : (
                <p className='text-[#081646] font-semibold text-lg md:text-xl'>{Fee.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
