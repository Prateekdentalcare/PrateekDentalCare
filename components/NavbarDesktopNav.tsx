import React from 'react';
import AutoScrollLink from './AutoScrollLink';
import ActiveRouteLink from './ActiveRouteLink';

export default function NavbarDesktopNav() {
  return (
    <>
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-2 bg-white/20 backdrop-blur-md rounded-full p-1 border border-white/10">
        <ActiveRouteLink
          href="/"
          activeWhen={['/']}
          activeClassName="bg-white text-gray-900 shadow-sm"
          inactiveClassName="text-white hover:bg-white/10"
          className="px-6 py-2 rounded-full text-xs font-medium transition-colors"
        >
          Home
        </ActiveRouteLink>
        <AutoScrollLink href="/#about" className="text-white hover:bg-white/10 px-6 py-2 rounded-full text-xs font-medium transition-colors">About</AutoScrollLink>
        <AutoScrollLink href="/#benefits" className="text-white hover:bg-white/10 px-6 py-2 rounded-full text-xs font-medium transition-colors">Benefits</AutoScrollLink>
        <ActiveRouteLink
          href="/services"
          activeWhen={['/services']}
          activeClassName="bg-white text-gray-900 shadow-sm"
          inactiveClassName="text-white hover:bg-white/10"
          className="px-6 py-2 rounded-full text-xs font-medium transition-colors"
        >
          Services
        </ActiveRouteLink>
        <ActiveRouteLink
          href="/gallery"
          activeWhen={['/gallery']}
          activeClassName="bg-white text-gray-900 shadow-sm"
          inactiveClassName="text-white hover:bg-white/10"
          className="px-6 py-2 rounded-full text-xs font-medium transition-colors"
        >
          Gallery
        </ActiveRouteLink>
      </div>

      <AutoScrollLink
        href="/#consultation"
        className="hidden lg:inline-flex bg-[#48b5c4] text-white px-6 py-2.5 rounded-full text-xs font-medium hover:bg-[#3da3b1] transition-colors shadow-sm"
      >
        Booking
      </AutoScrollLink>
    </>
  );
}
