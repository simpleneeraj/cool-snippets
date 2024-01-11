'use client';
import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import AppLayout from '@/components/app/layout';
import UIButton from '@/ui-kit/source/UIButton/button';
import UIIconButton from '@/ui-kit/source/UIButton/icon';
import {
  Card,
  CardHeader,
  Autocomplete,
  AutocompleteItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from '@nextui-org/react';
import {
  PrimaryWidgetContainer,
  SecondryWidgetContainer,
} from '@/components/app/aside/containers';
import themes from '@/plugins/codemirror/themes';
import { capitalize } from 'lodash';

const EditorPage = () => {
  return (
    <AppLayout>
      <UIView className={'flex flex-1 overflow-hidden'}>
        <PrimaryWidgetContainer>
          <ul>
            {Array.from({ length: 50 }).map((item, index) => (
              <li key={index}>{index + 1}</li>
            ))}
          </ul>
        </PrimaryWidgetContainer>
        <UIView className={'overflow-auto flex flex-col flex-1'}>
          {/* <Center /> */}
          <UIView className="p-8 flex items-center justify-center">
            <DropdownButton />
          </UIView>
          <UIView className="flex p-4 gap-2 items-center justify-center">
            <UIButton color="primary" variant="flat" className="h-16">
              Layer 1
            </UIButton>
            <UIButton color="secondary" variant="flat" className="h-16">
              Layer 1
            </UIButton>
            <UIButton color="warning" variant="flat" className="h-16">
              Layer 1
            </UIButton>
            <UIButton variant="flat" className="h-16">
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </UIButton>
          </UIView>
        </UIView>
        <SecondryWidgetContainer>
          <App />
        </SecondryWidgetContainer>
      </UIView>
    </AppLayout>
  );
};
export default EditorPage;

function App() {
  return (
    <Card radius="none" className="bg-transparent shadow-none">
      <CardHeader className="flex gap-1 py-1 px-2 bg-default-200">
        <div className="flex-1 flex item-center justify-between">
          <p className="text-small">CANVAS</p>
          <UIButton
            size="sm"
            radius="none"
            variant="light"
            className="p-0 h-auto min-w-fit text-tiny text-default-600"
          >
            Reset
          </UIButton>
        </div>
      </CardHeader>
      <UIView className="p-2">
        <Autocomplete
          labelPlacement="outside"
          size={'sm'}
          defaultItems={themes.map((item, index) => {
            return {
              name: capitalize(item),
              id: index,
            };
          })}
          aria-label="Choose a theme"
          className="max-w-xs"
          variant="flat"
          placeholder="Choose a theme"
        >
          {(item) => (
            <AutocompleteItem startContent="→" key={item.id}>
              {item.name}
            </AutocompleteItem>
          )}
        </Autocomplete>
      </UIView>
    </Card>
  );
}

function DropdownButton() {
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
