import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AutoScrollLink from './AutoScrollLink';
import Navbar from './Navbar';
import HeroReveal from './HeroReveal';

const treatmentBadges = [
  [
    { label: 'Root Canal Treatment (रूट कॅनल उपचार)', href: '/services/root-canal' },
    { label: 'Crowns (दातांचे कॅप)', href: '/services/bridges-crowns-veneers' },
    { label: 'Bridges (दातांचा ब्रिज)', href: '/services/bridges-crowns-veneers' },
  ],
  [
    { label: 'Dental Implants (दंत इम्प्लांट)', href: '/services/implants' },
    { label: 'Orthodontic Treatment (दात सरळ करण्याचा उपचार)', href: '/services/orthodontics' },
    { label: 'Veneers (व्हिनिअर्स)', href: '/services/bridges-crowns-veneers' },
  ],
];

export default function Hero() {
  return (
    <HeroReveal>
      <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-gray-900 min-h-[85vh] flex flex-col justify-between">
        <Image
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2000"
          alt="Dental patient"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent"></div>
        
        <Navbar />
        
        <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-32 pb-16 flex-1 flex flex-col justify-center">
          <h1 className="hero-anim text-4xl md:text-5xl lg:text-[4.8rem] font-display font-medium text-white max-w-3xl leading-[1.05] tracking-tight">
            Dental Clinic in<br/><span className="text-[#48b5c4]">Wakad, Pune</span><br/>for modern smile care
          </h1>
          <p className="hero-anim mt-6 text-gray-200 max-w-lg text-sm md:text-base font-light leading-relaxed">
            Prateek Dental Care offers root canal treatment, dental implants, braces, kids dentistry, tooth extraction, and preventive dental care for patients in Wakad and nearby Pune areas.
          </p>
          <div className="hero-anim mt-8 flex flex-wrap items-center gap-4">
            <AutoScrollLink href="/#consultation" className="bg-white text-gray-900 px-2 py-2 pr-6 rounded-full flex items-center gap-4 w-fit font-medium text-sm hover:bg-gray-50 transition-colors shadow-sm">
              <span className="bg-[#48b5c4] text-white rounded-full p-2">
                <ArrowRight size={18}/>
              </span>
              Schedule Your Visit
            </AutoScrollLink>
            <Link href="/services" className="bg-transparent border border-white/30 text-white px-6 py-3 rounded-full flex items-center w-fit font-medium text-sm hover:bg-white/10 transition-colors">
              Discover Our Services
            </Link>
          </div>

          {/* Floating Pills Right */}
          <div className="hero-anim absolute right-6 md:right-12 bottom-20 hidden lg:flex flex-col gap-3 items-end">
            {treatmentBadges.map((row) => (
              <div key={row.map((item) => item.label).join('-')} className="flex gap-3">
                {row.map((badge) => (
                  <Link
                    key={badge.label}
                    href={badge.href}
                    className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
                  >
                    {badge.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 px-6 md:px-12 py-5 border-t border-white/20 flex justify-between items-center text-white/70 text-xs font-medium">
          <div className="hero-anim">Your Teeth Our Science</div>
          <div className="hero-anim flex gap-4">
          </div>
          <AutoScrollLink href="/#about" className="hero-anim hover:text-white transition-colors">
            Scroll for More
          </AutoScrollLink>
        </div>
      </div>
    </HeroReveal>
  );
}
