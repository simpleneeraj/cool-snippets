'use client';

import UIView from '@/app-kit/source/UIView';
import { keepSelectionProps } from '@/components/app/widget/selection-manager';
import TitleChangerComponent from './edit-title';
import { useRouter } from 'next/navigation';
import ExportDropdown from './export';
import DesignIO from './design-io';
import ShareWidget from '../share';
import BeautifyCode from './beautify-code';
import { AltArrowLeftLineDuotoneIcon } from '@solar-icons/react';
import UIThemeSwitch from '@/app-kit/components/UIThemeSwitch';
import { Button } from '@/app-kit/ui/button';
import { Separator } from '@/app-kit/ui/separator';
import HistoryManager from './history-manager';
import { TooltipProvider } from '@/app-kit/ui/tooltip';
import { SegmentWidget } from '../widget/aside/controller-segment';
import ResizeMenu from './resize-menu';

const AppHeader = () => {
  const router = useRouter();
  return (
    <UIView
      {...keepSelectionProps}
      className={`flex items-center justify-between p-2 z-50`}
    >
      <UIView className={'flex items-center gap-1'}>
        <Button variant={'ghost'} title="Back" onClick={router.back}>
          <AltArrowLeftLineDuotoneIcon />
        </Button>
        <UIView className={'flex flex-col'}>
          <UIView className="flex gap-1 items-center">
            <TitleChangerComponent />
            <ResizeMenu />
          </UIView>
        </UIView>
      </UIView>
      <UIView>
        <SegmentWidget />
      </UIView>
      <UIView className={'flex items-center gap-1'}>
        <TooltipProvider>
          <HistoryManager />
          <Separator orientation="vertical" />
          <BeautifyCode />
          <ShareWidget />
          <Separator orientation="vertical" />
          <DesignIO />
          <ExportDropdown />
          <UIThemeSwitch />
        </TooltipProvider>
      </UIView>
    </UIView>
  );
};
export default AppHeader;
