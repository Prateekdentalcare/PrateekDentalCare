import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
import teethImage from '../assets/teeth.webp';
import ServicesReveal from './ServicesReveal';

const servicesList = [
  { title: 'Orthodontic Braces and Aligners (दात सरळ करण्याचा उपचार)', href: '/services/orthodontics' },
  { title: 'Root Canal Treatment (RCT) (रूट कॅनल उपचार)', href: '/services/root-canal' },
  { title: 'Wisdom Teeth Removal (अक्कल दात काढणे)', href: '/services/wisdom-teeth' },
  { title: 'Dental Implants (दंत इम्प्लांट)', href: '/services/implants' },
  { title: 'Scaling and Polishing (दात स्वच्छ करणे)', href: '/services/scaling-polishing' },
  { title: 'Dental Fillings (दात भरणे)', href: '/services/dental-fillings' },
  { title: 'Bridges, Crowns, and Veneers (ब्रिज, कॅप आणि व्हिनिअर्स)', href: '/services/bridges-crowns-veneers' },
  { title: 'Dentures (बनावटी दात)', href: '/services/dentures' },
  { title: 'Kids Dentistry (लहान मुलांचे दंत उपचार)', href: '/services/kids-dentistry' },
  { title: 'Smile Makeover and Teeth Whitening (स्माईल मेकओव्हर आणि दात पांढरे करणे)', href: '/services/smile-makeover-teeth-whitening' },
  { title: 'Tooth Extraction (दात काढणे)', href: '/services/tooth-extraction' },
  { title: 'Preventive Dentistry (प्रतिबंधक दंत उपचार)', href: '/services/preventive-dentistry' }
];

export default function Services() {
  return (
    <ServicesReveal>
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
        
        {/* Left Column */}
        <div className="service-left lg:col-span-5 bg-[#f4f7f8] rounded-[2.5rem] p-10 md:p-14 flex flex-col items-center text-center h-full min-h-[450px] relative overflow-hidden">
           <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-display font-medium text-gray-900 leading-[1.2] tracking-tight mb-10 z-10">
             Always <span className="text-[#48b5c4]">Smile</span> on Every Occasion
           </h2>
           
           <div className="relative w-full flex-1 min-h-[250px] rounded-[2rem] overflow-hidden shadow-sm border-[4px] border-white">
             <Image
               src={teethImage}
               alt="Always Smile"
               fill
               sizes="(min-width: 1024px) 35vw, 100vw"
               className="absolute inset-0 h-full w-full object-cover object-top"
             />
           </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:py-6 lg:pl-10">
          <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-8 font-light">
            We offer a range of procedures designed to enhance the appearance of your smile, boosting your confidence. Below is a list of our services.
          </p>

          <h3 className="text-xl md:text-2xl font-display font-medium text-gray-900 mb-8">What We Offer</h3>
          
          <div className="services-list-container grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {servicesList.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="service-item flex items-center gap-3 transition-colors hover:text-[#48b5c4]"
              >
                <ShieldCheck size={20} strokeWidth={1.5} className="text-gray-900 shrink-0" />
                <span className="text-sm font-medium text-gray-800 leading-snug transition-colors hover:text-[#48b5c4]">{service.title}</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </ServicesReveal>
  );
}
