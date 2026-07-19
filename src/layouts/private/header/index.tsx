import React from 'react';
import Link from 'next/link';
import appConfig from '@/constants/site';
import { Sparkles } from 'lucide-react';
import { BurgurButton } from '../navbar/burgur-button';
import { NotificationsDropdown } from '../navbar/notifications';

const Header = () => {
  return (
    <nav className="flex h-16 w-full items-center gap-2 border-b px-4">
      <div className="md:hidden">
        <BurgurButton />
      </div>
      {/* Left Content */}
      <Link href="/" className="flex flex-1 select-none items-center gap-1">
        <Sparkles className="h-4 w-4 text-lavender-frost" />
        <span className="bg-linear-to-r from-lavender-frost to-periwinkle-glow bg-clip-text font-light text-transparent">
          {appConfig.short_name}
        </span>
      </Link>
      <div className="flex w-fit items-center justify-end">
        <NotificationsDropdown />
      </div>
    </nav>
  );
};
export default Header;
