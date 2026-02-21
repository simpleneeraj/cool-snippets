import React from 'react';
import UIView from '@/app-kit/source/UIView';
import { Frame } from '@/components/elements/frame';
import aspectRatioArray from '@/json/resize.json';
import { Card, CardBody } from '@heroui/react';

type Resolution = {
  height: number;
  width: number;
};

type AspectRatioScreenProps = {
  value?: Resolution;
  onSelect?: (resolution: Resolution) => void;
};

const AspectRatioScreen = (props: AspectRatioScreenProps) => {
  return (
    <UIView className="layout-scroll grid grid-cols-2 gap-2">
      {aspectRatioArray.map((platform) => (
        <Card
          key={platform.id}
          isHoverable
          isPressable
          onClick={() => props.onSelect?.(platform.resolution)}
          className="border border-default-100"
        >
          <CardBody className="min-h-36 flex items-center justify-center gap-2">
            <UIView className="min-h-20 min-w-20 flex items-center justify-center">
              {/* <Icon
                    radius="none"
                    icon="ph:twitter-logo-duotone"
                    className="h-10 w-10"
                  /> */}
            </UIView>
            <UIView>
              <p className="text-center text-small text-default-500 line-clamp-2">
                {platform.title}
              </p>
              <p className="text-center text-xs text-default-400 line-clamp-1">
                {platform.resolution.width} x {platform.resolution.height} px
              </p>
            </UIView>
          </CardBody>
        </Card>
        // <UIButton
        //   key={platformIndex}
        //   variant="light"
        //   radius="none"
        //   className="justify-between"
        //   onClick={() => props.onSelect?.(platform.resolution)}
        // >
        //   <UIView>
        //     <Image
        //       src={platform.preview_small_url}
        //       className="h-4 w-4 object-cover"
        //     />
        //     {`${platform.title}`}
        //   </UIView>
        //   <UIView>
        //     {`${platform.resolution.height} x ${platform.resolution.width}`}
        //   </UIView>
        // </UIButton>
      ))}
    </UIView>
  );
};

export default AspectRatioScreen;
