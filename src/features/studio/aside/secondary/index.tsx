import React from 'react';
import { keepSelectionProps } from '@features/studio/selection-manager';
import dynamic from 'next/dynamic';
import NotFound from './not-found';
import { useSegment } from '@features/studio/store/segment';
import UIView from '@shared/uikit/UIView';
import { SEGMENT_SCREEN } from '@features/studio/model/enums';
import { motion, AnimatePresence, easeInOut } from 'motion/react';
import { Frame, FrameFooter, FramePanel } from '@shared/ui/frame';
import ResetAllButton from './reset-store';
import { Tooltip, TooltipPopup, TooltipTrigger } from '@shared/ui/tooltip';
import { Button } from '@shared/ui/button';
import appConfig from '@shared/config/site';
import { HeartLinearIcon } from '@solar-icons/react';
import { Github } from '@shared/icons/github';

const EditScreens = dynamic(() => import('@features/studio/panels/edit'));
const BackgroundScreens = dynamic(
  () => import('@features/studio/panels/background'),
);
const SettingsScreen = dynamic(
  () => import('@features/studio/panels/settings'),
);
const IconsScreen = dynamic(() => import('@features/studio/panels/icons'));
const AIScreen = dynamic(() => import('@features/studio/panels/ai'));

function SecondaryAsideWidget() {
  const { segment } = useSegment((state) => state);

  const DynamicScreen = React.useMemo(() => {
    switch (segment.screen) {
      case SEGMENT_SCREEN.EDIT:
        return <EditScreens />;
      case SEGMENT_SCREEN.BACKGROUNDS:
        return <BackgroundScreens />;
      case SEGMENT_SCREEN.SETTINGS:
        return <SettingsScreen />;
      case SEGMENT_SCREEN.AI:
        return <AIScreen />;
      case SEGMENT_SCREEN.ICONS:
        return <IconsScreen />;
      default:
        return <NotFound />;
    }
  }, [segment.screen]);

  return (
    <div
      {...keepSelectionProps}
      className="pointer-events-auto absolute right-2 top-0 h-full py-2"
    >
      <Frame className="w-80 h-full border bg-background/80 backdrop-blur-sm">
        <FramePanel className="layout-fill p-0">
          <AnimatePresence mode="wait">
            <UIView className="layout-fill">
              <motion.div
                key={segment.screen}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="layout-scroll"
                {...easeInOut}
              >
                {DynamicScreen}
              </motion.div>
            </UIView>
          </AnimatePresence>
        </FramePanel>
        <FrameFooter>
          <UIView className="flex items-center justify-between">
            <UIView className="flex items-center gap-1 rounded-full border bg-background/60 p-0.5">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      size="icon-xs"
                      variant="ghost"
                      aria-label="Star on GitHub"
                      className="rounded-full"
                      render={
                        <a
                          href={appConfig.links.repo}
                          target="_blank"
                          rel="noreferrer"
                        />
                      }
                    />
                  }
                >
                  <Github className="size-4" />
                </TooltipTrigger>
                <TooltipPopup>Star on GitHub</TooltipPopup>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      size="icon-xs"
                      variant="ghost"
                      aria-label="Sponsor the project"
                      className="rounded-full"
                      render={
                        <a
                          href={appConfig.links.sponsor}
                          target="_blank"
                          rel="noreferrer"
                        />
                      }
                    />
                  }
                >
                  <HeartLinearIcon className="size-4" />
                </TooltipTrigger>
                <TooltipPopup>Sponsor</TooltipPopup>
              </Tooltip>
            </UIView>

            <UIView className="flex items-center gap-2">
              <ResetAllButton />
            </UIView>
          </UIView>
        </FrameFooter>
      </Frame>
    </div>
  );
}

export default SecondaryAsideWidget;
