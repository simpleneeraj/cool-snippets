import React from 'react';
import Shorcuts from './cards/shorcuts';
import StorageCard from './cards/storage';
import UIView from '@/app-kit/source/UIView';
import { Tabs, TabsList, TabsTab, TabsPanel } from '@/app-kit/ui/tabs';
import { Frame, FrameItem } from '@/components/elements/frame';
import { SolarKeyboardLineDuotone } from '@/app-kit/icons/SolarKeyboardLineDuotone';
import { SolarDatabaseLineDuotone } from '@/app-kit/icons/SolarDatabaseLineDuotone';

const SettingsScreen = () => {
  return (
    <Frame title="Settings">
      <FrameItem divider={false} className="p-2 flex-col">
        <Tabs defaultValue="shorcuts">
          <TabsList className="w-full">
            <TabsTab
              value="shorcuts"
              className="flex-1 items-center justify-center"
            >
              <UIView className="flex items-center gap-1">
                <SolarKeyboardLineDuotone className="h-4 w-4" />
                Shorcuts
              </UIView>
            </TabsTab>
            <TabsTab
              value="storage"
              className="flex-1 items-center justify-center"
            >
              <UIView className="flex items-center gap-1">
                <SolarDatabaseLineDuotone className="h-4 w-4" />
                Storage
              </UIView>
            </TabsTab>
          </TabsList>
          <TabsPanel value="shorcuts">
            <Shorcuts />
          </TabsPanel>
          <TabsPanel value="storage">
            <StorageCard />
          </TabsPanel>
        </Tabs>
      </FrameItem>
    </Frame>
  );
};
export default SettingsScreen;
