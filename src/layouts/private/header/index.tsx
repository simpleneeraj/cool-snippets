import React from 'react';

import { Icon } from '@iconify/react';
import appConfig from '@/constants/site';
import { SignedIn } from '@clerk/nextjs';
import UserInfo from '@/layouts/web/user';
import { BurgurButton } from '../navbar/burgur-button';
import { NotificationsDropdown } from '../navbar/notifications';
import { Navbar, NavbarBrand, NavbarContent } from '@heroui/react';
import Link from 'next/link';

const Header = () => {
  return (
    <Navbar isBordered>
      <NavbarContent className="md:hidden">
        <BurgurButton />
      </NavbarContent>
      {/* Left Content */}
      <Link href={'/'}>
        <NavbarBrand className="gap-1 select-none">
          <Icon className="h-4 w-4" icon={'token-branded:crystal'} />
          <p className="font-light bg-gradient-to-r from-lavender-frost to-periwinkle-glow text-transparent bg-clip-text">
            {appConfig.short_name}
          </p>
        </NavbarBrand>
      </Link>
      <NavbarContent
        justify="end"
        className="w-fit data-[justify=end]:flex-grow-0"
      >
        <NotificationsDropdown />
        <NavbarContent>
          <SignedIn>
            <UserInfo />
          </SignedIn>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
};
export default Header;
