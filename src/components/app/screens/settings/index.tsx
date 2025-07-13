import React from 'react';
import Shorcuts from './cards/shorcuts';
import StorageCard from './cards/storage';
import UIView from '@/app-kit/source/UIView';
import { Tab, Tabs } from '@heroui/react';
import { Frame, FrameItem } from '@/components/elements/frame';
import { SolarKeyboardLineDuotone } from '@/app-kit/icons/SolarKeyboardLineDuotone';
import { SolarDatabaseLineDuotone } from '@/app-kit/icons/SolarDatabaseLineDuotone';

const SettingsScreen = () => {
  return (
    <Frame title="Settings">
      <FrameItem divider={false} className="p-2 flex-col">
        <Tabs size="sm" fullWidth>
          {/* <Tab
            title={
              <UIView className="flex items-center gap-1">
                <Icon icon={'solar:user-line-duotone'} />
                Account
              </UIView>
            }
          >
            <Account />
          </Tab> */}
          {/* <Tab
            title={
              <UIView className="flex items-center gap-1">
                <Icon icon={'solar:notification-unread-line-duotone'} />
                Notifications
              </UIView>
            }
          >
            <Notifications />
          </Tab> */}
          <Tab
            title={
              <UIView className="flex items-center gap-1">
                <SolarKeyboardLineDuotone className="h-4 w-4" />
                Shorcuts
              </UIView>
            }
            className="w-full items-center justify-center p-0"
          >
            <Shorcuts />
          </Tab>
          <Tab
            title={
              <UIView className="flex items-center gap-1">
                <SolarDatabaseLineDuotone className="h-4 w-4" />
                Storage
              </UIView>
            }
            className="w-full items-center justify-center p-0"
          >
            <StorageCard />
          </Tab>
        </Tabs>
      </FrameItem>
    </Frame>
  );
};
export default SettingsScreen;
