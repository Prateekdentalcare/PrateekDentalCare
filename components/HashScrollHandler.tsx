'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const target = document.getElementById(hash);
    if (!target) return;

    const frame = window.requestAnimationFrame(() => {
      const top = target.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: 'smooth' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
