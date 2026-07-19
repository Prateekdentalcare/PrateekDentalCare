'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ServicesRevealProps = {
  children: React.ReactNode;
};

export default function ServicesReveal({ children }: ServicesRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.service-left', {
      scale: 0.95,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
    });

    gsap.from('.service-item', {
      x: 30,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-list-container',
        start: 'top 85%',
      },
    });
  }, { scope: containerRef });

  return (
    <section
      id="services"
      ref={containerRef}
      className="px-6 md:px-16 py-8 md:py-16 max-w-[1400px] mx-auto mt-8 border-t border-gray-100"
    >
      {children}
    </section>
  );
}
