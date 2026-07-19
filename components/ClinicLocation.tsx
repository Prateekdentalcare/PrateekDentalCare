import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '../data/site';

export default function ClinicLocation() {
  return (
    <section id="location" className="scroll-mt-32 px-6 md:px-16 py-8 md:py-16 max-w-[1400px] mx-auto border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-display font-medium text-gray-900 leading-[1.2] tracking-tight text-left">
          Visit Our <br/><span className="text-[#48b5c4]">Clinic</span>
        </h2>
        
        <div className="flex-1 hidden md:block px-8 pb-3">
           <div className="w-full border-t border-gray-100"></div>
        </div>
        
        <p className="text-2xl md:text-[1.75rem] font-display font-medium text-gray-900 shrink-0 pb-1 text-left md:text-right">
          Located in the heart of <br/><span className="text-[#48b5c4]">Wakad, Pune</span>
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info */}
        <div className="lg:col-span-4 bg-[#f9fafa] rounded-[2rem] p-8 md:p-10 border border-gray-100">
          <h3 className="text-xl font-display font-medium text-gray-900 mb-8">Contact Information</h3>
          <p className="text-[13px] text-gray-500 leading-relaxed font-light mb-8">
            Visit a clinic designed for convenience, with a spacious waiting area, modern equipment, and a hygienic, comfortable setting for every patient.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-[#48b5c4] border border-gray-50">
                <MapPin size={18} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">Clinic Address</p>
                <p className="text-[13px] text-gray-500 leading-relaxed font-light">
                  Prateek Dental Care & Implant Centre<br/>
                  {siteConfig.display.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-[#48b5c4] border border-gray-50">
                <Phone size={18} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">Phone Number</p>
                <p className="text-[13px] text-gray-500 font-light">{siteConfig.display.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-[#48b5c4] border border-gray-50">
                <Mail size={18} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">Email Address</p>
                <p className="text-[13px] text-gray-500 font-light">info@prateekdental.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-[#48b5c4] border border-gray-50">
                <Clock size={18} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">Opening Hours</p>
                <p className="text-[13px] text-gray-500 leading-relaxed font-light">
                  {siteConfig.display.hours}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="lg:col-span-8 h-[400px] lg:h-full min-h-[450px] rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl bg-gray-50 relative group">
          <div className="absolute inset-0 bg-blue-50/20 pointer-events-none z-10"></div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.261914101188!2d73.7677333758414!3d18.602086869999086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9d4046792f5%3A0xb1bad92a7987bca5!2sPrateek%20Dental%20Care!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
            className="absolute inset-0 w-full h-full z-0"
          ></iframe>
          
          <div className="absolute bottom-6 left-6 z-20">
            <a 
              href="https://www.google.com/maps/place/Prateek+Dental+Care/@18.602082,73.770308,16z/data=!4m6!3m5!1s0x3bc2b9d4046792f5:0xb1bad92a7987bca5!8m2!3d18.6020818!4d73.7703083!16s%2Fg%2F11lcmys8vt?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all border border-gray-100"
            >
              <MapPin size={18} className="text-[#48b5c4]" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
