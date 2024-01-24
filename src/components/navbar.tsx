'use client';

import { Dumbbell } from 'lucide-react';
import Link from 'next/link';

import { siteConfig } from '@/site/config';
import { NavbarLink } from '@/types';
import { cn } from '@/lib/utils';
import { useSelectedLayoutSegment } from 'next/navigation';

export const links: NavbarLink[] = [
  {
    title: 'Exercise-tracker',
    href: '/',
  },
];

// obtained from
// https://github.com/shadcn-ui/taxonomy/blob/main/components/main-nav.tsx
const Navbar = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <div>
      <nav className='flex items-center gap-6 md:gap-10'>
        {/* App link  */}
        <Link
          href='/'
          className='flex items-center space-x-2 hover:underline md:flex'
        >
          <Dumbbell className='h-[1.0rem] w-[1.0rem]' />
          <span className='font-bold sm:inline-block'>{siteConfig.name}</span>
        </Link>
        {/* Other links */}
        {links.slice(1).map((item) => (
          <Link
            key={`navlink-${item.title}`}
            href={item.href}
            className={cn(
              'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
              item.href.startsWith(`/${segment}`) ? 'text-foreground' : 'text-foreground/60',
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
