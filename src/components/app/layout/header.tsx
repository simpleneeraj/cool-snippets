'use client';

import React from 'react';
import { Button, Chip, Tooltip } from '@heroui/react';
import UIDivider from '@/app-kit/source/UIDivider';
import UIIconButton from '@/app-kit/source/UIButton/icon';
import UIButtonGroup from '@/app-kit/source/UIButtonGroup';
import UIView from '@/app-kit/source/UIView';
import { headerIcon } from '@/components/style/header';
import appConfig from '@/constants/site';
import TitleChangerComponent from './edit-title';
import { useRouter } from 'next/navigation';
import ExportDropdown from './export';
import ShareWidget from '../share';
import FormatCode from './format';
import { SolarAltArrowLeftLineDuotone } from '@/app-kit/icons/SolarAltArrowLeftLineDuotone';
import { SolarCloudCheckLineDuotone } from '@/app-kit/icons/SolarCloudCheckLineDuotone';
import { SolarUndoLeftRoundLineDuotone } from '@/app-kit/icons/SolarUndoLeftRoundLineDuotone';
import { SolarUndoRightRoundLineDuotone } from '@/app-kit/icons/SolarUndoRightRoundLineDuotone';
import { SolarCrownLineDuotone } from '@/app-kit/icons/SolarCrownLineDuotone';

const AppHeader = () => {
  const router = useRouter();
  return (
    <UIView className={`flex items-center justify-between p-2 pb-0 z-50`}>
      <UIView className={'flex items-center gap-2'}>
        {/* Back Button */}
        <UIIconButton
          size="sm"
          radius="sm"
          variant="flat"
          title="Back"
          isIconOnly
          onPress={router.back}
        >
          <SolarAltArrowLeftLineDuotone className={headerIcon()} />
        </UIIconButton>
        <UIView className={'flex flex-col'}>
          <UIView className="flex gap-2 items-center">
            <h4 className="flex items-center gap-1 text-lg text-default-900">
              Untitle code snippet
              <TitleChangerComponent />
            </h4>
            <UIView className="flex items-center gap-2">
              <Chip size="sm" variant="dot" color="success">
                Introducing {appConfig.version}
              </Chip>
              <Chip size="sm" variant="flat" color="warning">
                {appConfig.environment}
              </Chip>
            </UIView>
          </UIView>
          {/* Realtime editing timing */}
          <p className="flex items-center gap-1 text-xs text-default-500">
            Last Edited &middot; June 2022{' '}
            <span className="flex items-center justify-center">
              <SolarCloudCheckLineDuotone className={headerIcon()} />
            </span>
          </p>
        </UIView>
      </UIView>
      <UIView className={'flex items-center gap-1'}>
        <UIButtonGroup size="sm">
          <Tooltip size="sm" placement="bottom" content="Undo (⌘⇧Z)">
            <UIIconButton isIconOnly>
              <SolarUndoLeftRoundLineDuotone
                className={headerIcon({
                  sizes: 'md',
                })}
              />
            </UIIconButton>
          </Tooltip>
          <UIDivider orientation="vertical" />
          <Tooltip size="sm" placement="bottom" content="Redo (⌘⇧Y)">
            <UIIconButton isIconOnly>
              <SolarUndoRightRoundLineDuotone
                className={headerIcon({
                  sizes: 'md',
                })}
              />
            </UIIconButton>
          </Tooltip>
        </UIButtonGroup>
        <FormatCode />
        <ShareWidget />

        <Tooltip
          size="sm"
          placement="bottom"
          content="Unlock premium features"
        ></Tooltip>
        <ExportDropdown />
        <Button
          size="sm"
          className="flex group min-w-28 items-center font-semibold text-foreground shadow-xs relative overflow-hidden rounded-lg p-px focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary gap-2"
        >
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F54180_0%,#338EF7_50%,#F54180_100%)]" />
          <div className="flex h-full gap-1 w-full cursor-pointer items-center justify-center rounded-lg bg-background/90 group-hover:bg-background/70 transition-background px-3 py-1 text-sm font-medium text-foreground backdrop-blur-3xl">
            <SolarCrownLineDuotone className={headerIcon()} />
            Get Premium
          </div>
        </Button>
      </UIView>
    </UIView>
  );
};
export default AppHeader;

{
  /* <UIButton
            size="sm"
            className="min-w-unit-5"
            radius="sm"
            variant="flat"
            isIconOnly
          >
            <Icon
              icon={'solar:crown-line-duotone'}
              className={headerIcon({
                sizes: 'md',
              })}
            />
          </UIButton> */
}

{
  /* <UIButton
          size="sm"
          variant="flat"
          radius="sm"
          disabled
          color="secondary"
          startContent={
            <Icon
              icon={'solar:bookmark-square-minimalistic-line-duotone'}
              className={headerIcon({
                sizes: 'md',
              })}
            />
          }
        >
          Save as template
        </UIButton> */
}
