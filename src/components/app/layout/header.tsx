'use client';

import React from 'react';
import { Chip, Tooltip } from '@nextui-org/react';
import UIDivider from '@/ui-kit/source/UIDivider';
import UIButton from '@/ui-kit/source/UIButton/button';
import UIIconButton from '@/ui-kit/source/UIButton/icon';
import UIButtonGroup from '@/ui-kit/source/UIButtonGroup';
import UIView from '@/ui-kit/source/UIView';
import UndoIcon from '@/ui-kit/icons/UndoIcon';
import RedoIcon from '@/ui-kit/icons/RedoIcon';
import CloudCheckIcon from '@/ui-kit/icons/CloudCheckIcon';
import BookmarkIcon from '@/ui-kit/icons/BookmarkIcon';
import { headerIcon } from '@/components/style/header';
import useExport from './useExport';
import appConfig from '@/constants/site';
import TitleChangerComponent from './edit-title';
import IonChevronBack from '@/ui-kit/icons/header/IonChevronBack';
import SolarCrownBoldDuotone from '@/ui-kit/icons/header/SolarCrownBoldDuotone';
import { BitcoinIconsMagicWandFilled } from '@/ui-kit/icons/BitcoinIconsMagicWandFilled';

const AppHeader = () => {
  const { isLoading, onExport } = useExport();
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
          <IonChevronBack className={headerIcon()} />
        </UIIconButton>
        <UIView className={'flex flex-col'}>
          <UIView className="flex gap-2 items-center">
            <h4 className="flex items-center gap-1 text-lg text-default-900">
              Untitle code snippet
              <TitleChangerComponent />
            </h4>
            <UIView className="">
              <Chip size="sm" variant="dot" color="success">
                Introducing {appConfig.version}
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
          startContent={<BitcoinIconsMagicWandFilled className={'h-5 w-5'} />}
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
        <Tooltip size="sm" placement="bottom" content="Unlock premium features">
          <UIButton
            size="sm"
            className="min-w-unit-5"
            radius="sm"
            variant="flat"
            isIconOnly
          >
            <SolarCrownBoldDuotone />
          </UIButton>
        </Tooltip>

        <UIButton
          isLoading={isLoading}
          onPress={onExport}
          size="sm"
          variant="flat"
          radius="sm"
        >
          Save & Export
        </UIButton>
      </UIView>
    </UIView>
  );
};
export default AppHeader;
