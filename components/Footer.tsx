import React from 'react';
import { Facebook, Instagram,MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import AutoScrollLink from './AutoScrollLink';
import LinkedTreatmentText from './LinkedTreatmentText';
import { siteConfig } from '../data/site';

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 border-t border-gray-100">
      <div className="px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Prateek Dental Care home" className="mb-6 flex items-center gap-2 text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.5 2 6 4.5 6 8c0 1.5.5 3 1.5 4.5C8 13.5 9 15 9 17v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c0-2 1-3.5 1.5-4.5C17.5 11 18 9.5 18 8c0-3.5-2.5-6-6-6zM11 19v-2h2v2h-2zm4-6.5c-.5 1-1.5 2.5-1.5 4.5h-3c0-2-1-3.5-1.5-4.5C8.5 11.5 8 10 8 8c0-2.5 1.5-4 4-4s4 1.5 4 4c0 2-.5 3.5-1 4.5z"/></svg>
              <span className="font-display text-xl tracking-tight"><span className="font-bold">Prateek</span> <span className="text-[#48b5c4]">Dental Care</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8 font-light">
              Providing advanced dental care and <LinkedTreatmentText text="implant" /> solutions with precision and comfort in Wakad, Pune. Your smile is our priority.
            </p>
            <div className="flex gap-4 items-center text-gray-400">
              <a aria-label="Visit our Facebook page" href="https://www.facebook.com/profile.php?id=61559897704462" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#48b5c4] hover:text-white transition-all"><Facebook size={18} aria-hidden="true" /></a>
              <a aria-label="Visit our Instagram page" href="https://www.instagram.com/prateek.dentalcare" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#48b5c4] hover:text-white transition-all"><Instagram size={18} aria-hidden="true" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link href="/" className="hover:text-[#48b5c4] transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#48b5c4] transition-colors">Our Services</Link></li>
              <li><Link href="/gallery" className="hover:text-[#48b5c4] transition-colors">Clinic Gallery</Link></li>
              <li><AutoScrollLink href="/#about" className="hover:text-[#48b5c4] transition-colors">About Us</AutoScrollLink></li>
              <li><AutoScrollLink href="/#location" className="hover:text-[#48b5c4] transition-colors">Contact & Location</AutoScrollLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#48b5c4] shrink-0 mt-0.5" />
                <span>{siteConfig.display.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#48b5c4] shrink-0" />
                <span>{siteConfig.display.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#48b5c4] shrink-0" />
                <a href="mailto:info@prateekdental.com" className="hover:text-[#48b5c4] transition-colors">info@prateekdental.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#48b5c4] shrink-0 mt-0.5" />
                <span>{siteConfig.display.hours}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mb-10 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-6">
          <h3 className="mb-3 text-white font-medium">Areas We Serve</h3>
          <p className="text-sm font-light leading-relaxed text-gray-400">
            Patients visit Prateek Dental Care from Wakad, Hinjewadi, Tathawade, Punawale, Pimple Saudagar,
            Pimple Nilakh, Ravet, Balewadi, Baner, Thergaon, Kalewadi, Dange Chowk, Aundh, Mahalunge,
            Bhumkar Chowk, and Nigdi.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-xs font-light">
            &copy; {new Date().getFullYear()} Prateek Dental Care & Implant Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
