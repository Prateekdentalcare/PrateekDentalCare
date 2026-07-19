'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import AutoScrollLink from './AutoScrollLink';

export default function NavbarMobileMenu() {
  const pathname = usePathname();
  const isServicesPage = pathname === '/services';
  const isGalleryPage = pathname === '/gallery';
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const navLinkClass = 'text-xl font-display font-medium text-white transition-colors hover:text-[#48b5c4]';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? 'hidden' : '';
    document.body.style.overflow = isOpen ? 'hidden' : '';
    document.body.style.touchAction = isOpen ? 'none' : '';

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="z-[110] flex h-12 w-12 items-center justify-center rounded-full p-2 text-white transition-colors hover:bg-white/10 focus:outline-none lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMounted && isOpen
        ? createPortal(
            <div className="fixed inset-0 z-[200] h-dvh w-screen overflow-hidden bg-gray-950/98 text-white backdrop-blur-2xl lg:hidden">
              <div className="flex h-full min-h-dvh flex-col px-8 py-10">
                <div className="flex items-center justify-between">
                  <Link href="/" aria-label="Prateek Dental Care home" onClick={closeMenu} className="flex items-center gap-3 text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.5 2 6 4.5 6 8c0 1.5.5 3 1.5 4.5C8 13.5 9 15 9 17v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c0-2 1-3.5 1.5-4.5C17.5 11 18 9.5 18 8c0-3.5-2.5-6-6-6zM11 19v-2h2v2h-2zm4-6.5c-.5 1-1.5 2.5-1.5 4.5h-3c0-2-1-3.5-1.5-4.5C8.5 11.5 8 10 8 8c0-2.5 1.5-4 4-4s4 1.5 4 4c0 2-.5 3.5-1 4.5z"/></svg>
                    <span className="font-display text-lg tracking-tight"><span className="font-bold">Prateek</span><span className="text-[#48b5c4]">Dental Care</span></span>
                  </Link>
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={closeMenu}
                    className="flex h-10 w-10 items-center justify-center text-white"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
                  <Link href="/" onClick={closeMenu} className={`${navLinkClass} ${!isServicesPage && !isGalleryPage ? 'text-[#48b5c4]' : ''}`}>
                    Home
                  </Link>
                  <Link href="/services" onClick={closeMenu} className={`${navLinkClass} ${isServicesPage ? 'text-[#48b5c4]' : ''}`}>
                    Services
                  </Link>
                  <Link href="/gallery" onClick={closeMenu} className={`${navLinkClass} ${isGalleryPage ? 'text-[#48b5c4]' : ''}`}>
                    Gallery
                  </Link>
                  <AutoScrollLink href="/#about" onClick={closeMenu} className={navLinkClass}>
                    About
                  </AutoScrollLink>
                  <AutoScrollLink href="/#benefits" onClick={closeMenu} className={navLinkClass}>
                    Benefits
                  </AutoScrollLink>
                  <AutoScrollLink
                    href="/#consultation"
                    onClick={closeMenu}
                    className="mt-4 inline-block rounded-full bg-[#48b5c4] px-8 py-3.5 text-sm font-medium text-white shadow-lg transition-colors hover:bg-[#3da3b1]"
                  >
                    Book Appointment
                  </AutoScrollLink>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
