import { FrameItem } from '@/components/elements/frame';
import UIButton from '@/ui-kit/source/UIButton/button';
import { Chip, Select, SelectItem } from '@nextui-org/react';
import React from 'react';

import { Card, CardFooter, Image, Button } from '@nextui-org/react';
import UIView from '@/ui-kit/source/UIView';

const BackgroundScreens = () => {
  return (
    <React.Fragment>
      <FrameItem label="Background">
        <UIButton
          size={'sm'}
          radius={'sm'}
          variant={'flat'}
          color={'secondary'}
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
          }
        >
          Random
        </UIButton>
      </FrameItem>

      <FrameItem>
        <Select
          items={backgroundVariants}
          label="Select backgronds"
          placeholder="Images"
          className="max-w-xs"
        >
          {(item) => (
            <SelectItem aria-label={item.label} key={item.value}>
              {item.label}
              {item.new && (
                <Chip
                  variant="faded"
                  size="sm"
                  color="secondary"
                  className="ml-2"
                >
                  New
                </Chip>
              )}
            </SelectItem>
          )}
        </Select>
      </FrameItem>
      <FrameItem>
        <UIView className="flex flex-col gap-2">
          <Card
            fullWidth
            isFooterBlurred
            radius="lg"
            className="border-none w-full"
          >
            <Image
              alt="Woman listing to music"
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Mac components</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                use
              </Button>
            </CardFooter>
          </Card>
          <Card
            fullWidth
            isFooterBlurred
            radius="lg"
            className="border-none w-full"
          >
            <Image
              alt="Woman listing to music"
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Mac components</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                use
              </Button>
            </CardFooter>
          </Card>
          <Card
            fullWidth
            isFooterBlurred
            radius="lg"
            className="border-none w-full"
          >
            <Image
              alt="Woman listing to music"
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Mac components</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                use
              </Button>
            </CardFooter>
          </Card>
          <Card
            fullWidth
            isFooterBlurred
            radius="lg"
            className="border-none w-full"
          >
            <Image
              alt="Woman listing to music"
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Mac components</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                use
              </Button>
            </CardFooter>
          </Card>
        </UIView>
      </FrameItem>
    </React.Fragment>
  );
};
export default BackgroundScreens;

export const backgroundVariants = [
  {
    label: 'Solid',
    value: 'solid',
    description:
      'A timeless and classic choice, representing stability and simplicity.',
    new: false,
  },
  {
    label: 'Gradients',
    value: 'gradients',
    description:
      'A dynamic blend of colors, symbolizing diversity and creativity.',
    new: false,
  },
  {
    label: 'Images',
    value: 'landscapeImage',
    description:
      'Showcase stunning visuals, inspired by breathtaking landscapes.',
    new: false,
  },
  {
    label: 'Mesh Blurry',
    value: 'blurredMesh',
    description:
      'Create an artistic and blurred background, evoking a sense of mystery.',
    new: true,
  },
  {
    label: 'Patterns',
    value: 'patternedBackground',
    description:
      'Add intricate patterns for a unique and visually appealing backdrop.',
    new: true,
  },
];
