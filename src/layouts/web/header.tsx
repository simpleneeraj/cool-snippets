'use client';

import type { NavbarProps } from '@heroui/react';

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
  Divider,
} from '@heroui/react';
import { cn } from '@/lib/utils';
import appConfig from '@/constants/site';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import UserInfo from './user';
import { TokenBrandedCrystal } from '@/app-kit/icons/layout/TokenBrandedCrystal';
import { SolarAltArrowRightLineDuotone } from '@/app-kit/icons/layout/SolarAltArrowRightLineDuotone';
import publicLayout from '../constants/public';

const menuItems = publicLayout.header?.links;

export default function Header(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Navbar
      {...props}
      classNames={{
        base: cn('border-default-100 z-50', {
          'bg-default-200/50 dark:bg-default-100/50': isMenuOpen,
        }),
        wrapper: 'w-full justify-center sm:px-0',
        item: 'hidden md:flex',
      }}
      isMenuOpen={isMenuOpen}
      isBordered
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left Content */}
      <Link href={'/'} className="flex-1">
        <NavbarBrand className="gap-1 select-none">
          <TokenBrandedCrystal className="h-4 w-4" />
          <p className="font-light bg-linear-to-r from-lavender-frost to-periwinkle-glow text-transparent bg-clip-text">
            {appConfig.short_name}
          </p>
        </NavbarBrand>
      </Link>

      {/* Center Content */}
      <NavbarContent justify="center">
        {menuItems.map(({ label, href }) => (
          <NavbarItem key={label} isActive={pathname === href}>
            <Link
              size="sm"
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              className={cn(
                pathname === href
                  ? 'bg-linear-to-r from-lavender-frost to-periwinkle-glow text-transparent bg-clip-text'
                  : 'text-default-500'
              )}
            >
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Content */}
      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarItem className="ml-2 flex! gap-2">
          <SignedIn>
            <UserInfo />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                className="text-default-500"
                radius="full"
                variant="light"
              >
                Login
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button
                className="bg-linear-to-r from-lavender-frost to-periwinkle-glow font-medium text-background"
                color="secondary"
                endContent={
                  <SolarAltArrowRightLineDuotone className="size-5" />
                }
                radius="full"
                variant="flat"
              >
                Get Started
              </Button>
            </SignUpButton>
          </SignedOut>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle className="text-default-400 md:hidden" />

      <NavbarMenu className="top-[calc(var(--navbar-height)-1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50">
        <NavbarMenuItem>
          <SignInButton mode="modal">
            <Button fullWidth variant="faded">
              Sign In
            </Button>
          </SignInButton>
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-4">
          <Button fullWidth className="bg-foreground text-background">
            Get Started
          </Button>
        </NavbarMenuItem>
        {menuItems.map(({ label, href }, index) => (
          <NavbarMenuItem key={`${label}-${index}`}>
            <Link
              className="mb-2 w-full text-default-500"
              href={href}
              size="md"
            >
              {label}
            </Link>
            {index < menuItems.length - 1 && <Divider className="opacity-50" />}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
