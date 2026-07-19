import React from 'react';
import Image from 'next/image';
import atulImage from '../assets/atul.webp';
import LinkedTreatmentText from './LinkedTreatmentText';
import AboutUsReveal from './AboutUsReveal';

export default function AboutUs() {
  const highlights = [
    {
      title: 'Implant Dentistry',
      description: 'Advanced implant planning and restoration tailored to long-term oral health.',
    },
    {
      title: 'Preventive Care',
      description: 'Routine checkups, scaling, polishing, and guidance to protect your smile early.',
    },
    {
      title: 'Cosmetic Solutions',
      description: 'Whitening, veneers, and smile enhancement treatments designed for natural results.',
    },
    {
      title: 'Patient-First Approach',
      description: 'Comfort-focused consultations with clear explanations and personalized treatment plans.',
    },
  ];

  return (
    <AboutUsReveal>
      <div className="grid md:grid-cols-12 gap-12 md:gap-8 lg:gap-16 items-center">
        
        {/* Left Column */}
        <div className="about-img md:col-span-5 flex justify-center lg:justify-start">
          <div className="w-full max-w-md relative">
            <div className="absolute inset-0 bg-[#48b5c4]/10 rounded-[2rem] translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 transition-transform hover:translate-x-2 hover:translate-y-2"></div>
            <Image
              src={atulImage}
              alt="Dr. Atul Prateek"
              className="w-full aspect-[4/5] object-cover rounded-[2rem] relative z-10 shadow-sm"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="about-text md:col-span-7 flex flex-col justify-center mt-8 md:mt-0">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-gray-200 w-12"></div>
            <span className="text-xs font-medium text-[#48b5c4] uppercase tracking-widest">About The Doctor</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-medium text-gray-900 leading-[1.2] tracking-tight mb-8">
            About <span className="text-[#48b5c4]">Dr. Atul Prateek</span>
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-[15px] md:text-base font-light">
            <p>
              Welcome to <strong className="font-semibold text-gray-900">Prateek Dental Care & Implant Centre</strong>, your trusted destination for advanced dental care in Wakad, Pune. Led by the highly qualified <strong className="font-semibold text-gray-900">Dr. Atul Prateek</strong>, the clinic combines expertise, compassion, and cutting-edge treatments to deliver exceptional results.
            </p>
            <p>
              Dr. Atul Prateek holds a <strong className="font-semibold text-gray-900">BDS (Bachelor of Dental Surgery)</strong> from Rajasthan University of Health Sciences (RUHS), along with a <strong className="font-semibold text-gray-900">Fellowship in Clinical Dentistry</strong> and a <strong className="font-semibold text-gray-900">Mastership in Oral Implantology</strong>. His extensive qualifications ensure top-tier care tailored to each patient's needs.
            </p>
            <div className="bg-gray-50/80 p-6 rounded-2xl border border-gray-100 relative mt-8">
               <div className="absolute top-4 left-4 text-[#48b5c4]/20">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                   <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                 </svg>
               </div>
               <p className="text-gray-700 italic relative z-10 pl-6 text-sm md:text-[15px]">
                 From <LinkedTreatmentText text="preventive care" /> to advanced oral implantology, we provide personalized treatments in a comfortable, patient-focused environment. At <strong className="font-semibold text-gray-900">Prateek Dental Care & Implant Centre</strong>, your smile is our priority!
               </p>
            </div>
          </div>
        </div>
      </div>


      {/* Highlights Row */}
      <div className="stats-container -mx-6 mt-10 border-t border-gray-100 px-6 pt-10 md:-mx-16 md:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8 md:[grid-template-columns:repeat(4,minmax(0,1fr))]">
        {highlights.map((item) => (
          <div key={item.title} className="stat-item md:flex md:min-h-[180px] md:flex-col md:justify-start md:pr-8">
            <div className="text-2xl md:text-3xl font-display font-medium text-gray-900">
              {item.title}
            </div>
            <div className="mt-3 max-w-none text-xs font-medium leading-relaxed text-gray-500 md:text-sm">
              <LinkedTreatmentText text={item.description} />
            </div>
          </div>
        ))}
        </div>
      </div>
    </AboutUsReveal>
  );
}
