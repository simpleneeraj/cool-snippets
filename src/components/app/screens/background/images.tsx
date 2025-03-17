import React from 'react';
import Link from 'next/link';
import UIView from '@/app-kit/source/UIView';
import UIButton from '@/app-kit/source/UIButton/button';
import { Card, CardFooter, Image, Tooltip } from '@heroui/react';
import { FrameItem } from '@/components/elements/frame';
import UIInput from '@/app-kit/source/UIInput';
import SearchIcon from '@/app-kit/icons/SearchIcon';
import { useImmer } from 'use-immer';
import Json from '@/json/images.json';
import UnsplashIcon from '@/app-kit/icons/logo/Unsplash';
import { FluentCropSparkleRegular } from '@/app-kit/icons/FluentCropSparkleRegular';
import UISegmentedControl from '@/app-kit/source/UISegmentedControl';
import UISegmentButton from '@/app-kit/source/UISegmentedControl/button';
import { BackgroundScreenTypes } from './types';
import UIVirtualizeGrid from '@/app-kit/components/UIVirtualizeGrid';
import useDynamicHeight from '@/app-kit/hooks/use-dynamic-height';

enum ImageType {
  POPULAR = 'popular',
  UNSPLASH = 'unsplash',
  PIXABAY = 'pixabay',
}

const imagesSegment = [
  {
    label: 'Popular',
    value: ImageType.POPULAR,
  },
  {
    label: 'Unsplash',
    value: ImageType.UNSPLASH,
  },
  {
    label: 'Pixabay',
    value: ImageType.PIXABAY,
  },
];

const ImagesBackground: React.FC<BackgroundScreenTypes> = ({
  value,
  onChange,
}) => {
  const [ref, height] = useDynamicHeight();
  const calculatedHeight = height - 90;
  const images = Json;
  const [currentImageTab, setCurrentImagetab] = useImmer(ImageType.UNSPLASH);

  return (
    <UIView className="flex flex-col">
      <FrameItem className="py-1">
        <UISegmentedControl
          radius="sm"
          fullWidth
          size="sm"
          selectedKey={currentImageTab}
          onSelectionChange={(value) => setCurrentImagetab(value as ImageType)}
          className="p-0"
        >
          {imagesSegment.map((item) => {
            return (
              <UISegmentButton
                key={item.value}
                title={item.label}
                aria-label={item.label}
                className="p-1 h-auto"
              />
            );
          })}
        </UISegmentedControl>
      </FrameItem>
      <FrameItem className="flex-1 flex flex-col items-baseline sticky top-0 z-50 bg-default-50 bg-opacity-85 backdrop-blur-lg rounded-b-2xl rounded-br-2xl gap-1">
        <UIView className="flex-1 flex items-center gap-1 w-full">
          <UIInput
            size={'sm'}
            labelPlacement={'outside'}
            placeholder={'Search images...'}
            className={'bg-transparent'}
            // onChange={({ target }) => setSearchQuery(target.value)}
            startContent={<SearchIcon className="text-default-400 h-4 w-4" />}
          />
        </UIView>
      </FrameItem>
      <FrameItem divider={false}>
        <UIView className="flex flex-col flex-1 w-full" ref={ref}>
          <UIVirtualizeGrid
            value={value}
            items={images || []}
            height={calculatedHeight}
            emptyContent={
              <UIView className="flex-1 flex flex-col items-center justify-center">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl leading-none text-transparent dark:from-white dark:to-slate-900/10">
                  No items available
                </span>
              </UIView>
            }
            gridCount={1}
          >
            {({ currentItem }) => {
              return (
                <Card
                  fullWidth
                  radius="lg"
                  isFooterBlurred
                  key={currentItem?.id}
                  className="w-full group sm:cursor-pointer"
                >
                  <figure>
                    <Image
                      disableAnimation
                      disableSkeleton
                      removeWrapper
                      alt="Woman listing to music"
                      className="object-cover w-full h-full min-h-40 max-h-52"
                      src={String(currentItem?.urls?.regular)}
                    />
                  </figure>
                  <CardFooter className="transform translate-y-[120%] group-hover:translate-y-0 transition-all justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 mb-1 z-10 p-2">
                    <UIView className="w-full flex items-center justify-between">
                      <UIView className="flex items-center gap-2">
                        <UIButton
                          size="sm"
                          variant="flat"
                          color="default"
                          target={'_blank'}
                          href={currentItem?.urls?.regular}
                          className="text-tiny bg-black/40"
                          onPress={() => onChange?.(currentItem?.urls?.regular)}
                        >
                          {value !== currentItem?.urls?.regular
                            ? 'Use'
                            : 'Used'}
                        </UIButton>
                        <Tooltip content="Magical AI" size="sm">
                          <UIButton
                            size="sm"
                            variant="flat"
                            color="default"
                            target={'_blank'}
                            isIconOnly
                            href={currentItem?.urls?.regular}
                            className="text-tiny bg-black/40"
                          >
                            <FluentCropSparkleRegular />
                          </UIButton>
                        </Tooltip>
                      </UIView>
                      <UIView className="flex items-center gap-2">
                        <UIButton
                          as={Link}
                          size="sm"
                          isIconOnly
                          variant="flat"
                          color="default"
                          target={'_blank'}
                          href={currentItem.urls.regular}
                          className="text-tiny bg-black/40"
                        >
                          <UnsplashIcon />
                        </UIButton>
                      </UIView>
                    </UIView>
                  </CardFooter>
                </Card>
              );
            }}
          </UIVirtualizeGrid>
        </UIView>
      </FrameItem>
    </UIView>
  );
};
export default ImagesBackground;
