'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type TreatmentDetailMotionProps = {
  children: React.ReactNode;
  treatmentId: string;
};

export default function TreatmentDetailMotion({
  children,
  treatmentId,
}: TreatmentDetailMotionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.anim-header-text', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    });

    const fadeSections = gsap.utils.toArray<HTMLElement>('.anim-fade-up');
    fadeSections.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        }
      );
    });

    gsap.fromTo(
      '.anim-procedure-step',
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.procedure-steps-container',
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.anim-benefit-item',
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.benefits-list-container',
          start: 'top 80%',
        },
      }
    );
  }, { scope: containerRef, dependencies: [treatmentId] });

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {children}
    </div>
  );
}
