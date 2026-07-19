'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type FeaturesRevealProps = {
  children: React.ReactNode;
};

export default function FeaturesReveal({ children }: FeaturesRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.feature-card', {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });

    gsap.from('.feature-heading', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      },
    });
  }, { scope: containerRef });

  return (
    <section
      id="benefits"
      ref={containerRef}
      className="scroll-mt-32 px-6 md:px-16 py-8 md:py-16 max-w-[1400px] mx-auto"
    >
      {children}
    </section>
  );
}
