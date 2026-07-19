'use client';

import React from 'react';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/app-kit/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/app-kit/ui/sheet';

export default function PreviewHeader() {
  return (
    <nav className="flex h-16 w-full items-center gap-2 border-b bg-background/80 px-4 backdrop-blur-md backdrop-saturate-150 sm:px-6">
      {/* Left Content */}
      <div className="flex flex-1 items-center gap-2">
        <span className="size-6 rounded-full bg-foreground text-background" />
        <span className="text-sm font-medium">Swift Code</span>
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:flex">
        <Button
          render={<Link href="/studio" />}
          className="rounded-full bg-foreground font-medium text-background"
        >
          Get Started
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
            <SheetTitle>Swift Code</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-1 px-6 pb-6">
            <SheetClose
              render={<Link href="/studio" />}
              className={cn(
                buttonVariants({ variant: 'default' }),
                'w-full bg-foreground text-background',
              )}
            >
              Get Started
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
