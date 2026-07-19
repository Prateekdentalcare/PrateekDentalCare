'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AboutUsRevealProps = {
  children: React.ReactNode;
};

export default function AboutUsReveal({ children }: AboutUsRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.about-img', {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
    });

    gsap.from('.about-text', {
      x: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
    });

    gsap.from('.stat-item', {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.stats-container',
        start: 'top 85%',
      },
    });
  }, { scope: containerRef });

  return (
    <section
      id="about"
      ref={containerRef}
      className="scroll-mt-32 px-6 md:px-16 py-8 md:py-16 max-w-[1400px] mx-auto"
    >
      {children}
    </section>
  );
}
