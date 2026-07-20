import React from 'react';
import Shorcuts from './cards/shorcuts';
import StorageCard from './cards/storage';
import UIView from '@shared/uikit/UIView';
import { Tabs, TabsList, TabsTab, TabsPanel } from '@shared/ui/tabs';
import { Frame, FrameItem } from '@features/studio/ui/frame';
import { KeyboardLineDuotoneIcon, DatabaseLineDuotoneIcon } from '@solar-icons/react';

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
                <KeyboardLineDuotoneIcon className="h-4 w-4" />
                Shorcuts
              </UIView>
            </TabsTab>
            <TabsTab
              value="storage"
              className="flex-1 items-center justify-center"
            >
              <UIView className="flex items-center gap-1">
                <DatabaseLineDuotoneIcon className="h-4 w-4" />
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
