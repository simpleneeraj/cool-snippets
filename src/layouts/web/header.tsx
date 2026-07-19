'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon } from 'lucide-react';
import { cn } from '@shared/lib/utils';
import appConfig from '@shared/config/site';
import { Button, buttonVariants } from '@shared/ui/button';
import { Separator } from '@shared/ui/separator';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@shared/ui/sheet';
import { Sparkles } from 'lucide-react';
import { AltArrowRightLineDuotoneIcon } from '@solar-icons/react';
import publicLayout from '../constants/public';

const menuItems = publicLayout.header?.links ?? [];

const Brand = () => (
  <span className="flex select-none items-center gap-1">
    <Sparkles className="h-4 w-4 text-lavender-frost" />
    <span className="bg-linear-to-r from-lavender-frost to-periwinkle-glow bg-clip-text font-light text-transparent">
      {appConfig.short_name}
    </span>
  </span>
);

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex h-16 w-full items-center gap-2 border-b bg-background/80 px-4 backdrop-blur-md backdrop-saturate-150 sm:px-6">
      {/* Brand */}
      <Link href="/" className="flex flex-1 items-center">
        <Brand />
      </Link>

      {/* Desktop menu */}
      <div className="hidden items-center gap-6 md:flex">
        {menuItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            aria-current={pathname === href ? 'page' : undefined}
            className={cn(
              'text-sm transition-colors',
              pathname === href
                ? 'bg-linear-to-r from-lavender-frost to-periwinkle-glow bg-clip-text text-transparent'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden flex-1 justify-end md:flex">
        <Button
          render={<Link href="/studio" />}
          className="rounded-full"
        >
          Get Started
          <AltArrowRightLineDuotoneIcon className="size-5" />
        </Button>
      </div>

      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger
          render={<Button size="icon" variant="ghost" className="md:hidden" />}
          aria-label="Open menu"
        >
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <Brand />
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-1 px-6 pb-6">
            <SheetClose
              render={<Link href="/studio" />}
              className={cn(buttonVariants({ variant: 'default' }), 'mb-4 w-full')}
            >
              Get Started
            </SheetClose>
            {menuItems.map(({ label, href }, index) => (
              <React.Fragment key={label}>
                <SheetClose
                  render={<Link href={href} />}
                  className="w-full py-2 text-start text-muted-foreground hover:text-foreground"
                >
                  {label}
                </SheetClose>
                {index < menuItems.length - 1 && (
                  <Separator className="opacity-50" />
                )}
              </React.Fragment>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
