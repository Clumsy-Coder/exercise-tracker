'use client';

import { Dumbbell, Menu } from 'lucide-react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
} from '@/components/ui/drawer';
import { siteConfig } from '@/site/config';
import { cn } from '@/lib/utils';
import { links } from '@/utils';
import { useState } from 'react';

// obtained from
// https://github.com/shadcn-ui/taxonomy/blob/main/components/main-nav.tsx
const Navbar = () => {
  // used for opening and closing drawer
  // needed because the drawer needs to close after pressing the link in the drawer
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const segment = useSelectedLayoutSegment();

  return (
    <div>
      <nav className='flex items-center gap-4 md:gap-10'>
        {/* Drawer for mobile screens */}
        <aside className='sm:hidden'>
          <Button
            size='icon'
            variant='ghost'
            onClick={() => setDrawerIsOpen(true)}
          >
            <Menu />
          </Button>
          <Drawer
            open={drawerIsOpen}
            onOpenChange={setDrawerIsOpen}
          >
            <DrawerContent>
              <DrawerHeader>
                <DrawerDescription className='flex flex-col items-center justify-center gap-2'>
                  {links.slice(1).map((item) => (
                    <Link
                      key={`navlink-${item.title}`}
                      href={item.href}
                      className={cn(buttonVariants({ size: 'lg' }), 'h-16 text-xl', 'w-full')}
                      onClick={() => setDrawerIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <Button
                    variant='outline'
                    size='lg'
                  >
                    Close menu
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </aside>
        {/*-------------------------------------------------------------------------------------*/}
        {/* App link  */}
        <Link
          href='/'
          className='flex items-center space-x-2 hover:underline md:flex'
        >
          <Dumbbell className='h-[1.0rem] w-[1.0rem]' />
          <span className='font-bold sm:inline-block'>{siteConfig.name}</span>
        </Link>
        {/*-------------------------------------------------------------------------------------*/}
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
