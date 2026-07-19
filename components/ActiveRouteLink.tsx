'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ActiveRouteLinkProps = {
  href: string;
  children: React.ReactNode;
  activeWhen?: string[];
  className?: string;
  activeClassName: string;
  inactiveClassName: string;
};

export default function ActiveRouteLink({
  href,
  children,
  activeWhen,
  className = '',
  activeClassName,
  inactiveClassName,
}: ActiveRouteLinkProps) {
  const pathname = usePathname();
  const activePaths = activeWhen ?? [href];
  const isActive = activePaths.includes(pathname);

  return (
    <Link
      href={href}
      className={`${isActive ? activeClassName : inactiveClassName} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
