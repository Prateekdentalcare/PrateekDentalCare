'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type AutoScrollLinkProps = LinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    offset?: number;
  };

function scrollToHash(hash: string, offset: number) {
  const target = document.getElementById(hash);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function AutoScrollLink({
  href,
  onClick,
  offset = 120,
  ...props
}: AutoScrollLinkProps) {
  const pathname = usePathname();
  const hrefString = typeof href === 'string' ? href : href.pathname ?? '';

  const [basePath, hash] = hrefString.split('#');
  const normalizedBasePath = basePath || pathname;
  const isSamePageHash = Boolean(hash) && normalizedBasePath === pathname;

  return (
    <Link
      href={href}
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;

        if (isSamePageHash && hash) {
          event.preventDefault();
          scrollToHash(hash, offset);
        }
      }}
    />
  );
}
