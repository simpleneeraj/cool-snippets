import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import { Input, Link } from '@nextui-org/react';
import UISlider from '@/ui-kit/source/UISlider';
import UIButton from '@/ui-kit/source/UIButton/button';
import { Frame, FrameItem } from '@/components/elements/frame';
import ChevronRightIcon from '@/ui-kit/icons/ChevronRightIcon';

type Props = {
  openAspectRatio: () => void;
  openBackgrounds: () => void;
};

const CanvasScreen = ({ openAspectRatio, openBackgrounds }: Props) => {
  return (
    <Frame title="CANVAS">
      <FrameItem>
        <UIView className="flex gap-3 flex-col w-full">
          <UIButton
            fullWidth
            size={'lg'}
            radius={'md'}
            variant={'flat'}
            onPress={openAspectRatio}
            className={'px-2 justify-start text-left'}
          >
            <UIView className="w-full flex items-center justify-between">
              <UIView className="flex flex-col">
                <span className="text-tiny text-default-400">3:4</span>
                <h4 className="text-small text-default-500">900 x 600</h4>
              </UIView>
              <UIView>
                <ChevronRightIcon />
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
        <Link
          size="sm"
          onPress={openBackgrounds}
          className="cursor-pointer select-none"
        >
          View
        </Link>
      </FrameItem>
    </Frame>
  );
};
export default CanvasScreen;
