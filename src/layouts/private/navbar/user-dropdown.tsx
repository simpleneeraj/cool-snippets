/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from '@nextui-org/react';
import React from 'react';

type Props = {
  session?: any;
};
export const UserDropdown = ({ session }: Props) => {
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Avatar
            as="button"
            size="sm"
            color="default"
            src={session?.image as string}
          />
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu aria-label="User menu actions" onAction={console.log}>
        <DropdownItem
          key="profile"
          className="flex flex-col justify-start w-full items-start"
          showDivider
        >
          <p>Signed in as</p>
          <p>{session?.email}</p>
        </DropdownItem>
        <DropdownItem key="logout" color="danger" className="text-danger ">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
