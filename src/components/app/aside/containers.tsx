import React from 'react';
import UICard from '@/ui-kit/source/UICard';
import UIView from '@/ui-kit/source/UIView';
import UIIconButton from '@/ui-kit/source/UIButton/icon';
import ControllerSegmentWidget from './widget/controller-segment-widget';

/**
 * Themes and templates
 * @returns
 */
export const PrimaryWidgetContainer = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <UIView className="p-2 h-full z-50 flex flex-col flex-1 max-w-widget overflow-auto">
      <UICard className="flex-1 p-[1px]">
        {/* <UISegmentedControl fullWidth variant="bordered" size="sm">
          <UISegmentButton
            title={
              <div className="flex items-center space-x-1">
                <i className="ki-duotone ki-underlining text-lg">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                </i>
                <span>Terminals</span>
              </div>
            }
          />
          <UISegmentButton
            title={
              <div className="flex items-center space-x-1">
                <i className="ki-duotone ki-color-swatch text-lg">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                  <span className="path4" />
                  <span className="path5" />
                  <span className="path6" />
                  <span className="path7" />
                  <span className="path8" />
                  <span className="path9" />
                  <span className="path10" />
                  <span className="path11" />
                  <span className="path12" />
                  <span className="path13" />
                  <span className="path14" />
                  <span className="path15" />
                  <span className="path16" />
                  <span className="path17" />
                  <span className="path18" />
                  <span className="path19" />
                  <span className="path20" />
                  <span className="path21" />
                </i>
                <span>Themes</span>
              </div>
            }
          />
        </UISegmentedControl> */}
        <UIView className="flex-1 scroll-content overflow-auto">
          {children}
        </UIView>
        <UIView className="bg-default-100 p-2 flex items-center gap-2 justify-center">
          <UIIconButton size="sm" isIconOnly>
            S
          </UIIconButton>
          <UIIconButton size="sm" isIconOnly>
            M
          </UIIconButton>
        </UIView>
      </UICard>
    </UIView>
  );
};

export const SecondryWidgetContainer = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <UIView className="p-2 h-full z-50 flex flex-col flex-1 gap-1 max-w-xs">
      <UICard className="flex-1 overflow-hidden">
        <UIView className="flex-1 scroll-content overflow-auto">
          {children}
        </UIView>
      </UICard>
      <ControllerSegmentWidget />
    </UIView>
  );
};
