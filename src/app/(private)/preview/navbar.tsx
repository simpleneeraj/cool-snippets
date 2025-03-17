'use client';

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
} from '@heroui/react';
import { Icon } from '@iconify/react';

export default function PreviewHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} isBlurred>
      {/* Left Content */}
      <NavbarBrand>
        <div className="rounded-full bg-foreground text-background">
          {/* <AcmeIcon size={34} /> */}
        </div>
        <span className="ml-2 text-small font-medium">Swift Code</span>
      </NavbarBrand>
      {/* Right Content */}
      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarItem className="ml-2 !flex gap-2">
          <Button className="text-default-500" radius="full" variant="light">
            Login
          </Button>
          <Button
            className="bg-foreground font-medium text-background"
            color="secondary"
            endContent={<Icon icon="solar:alt-arrow-right-linear" />}
            radius="full"
            variant="flat"
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle className="text-default-400 md:hidden" />

      <NavbarMenu className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50">
        <NavbarMenuItem>
          <Button fullWidth as={Link} href="/#" variant="faded">
            Sign In
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-4">
          <Button
            fullWidth
            as={Link}
            className="bg-foreground text-background"
            href="/"
          >
            Get Started
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
