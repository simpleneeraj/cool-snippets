'use client';

import React from 'react';
import { Chip, Tooltip } from '@nextui-org/react';
import UIDivider from '@/ui-kit/source/UIDivider';
import UIButton from '@/ui-kit/source/UIButton/button';
import UIIconButton from '@/ui-kit/source/UIButton/icon';
import UIButtonGroup from '@/ui-kit/source/UIButtonGroup';
import UIView from '@/ui-kit/source/UIView';
import { headerIcon } from '@/components/style/header';
import appConfig from '@/constants/site';
import TitleChangerComponent from './edit-title';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import ExportDropdown from './export';

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
          <Icon
            icon={'solar:alt-arrow-left-line-duotone'}
            className={headerIcon()}
          />
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
              <Icon
                icon={'solar:cloud-check-bold-duotone'}
                className={headerIcon()}
              />
            </span>
          </p>
        </UIView>
      </UIView>
      <UIView className={'flex items-center gap-1'}>
        <UIButtonGroup size="sm">
          <Tooltip size="sm" placement="bottom" content="Undo (⌘⇧Z)">
            <UIIconButton isIconOnly>
              <Icon
                icon={'solar:undo-left-round-bold-duotone'}
                className={headerIcon({
                  sizes: 'md',
                })}
              />
            </UIIconButton>
          </Tooltip>
          <UIDivider orientation="vertical" />
          <Tooltip size="sm" placement="bottom" content="Redo (⌘⇧Y)">
            <UIIconButton isIconOnly>
              <Icon
                icon={'solar:undo-right-round-bold-duotone'}
                className={headerIcon({
                  sizes: 'md',
                })}
              />
            </UIIconButton>
          </Tooltip>
        </UIButtonGroup>

        <UIButton
          size="sm"
          variant="flat"
          radius="sm"
          startContent={
            <Icon
              icon={'solar:code-line-duotone'}
              className={headerIcon({
                sizes: 'md',
              })}
            />
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
        </UIButton>
        <Tooltip size="sm" placement="bottom" content="Unlock premium features">
          <UIButton
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
          </UIButton>
        </Tooltip>

        <ExportDropdown />
      </UIView>
    </UIView>
  );
};
export default AppHeader;
