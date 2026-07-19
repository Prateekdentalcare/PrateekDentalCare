import React from 'react';
import Image from 'next/image';
import atulImage from '../assets/atul.webp';
import researchImage from '../assets/research.webp';

export default function FeatureTreatment() {
  return (
    <section className="px-6 md:px-16 py-8 md:py-16 max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        
        {/* Left Column */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="px-5 py-2.5 border border-gray-200 rounded-full text-xs font-medium text-gray-700 inline-block uppercase tracking-wider">Specialized Care</span>
            <h2 className="mt-8 text-3xl md:text-[2.75rem] font-display font-medium text-gray-900 leading-[1.1] tracking-tight max-w-lg">
              Transforming Smiles with Precision & Expertise
            </h2>
            <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
              With extensive training including a Mastership in Oral Implantology, we provide personalized, top-tier dental solutions tailored to your unique needs.
            </p>
          </div>

          <div className="mt-10 bg-[#eef3f7] rounded-[2rem] p-8 flex flex-col md:flex-row gap-6 items-center">
             <div className="bg-[#d9e5ee] w-32 h-32 rounded-full overflow-hidden shrink-0 shadow-sm">
                <Image src={atulImage} alt="Dr. Atul Prateek" className="h-full w-full object-cover" />
             </div>
             <div>
                <h3 className="font-display font-medium text-xl text-gray-900">Dr. Atul Prateek</h3>
                <p className="text-[13px] text-gray-500 mt-1 font-medium">BDS, Mastership in Oral Implantology</p>

                <p className="text-xs text-gray-600 mt-4 leading-relaxed italic">
                  &quot;Dedicated to providing comfortable, long-lasting dental solutions and restoring confidence in every smile.&quot;
                </p>
             </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative mt-8 lg:mt-0">
          <div className="relative bg-[#eef3f7] rounded-[2.5rem] h-[500px] lg:h-[600px] overflow-hidden shadow-sm">
             <Image
               src={researchImage}
               alt="Advanced Dental Care"
               fill
               sizes="(min-width: 1024px) 40vw, 100vw"
               className="h-full w-full object-cover opacity-90 mix-blend-multiply"
             />
          </div>
          
          {/* Overlay Stat Card */}
          <div className="absolute -bottom-8 left-6 right-6 lg:-left-12 lg:-right-12 xl:left-12 xl:right-12 bg-white rounded-[1.5rem] p-6 lg:p-8 shadow-xl border border-gray-100">
             <div className="grid grid-cols-2 gap-8 border-b border-gray-100 pb-6">
                <div>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-2">Years of<br/>Experience</p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-display font-medium text-gray-900">5<span className="text-[#48b5c4]">+</span></span>
                    <span className="text-xs text-gray-500 pb-1 font-medium">Years</span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-2">Successful<br/>Treatments</p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-display font-medium text-gray-900">5k<span className="text-[#48b5c4]">+</span></span>
                    <span className="text-xs text-gray-500 pb-1 font-medium">Patients</span>
                  </div>
                </div>
             </div>
             <div className="pt-6">
               <div className="flex justify-between items-center mb-3">
                 <p className="text-xs text-gray-500 font-medium">Treatment Success & Patient Satisfaction</p>
                 <span className="text-xs font-bold text-gray-900">98%</span>
               </div>
               <div className="flex gap-1">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`h-6 flex-1 rounded-sm ${i < 11 ? 'bg-[#48b5c4]' : 'bg-[#eef3f7]'}`}></div>
                  ))}
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}

