import React from 'react';
import Image from 'next/image';
import jawImage from '../assets/jaw.webp';
import smileImage from '../assets/smile.webp';
import toolsImage from '../assets/tools.webp';
import { Star, Shield, Activity, Clock } from 'lucide-react';
import LinkedTreatmentText from './LinkedTreatmentText';

export default function AdvancedCare() {
  const benefits = [
    {
      title: "Clinic Established 5 Years Ago",
      desc: "Built on consistent care and patient trust, the clinic has been serving Wakad for the past five years.",
      icon: <Star size={20} className="text-[#48b5c4]" />
    },
    {
      title: "Modern Equipment",
      desc: "Updated dental technology supports accurate diagnosis, efficient treatment planning, and a smoother patient experience.",
      icon: <Activity size={20} className="text-[#48b5c4]" />
    },
    {
      title: "Hygienic & Comfortable",
      desc: "Strict sterilization protocols and a calm treatment setup help maintain a hygienic and comfortable environment.",
      icon: <Shield size={20} className="text-[#48b5c4]" />
    },
    {
      title: "Patient-Friendly Approach",
      desc: "Each visit is guided by clear explanations, personal attention, and care plans focused on comfort and long-term oral health.",
      icon: <Clock size={20} className="text-[#48b5c4]" />
    }
  ];

  return (
    <section className="px-6 md:px-16 py-8 md:py-16 max-w-[1400px] mx-auto border-t border-gray-100 mt-8">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-gray-200 w-12"></div>
            <span className="text-xs font-medium text-[#48b5c4] uppercase tracking-widest">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl md:text-[2.75rem] font-display font-medium text-gray-900 leading-[1.15] tracking-tight max-w-lg mb-8">
            Advanced Dental Care Ensures Precision, Comfort, & Healthy Smiles.
          </h2>
          
          <p className="text-gray-600 text-[15px] md:text-base leading-relaxed font-light mb-8 max-w-lg">
            Established five years ago in the heart of Wakad, Prateek Dental Care & Implant Centre combines modern dental technology, a patient-friendly approach, and a comfortable clinical environment to deliver dependable care.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#48b5c4]/10 flex items-center justify-center shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-[15px] font-medium text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-[13px] text-gray-500 font-light leading-relaxed"><LinkedTreatmentText text={benefit.desc} /></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6 items-center">
          <div className="space-y-4 lg:space-y-6">
            <div className="rounded-[2rem] overflow-hidden aspect-[4/5] shadow-sm transform translate-y-8">
              <Image
                src={jawImage}
                alt="Dental jaw scan"
                width={400}
                height={500}
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 lg:space-y-6">
            <div className="rounded-[2rem] overflow-hidden aspect-[4/5] shadow-sm">
              <Image
                src={smileImage}
                alt="Bright smile treatment"
                width={400}
                height={500}
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-[2rem] border border-gray-100 shadow-sm">
              <Image
                src={toolsImage}
                alt="Dental tools and equipment"
                width={500}
                height={500}
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

