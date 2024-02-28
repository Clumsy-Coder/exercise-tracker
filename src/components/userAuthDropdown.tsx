'use client';

import { User, LogIn, LogOut } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

/**
 * Component for signing in or signing out of the application
 */
const UserAuthDropdown = () => {
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='icon'
        >
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {/* If user is NOT logged in */}
        {!session && (
          <DropdownMenuItem
            className='flex cursor-pointer gap-2'
            onClick={() => signIn()}
          >
            <LogIn />
            Login
          </DropdownMenuItem>
        )}
        {/* If user is logged in */}
        {session && (
          <DropdownMenuItem
            className='flex cursor-pointer gap-2'
            onClick={() => signOut()}
          >
            <LogOut />
            Logout
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAuthDropdown;
