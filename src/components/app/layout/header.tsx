'use client';

import React from 'react';
import css from '@/styles/app.module.scss';
import RedoIcon from '@/lib/icons/RedoIcon';
import UndoIcon from '@/lib/icons/UndoIcon';
import ChevronBack from '@/lib/icons/ChevronBack';
import { UIIconButton } from '@/ui-kit/source/UIButton';
import CheckmarkICloud from '@/lib/icons/CheckmarkICloud';
import UIButtonGroup from '@/ui-kit/source/UIButtonGroup';
import UIDivider from '@/ui-kit/source/UIDivider';

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from '@nextui-org/react';

const AppHeader = () => {
  return (
    <div className={css.top}>
      <div className={css.title}>
        <div className={css.button} title="Back">
          <ChevronBack size={20} />
        </div>
        <div className={css.text}>
          <h4>Typescript Interface Detailed Guide</h4>
          <p>
            Last Edited &middot; June 2022
            <i>
              <CheckmarkICloud size={16} color="lime" />
            </i>
          </p>
        </div>
      </div>
      <div className={css.controls}>
        <UIButtonGroup>
          <UIIconButton title="Undo" aria-label="Undo">
            <UndoIcon size={20} />
          </UIIconButton>
          <UIDivider orientation="vertical" />
          <UIIconButton title="Redo" aria-label="redo">
            <RedoIcon size={20} />
          </UIIconButton>
        </UIButtonGroup>
        <UIIconButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
        </UIIconButton>
        <UIIconButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </UIIconButton>
        <Model />
      </div>
    </div>
  );
};
export default AppHeader;

function Model() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <UIIconButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </UIIconButton>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
        <DropdownSection title="Actions" showDivider>
          <DropdownItem key="new" shortcut="⌘N" description="Create a new file">
            New file
          </DropdownItem>
          <DropdownItem
            key="copy"
            shortcut="⌘C"
            description="Copy the file link"
          >
            Copy link
          </DropdownItem>
          <DropdownItem
            key="edit"
            shortcut="⌘⇧E"
            description="Allows you to edit the file"
          >
            Edit file
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Danger zone">
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            shortcut="⌘⇧D"
            description="Permanently delete the file"
          >
            Delete file
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
