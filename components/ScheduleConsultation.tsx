import React from 'react';
import Image from 'next/image';
import { User, Phone, MessageSquare } from 'lucide-react';
import clinicImage from '../assets/clinic.webp';

export default function ScheduleConsultation() {
  return (
    <section id="consultation" className="scroll-mt-32 px-6 md:px-16 py-10 md:py-20 max-w-[1400px] mx-auto border-t border-gray-100 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10 md:mb-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-display font-medium text-gray-900 leading-[1.1] tracking-tight">
            Schedule Your <br className="hidden md:block"/> Consultation <span className="font-bold text-[#48b5c4]">Today</span>
          </h2>
        </div>
        
        <div className="flex-1 hidden md:block px-8 pb-4">
           <div className="w-full border-t-2 border-dashed border-gray-200"></div>
        </div>
        
        <p className="text-xl md:text-2xl lg:text-[1.75rem] font-display font-medium text-gray-500 shrink-0 pb-2 text-right">
          We are looking forward to <br/><span className="text-gray-900">seeing you smile.</span>
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-center">
        {/* Left Image */}
        <div className="lg:col-span-7 relative rounded-[2.5rem] overflow-hidden aspect-[4/3] md:aspect-auto md:h-[600px] shadow-2xl z-10 group">
           <Image
             src={clinicImage}
             alt="Consultation Scheduling"
             fill
             sizes="(min-width: 1024px) 50vw, 100vw"
             className="h-full w-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/10 to-transparent transition-opacity duration-500"></div>
           <div className="absolute bottom-8 left-8 right-8 font-display text-white">
             <div className="inline-block rounded-2xl border border-white/30 bg-white/20 p-6 shadow-lg backdrop-blur-md">
               <p className="mb-1 text-xl font-medium">Expert Care Awaits</p>
               <p className="text-sm font-medium text-white/80">Join thousands of satisfied patients.</p>
             </div>
           </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-5 lg:-ml-12 relative z-20">
          <div className="font-display rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] md:p-12">
            <div className="mb-8">
              <h3 className="mb-2 text-2xl font-medium text-gray-900">Request an Appointment</h3>
              <p className="text-sm text-gray-500">Fill out the form below and we'll get back to you to confirm your slot.</p>
            </div>
            
            <div className="flex flex-col gap-6">
               <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400">
                   <User size={20} />
                 </div>
                 <input 
                   type="text" 
                   placeholder="Full Name" 
                   className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-4 pr-5 pl-12 text-sm font-medium text-gray-900 transition-all placeholder:text-gray-400 focus:border-[#48b5c4] focus:ring-4 focus:ring-[#48b5c4]/10 focus:outline-none"
                 />
               </div>
               
               <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400">
                   <Phone size={20} />
                 </div>
                 <input 
                   type="tel" 
                   placeholder="Phone Number" 
                   className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-4 pr-5 pl-12 text-sm font-medium text-gray-900 transition-all placeholder:text-gray-400 focus:border-[#48b5c4] focus:ring-4 focus:ring-[#48b5c4]/10 focus:outline-none"
                 />
               </div>
               
               <div className="relative">
                 <div className="absolute top-4 left-0 pl-5 pointer-events-none text-gray-400">
                   <MessageSquare size={20} />
                 </div>
                 <textarea 
                   placeholder="How can we help you?" 
                   rows={5}
                   className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50/50 py-4 pr-5 pl-12 text-sm font-medium text-gray-900 transition-all placeholder:text-gray-400 focus:border-[#48b5c4] focus:ring-4 focus:ring-[#48b5c4]/10 focus:outline-none"
                 ></textarea>
               </div>
               
               <button className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#48b5c4] py-4 text-base font-medium text-white shadow-[0_8px_20px_-6px_rgba(72,181,196,0.5)] transition-all hover:-translate-y-0.5 hover:bg-[#3da3b1] hover:shadow-[0_12px_24px_-6px_rgba(72,181,196,0.6)] active:translate-y-0">
                 <span>Submit Request</span>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

