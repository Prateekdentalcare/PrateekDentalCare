'use client';

import React, { useEffect, useState } from 'react';
import AutoScrollLink from './AutoScrollLink';
import ActiveRouteLink from './ActiveRouteLink';
import { createPortal } from 'react-dom';

export default function NavbarDesktopNav() {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  const wrapperClassName = isScrolled
    ? 'hidden lg:flex fixed top-6 left-1/2 z-[200] -translate-x-1/2 items-center gap-2 rounded-full border border-gray-200/80 bg-gray-900/92 p-1 shadow-[0_18px_40px_rgba(15,23,42,0.22)] backdrop-blur-md transition-colors duration-300'
    : 'hidden lg:flex fixed top-6 left-1/2 z-[200] -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/20 p-1 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-md transition-colors duration-300';

  const inactiveClassName = isScrolled
    ? 'text-white hover:bg-white/10'
    : 'text-white hover:bg-white/10';

  return (
    createPortal(
      <>
        <div className={wrapperClassName}>
          <ActiveRouteLink
            href="/"
            activeWhen={['/']}
            activeClassName="bg-white text-gray-900 shadow-sm"
            inactiveClassName={inactiveClassName}
            className="px-6 py-2 rounded-full text-xs font-medium transition-colors"
          >
            Home
          </ActiveRouteLink>
          <AutoScrollLink href="/#about" className={`${inactiveClassName} px-6 py-2 rounded-full text-xs font-medium transition-colors`}>About</AutoScrollLink>
          <AutoScrollLink href="/#benefits" className={`${inactiveClassName} px-6 py-2 rounded-full text-xs font-medium transition-colors`}>Benefits</AutoScrollLink>
          <ActiveRouteLink
            href="/services"
            activeWhen={['/services']}
            activeClassName="bg-white text-gray-900 shadow-sm"
            inactiveClassName={inactiveClassName}
            className="px-6 py-2 rounded-full text-xs font-medium transition-colors"
          >
            Services
          </ActiveRouteLink>
          <ActiveRouteLink
            href="/gallery"
            activeWhen={['/gallery']}
            activeClassName="bg-white text-gray-900 shadow-sm"
            inactiveClassName={inactiveClassName}
            className="px-6 py-2 rounded-full text-xs font-medium transition-colors"
          >
            Gallery
          </ActiveRouteLink>
        </div>
      </>,
      document.body
    )
  );
}
