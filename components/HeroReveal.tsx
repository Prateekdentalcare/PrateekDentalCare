'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

type HeroRevealProps = {
  children: React.ReactNode;
};

export default function HeroReveal({ children }: HeroRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.hero-anim', {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
    });
  }, { scope: containerRef });

  return (
    <section className="p-3" ref={containerRef}>
      {children}
    </section>
  );
}
