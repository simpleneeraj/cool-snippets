'use client';
import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';

export default function Home() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Open Menu</Button>
      </DropdownTrigger>
      <DropdownMenu variant="flat" aria-label="Dropdown menu with shortcut">
        <DropdownItem key="new" shortcut="⌘N">
          New file
        </DropdownItem>
        <DropdownItem key="copy" shortcut="⌘C">
          Copy link
        </DropdownItem>
        <DropdownItem key="edit" shortcut="⌘⇧E">
          Edit file
        </DropdownItem>
        <DropdownItem
          key="delete"
          shortcut="⌘⇧D"
          className="text-danger"
          color="danger"
        >
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
