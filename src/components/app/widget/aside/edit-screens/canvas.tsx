import { Frame, FrameItem } from '@/components/elements/frame';
import UIButton from '@/ui-kit/source/UIButton/button';
import UISlider from '@/ui-kit/source/UISlider';
import UIView from '@/ui-kit/source/UIView';
import { Input, Link } from '@nextui-org/react';
import React from 'react';

const CanvasScreen = () => {
  return (
    <Frame title="CANVAS">
      <FrameItem>
        <UIView className="flex gap-3 flex-col w-full">
          <UIButton
            radius={'md'}
            className={'px-2 justify-start text-left'}
            fullWidth
            size={'lg'}
            variant={'flat'}
            // onPress={() => setState(true)}
          >
            <UIView className="w-full flex items-center justify-between">
              <UIView className="flex flex-col">
                <span className="text-tiny text-default-400">3:4</span>
                <h4 className="text-small text-default-500">900 x 600</h4>
              </UIView>
              <UIView>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-default-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </UIView>
            </UIView>
          </UIButton>
          <UIView className="flex items-center gap-2">
            <Input
              size="sm"
              variant="faded"
              label="Width"
              placeholder="900"
              labelPlacement="outside"
              endContent="px"
              classNames={{
                base: 'text-small text-default-400',
              }}
            />
            <Input
              size="sm"
              variant="faded"
              label="Height"
              placeholder="600"
              labelPlacement="outside"
              endContent="px"
              classNames={{
                base: 'text-small text-default-400',
              }}
            />
          </UIView>
        </UIView>
      </FrameItem>
      <FrameItem label="Padding">
        <UISlider size="sm" />
      </FrameItem>
      <FrameItem label="Radius">
        <UISlider size="sm" />
      </FrameItem>
      <FrameItem label="Backgrounds">
        <Link size="sm">View</Link>
      </FrameItem>
    </Frame>
  );
};
export default CanvasScreen;
