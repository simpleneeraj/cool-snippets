'use client';

import React from 'react';
import { Button, Chip, Tooltip } from '@nextui-org/react';
import UIDivider from '@/ui-kit/source/UIDivider';
import UIButton from '@/ui-kit/source/UIButton/button';
import UIIconButton from '@/ui-kit/source/UIButton/icon';
import UIButtonGroup from '@/ui-kit/source/UIButtonGroup';
import { useCapture } from '@/plugins/capture';
import UIView from '@/ui-kit/source/UIView';
import UndoIcon from '@/ui-kit/icons/undo-icon';
import RedoIcon from '@/ui-kit/icons/redo-icon';
import ICloudCheckIcon from '@/ui-kit/icons/icloud-check-icon';
import HighlighterIcon from '@/ui-kit/icons/highlighter-icon';

const AppHeader = () => {
  const { captureImage, isLoading } = useCapture();

  return (
    <UIView className={`flex items-center justify-between p-2 pb-0 z-50`}>
      <UIView className={'flex items-center gap-2'}>
        {/* Back Button */}
        <UIIconButton size="sm" radius="sm" variant="light" title="Back">
          {'<'}
        </UIIconButton>
        <UIView className={'flex flex-col'}>
          <UIView className="flex gap-2 items-center">
            <h4 className="flex items-center gap-1 text-lg text-default-900">
              Untitle code snippet
              {/* Edit Button to change title accordingly */}
              <span className="flex items-center justify-center cursor-pointer select-none">
                <HighlighterIcon className="h-4 w-4" />
              </span>
            </h4>
            <UIView className="">
              <Chip size="sm" variant="dot" color="success">
                Introducing v1.0.0
              </Chip>
            </UIView>
          </UIView>
          {/* Realtime editing timing */}
          <p className="flex items-center gap-1 text-xs text-default-500">
            Last Edited &middot; June 2022{' '}
            <span className="flex items-center  justify-center">
              <ICloudCheckIcon className="h-4 w-4" />
            </span>
          </p>
        </UIView>
      </UIView>
      <UIView className={'flex items-center gap-1'}>
        <UIButtonGroup size="sm">
          <UIIconButton title="Undo" aria-label="Undo">
            <UndoIcon className="h-3 w-3" />
          </UIIconButton>
          <UIDivider orientation="vertical" />
          <UIIconButton title="Redo" aria-label="redo">
            <RedoIcon className="h-3 w-3" />
          </UIIconButton>
        </UIButtonGroup>
        <UIButton size="sm" variant="flat" radius="sm">
          Templates
        </UIButton>
        <UIButton size="sm" variant="flat" radius="sm">
          1:1 Ratio
        </UIButton>

        <UIButton
          size="sm"
          variant="flat"
          radius="sm"
          disabled
          color="secondary"
        >
          Save as template
        </UIButton>
        <Tooltip size="sm" placement="bottom" content="Notification">
          <Button size="sm" className="min-w-unit-5" radius="sm" variant="flat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </Button>
        </Tooltip>
        {/* <Dropdown>
          <DropdownTrigger>
            <Button variant="flat" radius="sm" size="sm">
              Export
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="faded"
            aria-label="Dropdown menu with description"
          >
            <DropdownSection title="Actions" showDivider>
              <DropdownItem
                onPress={() =>
                  captureImage({
                    fileName: 'image',
                    imageFormat: 'png',
                    pixelRatio: 4,
                  })
                }
                key="new"
                shortcut="⌘N"
                description="Export high quality image"
              >
                {isLoading ? 'Downloading...' : 'Download Image'}
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
        </Dropdown> */}
        <UIButton
          isLoading={isLoading}
          onPress={() =>
            captureImage({
              fileName: 'image',
              imageFormat: 'png',
              pixelRatio: 4,
            })
          }
          size="sm"
          variant="flat"
          radius="sm"
        >
          Export
        </UIButton>
      </UIView>
    </UIView>
  );
};
export default AppHeader;
