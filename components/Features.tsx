import React from 'react';
import Link from 'next/link';
import FeaturesReveal from './FeaturesReveal';

export default function Features() {
  const features = [
    {
      title: 'Root Canal Treatment',
      href: '/services/root-canal',
      desc: 'Say goodbye to tooth pain and hello to long-lasting relief.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800 mb-8">
          <path d="M12 2C8.5 2 6 4.5 6 8c0 1.5.5 3 1.5 4.5C8 13.5 9 15 9 17v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c0-2 1-3.5 1.5-4.5C17.5 11 18 9.5 18 8c0-3.5-2.5-6-6-6zM11 19v-2h2v2h-2zm4-6.5c-.5 1-1.5 2.5-1.5 4.5h-3c0-2-1-3.5-1.5-4.5C8.5 11.5 8 10 8 8c0-2.5 1.5-4 4-4s4 1.5 4 4c0 2-.5 3.5-1 4.5z"/>
        </svg>
      )
    },
    {
      title: 'Crowns',
      href: '/services/bridges-crowns-veneers',
      desc: 'Restore strength, shape, and function for damaged teeth.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800 mb-8">
          <rect x="3" y="8" width="18" height="12" rx="2" />
          <path d="M7 8v8" />
          <path d="M17 8v8" />
          <path d="M3 12h18" />
          <path d="M12 4v4" />
        </svg>
      )
    },
    {
      title: 'Bridges',
      href: '/services/bridges-crowns-veneers',
      desc: 'Replace missing teeth with stable, natural-looking support.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800 mb-8">
          <rect x="3" y="8" width="18" height="12" rx="2" />
          <path d="M7 8v8" />
          <path d="M17 8v8" />
          <path d="M3 12h18" />
          <path d="M12 4v4" />
        </svg>
      )
    },
    {
      title: 'Dental Implants',
      href: '/services/implants',
      desc: 'A permanent, natural-feeling solution for missing teeth.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800 mb-8">
           <path d="M12 2v6" />
           <path d="M10 5h4" />
           <path d="M10 8h4" />
           <path d="M12 11c-3.5 0-6 2.5-6 6 0 1.5.5 3 1.5 4.5C8 22.5 9 24 9 24h6s1-1.5 1.5-2.5c.5-1 1.5-2.5 1.5-4.5 0-3.5-2.5-6-6-6z" />
        </svg>
      )
    },
    {
      title: 'Orthodontic Treatment',
      href: '/services/orthodontics',
      desc: 'Straighten teeth and improve bite alignment with confidence.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800 mb-8">
          <path d="M4 9h16" />
          <path d="M4 15h16" />
          <path d="M7 7v10" />
          <path d="M12 7v10" />
          <path d="M17 7v10" />
        </svg>
      )
    },
    {
      title: 'Veneers',
      href: '/services/bridges-crowns-veneers',
      desc: 'Enhance the color, shape, and symmetry of your smile.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800 mb-8">
          <path d="M12 3c-3.9 0-7 2.8-7 6.3 0 1.3.4 2.6 1.1 3.7.6.9.9 1.7.9 2.7V18c0 1.7 1.3 3 3 3h4c1.7 0 3-1.3 3-3v-2.3c0-1 .3-1.8.9-2.7.7-1.1 1.1-2.4 1.1-3.7C19 5.8 15.9 3 12 3z" />
          <path d="M9.5 12.5c.8.6 1.6.9 2.5.9s1.7-.3 2.5-.9" />
        </svg>
      )
    }
  ];

  return (
    <FeaturesReveal>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 feature-heading">
        <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-display font-medium text-gray-900 leading-[1.2] tracking-tight max-w-sm text-left">
          What Makes Our Clinic <br/>Exceptional
        </h2>
        
        <div className="flex-1 hidden md:block px-8 pb-3">
           <div className="w-full border-t border-gray-100"></div>
        </div>
        
        <h3 className="text-2xl md:text-[1.75rem] font-display font-medium text-gray-900 shrink-0 pb-1 text-left">
          Our <span className="text-[#48b5c4]">Services</span>
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Link
            key={index}
            href={feature.href}
            className="feature-card bg-[#f9fafa] hover:bg-[#f0f4f5] transition-colors rounded-[2rem] p-10 flex flex-col items-center text-center group cursor-pointer shadow-[0_2px_10px_rgb(0,0,0,0.02)]"
          >
            <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
              {feature.icon}
            </div>
            <h4 className="text-[17px] font-display font-medium text-gray-900 mb-4">{feature.title}</h4>
            <p className="text-[13px] text-gray-500 leading-relaxed font-light max-w-[240px]">
              {feature.desc}
            </p>
          </Link>
        ))}
      </div>
    </FeaturesReveal>
  );
}
