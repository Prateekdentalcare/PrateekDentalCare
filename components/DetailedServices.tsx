import React from 'react';
import Link from 'next/link';

const detailedServices = [
  { title: 'Dental Fillings (दात भरणे)', desc: 'Replace damaged tooth substance with composite or ceramic materials.', href: '/services/dental-fillings' },
  { title: 'Root Canal Treatment (रूट कॅनल उपचार)', desc: 'Remove infected pulp, clean and seal the tooth to save it.', href: '/services/root-canal' },
  { title: 'Wisdom Tooth Removal (अक्कल दात काढणे)', desc: 'Surgical removal of problematic wisdom teeth.', href: '/services/wisdom-teeth' },
  { title: 'Orthodontic Treatment (दात सरळ करण्याचा उपचार)', desc: 'Straighten teeth and correct bite alignment.', href: '/services/orthodontics' },
  { title: 'Dental Implants (दंत इम्प्लांट)', desc: 'Permanent solution for missing teeth with artificial crowns.', href: '/services/implants' },
  { title: 'Scaling and Polishing (दात स्वच्छ करणे)', desc: 'Professional cleaning to remove plaque, tartar, and stains.', href: '/services/scaling-polishing' },
  { title: 'Dentures (बनावटी दात)', desc: 'Removable appliances to replace missing teeth for better oral function.', href: '/services/dentures' },
  { title: 'Bridges, Crowns, and Veneers (ब्रिज, कॅप आणि व्हिनिअर्स)', desc: 'Restore, protect, and improve the appearance of teeth.', href: '/services/bridges-crowns-veneers' },
  { title: 'Kids Dentistry (लहान मुलांचे दंत उपचार)', desc: 'Specialized dental care and preventive treatments for children.', href: '/services/kids-dentistry' },
  { title: 'Smile Makeover & Teeth Whitening (स्माईल मेकओव्हर आणि दात पांढरे करणे)', desc: 'Lighten stained or discolored teeth for a brighter smile.', href: '/services/smile-makeover-teeth-whitening' },
  { title: 'Tooth Extraction (दात काढणे)', desc: 'Remove damaged or impacted teeth to improve oral health.', href: '/services/tooth-extraction' },
  { title: 'Preventive Dentistry (प्रतिबंधक दंत उपचार)', desc: 'Regular care to avoid cavities, gum disease, and tooth loss.', href: '/services/preventive-dentistry' }
];

export default function DetailedServices() {
  return (
    <section className="px-6 md:px-16 py-8 md:py-16 max-w-[1400px] mx-auto border-t border-gray-100 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-display font-medium text-gray-900 leading-[1.2] tracking-tight text-left">
          Our Detailed <br/><span className="text-[#48b5c4]">Services</span>
        </h2>

        <div className="flex-1 hidden md:block px-8 pb-3">
           <div className="w-full border-t border-gray-100"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {detailedServices.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="group cursor-pointer rounded-[2rem] border border-transparent bg-[#f9fafa] p-8 transition-all hover:border-gray-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-50 bg-white shadow-sm transition-colors group-hover:bg-[#48b5c4]/10">
              <div className="h-2 w-2 rounded-full bg-[#48b5c4] transition-transform group-hover:scale-150"></div>
            </div>
            <h3 className="mb-3 text-[17px] font-display font-medium text-gray-900">{service.title}</h3>
            <p className="text-[14px] font-light leading-relaxed text-gray-500">{service.desc}</p>
            <div className="mt-4 text-sm font-medium text-[#48b5c4] opacity-0 transition-opacity group-hover:opacity-100">
              Learn more &rarr;
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
