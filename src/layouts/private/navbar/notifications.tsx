import React from 'react';
import { Button } from '@shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
} from '@shared/ui/menu';
import { BellRingLineDuotoneIcon } from '@solar-icons/react';

const notifications = [
  {
    key: 'new-snippet',
    title: '📝 New Snippet Added',
    description: 'Check out the latest snippet created by your collaborators.',
  },
  {
    key: 'feedback',
    title: '💬 Feedback Received',
    description: 'Your snippet has received new feedback or comments.',
  },
  {
    key: 'likes',
    title: '👍 Snippet Trending',
    description: 'One of your snippets is trending with new likes!',
  },
];

export const NotificationsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button size="icon" variant="ghost" className="rounded-full" />}
        aria-label="Notifications"
      >
        <BellRingLineDuotoneIcon className="h-6 w-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="relative mb-1 h-[160px] w-full overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Notifications background"
            className="absolute inset-0 z-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1657215373962-d84815b7ddbb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute top-1 z-10 p-2">
            <h4 className="text-xl font-medium text-white/90">Notifications</h4>
          </div>
          <div className="absolute bottom-0 z-10 w-full bg-black/40 p-2">
            <p className="text-xs text-white/60">5 new updates</p>
            <p className="text-xs text-white/60">
              Stay on top of your code notifications.
            </p>
          </div>
        </div>
        <DropdownMenuGroup>
          {notifications.map((item) => (
            <DropdownMenuItem
              key={item.key}
              className="flex flex-col items-start py-2"
            >
              <span className="text-base font-semibold">{item.title}</span>
              <span className="text-xs text-muted-foreground">
                {item.description}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
