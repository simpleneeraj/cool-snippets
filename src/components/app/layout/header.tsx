'use client';

import React from 'react';
import { Chip, Tooltip } from '@nextui-org/react';
import UIDivider from '@/ui-kit/source/UIDivider';
import UIButton from '@/ui-kit/source/UIButton/button';
import UIIconButton from '@/ui-kit/source/UIButton/icon';
import UIButtonGroup from '@/ui-kit/source/UIButtonGroup';
import { useCapture } from '@/plugins/capture';
import UIView from '@/ui-kit/source/UIView';
import UndoIcon from '@/ui-kit/icons/UndoIcon';
import RedoIcon from '@/ui-kit/icons/RedoIcon';
import CloudCheckIcon from '@/ui-kit/icons/CloudCheckIcon';
import HighlighterIcon from '@/ui-kit/icons/HighlighterIcon';
import BookmarkIcon from '@/ui-kit/icons/BookmarkIcon';
import { headerIcon } from '@/components/style/header';
import { BitcoinIconsMagicWandFilled } from '@/ui-kit/icons/BitcoinIconsMagicWandFilled';

const AppHeader = () => {
  const { captureImage, isLoading } = useCapture();

  return (
    <UIView className={`flex items-center justify-between p-2 pb-0 z-50`}>
      <UIView className={'flex items-center gap-2'}>
        {/* Back Button */}
        <UIIconButton
          size="sm"
          radius="sm"
          variant="light"
          title="Back"
          isIconOnly
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={headerIcon()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
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
                Introducing v1.5.0
              </Chip>
            </UIView>
          </UIView>
          {/* Realtime editing timing */}
          <p className="flex items-center gap-1 text-xs text-default-500">
            Last Edited &middot; June 2022{' '}
            <span className="flex items-center  justify-center">
              <CloudCheckIcon className={headerIcon()} />
            </span>
          </p>
        </UIView>
      </UIView>
      <UIView className={'flex items-center gap-1'}>
        <UIButtonGroup size="sm">
          <Tooltip size="sm" placement="bottom" content="Undo (⌘⇧Z)">
            <UIIconButton isIconOnly>
              <UndoIcon className={headerIcon()} />
            </UIIconButton>
          </Tooltip>
          <UIDivider orientation="vertical" />
          <Tooltip size="sm" placement="bottom" content="Redo (⌘⇧Y)">
            <UIIconButton isIconOnly>
              <RedoIcon className={headerIcon()} />
            </UIIconButton>
          </Tooltip>
        </UIButtonGroup>

        <UIButton
          size="sm"
          variant="flat"
          radius="sm"
          startContent={
            <BitcoinIconsMagicWandFilled className={headerIcon()} />
          }
        >
          Format Code
        </UIButton>

        <UIButton
          size="sm"
          variant="flat"
          radius="sm"
          disabled
          color="secondary"
          startContent={<BookmarkIcon className={headerIcon()} />}
        >
          Save as template
        </UIButton>
        <Tooltip size="sm" placement="bottom" content="Features">
          <UIButton
            size="sm"
            className="min-w-unit-5"
            radius="sm"
            variant="flat"
            isIconOnly
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={headerIcon()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </UIButton>
        </Tooltip>

        <UIButton
          isLoading={isLoading}
          onPress={() =>
            captureImage({
              fileName: 'image',
              imageFormat: 'png',
              pixelRatio: 4,
              isDebug: true,
              fonts: [
                {
                  src: '/fonts/SFMono//SFMonoLigaturized.ttf',
                  fontFamily: 'SFMono',
                },
              ],
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
