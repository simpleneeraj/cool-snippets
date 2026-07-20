/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@shared/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@shared/ui/menu';

type Props = {
  session?: any;
};
export const UserDropdown = ({ session }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full outline-none">
        <Avatar className="size-8">
          <AvatarImage src={session?.image as string} />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" aria-label="User menu actions">
        <DropdownMenuItem className="flex w-full flex-col items-start justify-start">
          <p>Signed in as</p>
          <p>{session?.email}</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive">
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
