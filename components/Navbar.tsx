import React from 'react';
import Link from 'next/link';
import NavbarDesktopNav from './NavbarDesktopNav';
import NavbarMobileMenu from './NavbarMobileMenu';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-10">
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Prateek Dental Care home" className="flex items-center gap-2 text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.5 2 6 4.5 6 8c0 1.5.5 3 1.5 4.5C8 13.5 9 15 9 17v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c0-2 1-3.5 1.5-4.5C17.5 11 18 9.5 18 8c0-3.5-2.5-6-6-6zM11 19v-2h2v2h-2zm4-6.5c-.5 1-1.5 2.5-1.5 4.5h-3c0-2-1-3.5-1.5-4.5C8.5 11.5 8 10 8 8c0-2.5 1.5-4 4-4s4 1.5 4 4c0 2-.5 3.5-1 4.5z"/></svg>
          <span className="font-display text-xl tracking-tight"><span className="font-bold">Prateek</span> <span className="text-[#48b5c4]">Dental Care & Implant Centre</span></span>
        </Link>

        <NavbarDesktopNav />
        <NavbarMobileMenu />
      </div>
    </nav>
  );
}
