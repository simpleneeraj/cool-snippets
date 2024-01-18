import React from 'react';
import state from '@/constants/state.json';
import backgroundPurify from '@/utils/background-purify';
import templatesData from '@/constants/data-templates';
import IOSTermainal from '@/components/app/widget/code/templates/ios-terminal';
import UnixNeon from '@/components/app/widget/code/templates/unix-neon';
import WindowsTen from '@/components/app/widget/code/templates/windows-terminal';
import CodingLines from './coding-lines';
import { HeaderVariants } from '@/typings/templates';
import { trafficLights, unixColors } from '../../code/templates/colors';
import { tv } from '@nextui-org/react';
import UIView from '@/ui-kit/source/UIView';
<<<<<<< Updated upstream
import UISegmentedControl from '@/ui-kit/source/UISegmentedControl';
import UISegmentButton from '@/ui-kit/source/UISegmentedControl/button';
import UIButton from '@/ui-kit/source/UIButton/button';
=======
<<<<<<< HEAD
=======
import UISegmentedControl from '@/ui-kit/source/UISegmentedControl';
import UISegmentButton from '@/ui-kit/source/UISegmentedControl/button';
import UIButton from '@/ui-kit/source/UIButton/button';
>>>>>>> 7e60c61bf43ded13157e2338ad06cfb3c6ade1af
>>>>>>> Stashed changes

type CardProps = {
  background?: string;
} & React.PropsWithChildren;

const template = tv({
  slots: {
    base: 'flex flex-col gap-2',
    container: 'grid min-h-44 rounded-xl p-10 relative overflow-hidden',
    card: 'h-fit min-w-36 backdrop-blur-lg flex flex-col overflow-hidden justify-between rounded-lg bg-black bg-opacity-50',
  },
});

const { base, container, card } = template();

const TemplatesPreview = () => {
  const { canvas } = state;
  const background = backgroundPurify(canvas.source);

  return (
    <UIView className={base()}>
      {templates.map(({ codeHeader }, index) => (
        <Card background={background} key={index}>
          {codeHeader}
        </Card>
      ))}
    </UIView>
  );
};
export default TemplatesPreview;

const Card = ({ background, children }: CardProps) => {
  return (
    <UIView className="relative flex flex-col overflow-hidden bg-black bg-opacity-50 rounded-xl">
      <UIView
        style={{
          background,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'all 100ms ease-in',
        }}
        className={container()}
      >
        <UIView className={card()}>
          {children}
          <CodingLines />
        </UIView>
      </UIView>{' '}
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
      <UIView className="p-1">
        <UIView className="flex flex-col gap-1 py-1">
          <span className="text-[10px]">Type</span>
          <UISegmentedControl
            fullWidth
            variant="light"
            size="sm"
            radius="sm"
            className="text-[8px]"
          >
            <UISegmentButton title="Outline" />

            <UISegmentButton title="Solid" />
          </UISegmentedControl>
        </UIView>
        <UIView className="flex flex-col gap-1 py-1">
          <span className="text-[10px]">Colors</span>
          <UIView className="flex items-center gap-2 overflow-auto">
            <UIButton
              size="sm"
              variant="flat"
              radius="sm"
              className={'text-[10px]'}
            >
              <span className="h-4 min-w-4 bg-red-500 rounded-[4px]"></span>
              #000000
            </UIButton>
            <UIButton
              size="sm"
              variant="flat"
              radius="sm"
              className={'text-[10px]'}
            >
              <span className="h-4 min-w-4 bg-yellow-500 rounded-[4px]"></span>
              #000000
            </UIButton>
            <UIButton
              size="sm"
              variant="flat"
              radius="sm"
              className={'text-[10px]'}
            >
              <span className="h-4 min-w-4 bg-green-500 rounded-[4px]"></span>
              #000000
            </UIButton>
          </UIView>
        </UIView>
        <UIView className="flex flex-col gap-1 py-1">
          <span className="text-[10px]">Position</span>
          <UISegmentedControl
            fullWidth
            variant="bordered"
            size="sm"
            radius="sm"
            className="text-[8px] p-0"
          >
            <UISegmentButton
              title={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                  />
                </svg>
              }
            />
            <UISegmentButton title="Left" />
            <UISegmentButton title="Left" />
          </UISegmentedControl>
        </UIView>
      </UIView>
<<<<<<< Updated upstream
=======
>>>>>>> 7e60c61bf43ded13157e2338ad06cfb3c6ade1af
>>>>>>> Stashed changes
    </UIView>
  );
};

const templates = [
  {
    name: 'Nothing',
    value: 'nothing',
    codeHeader: null,
  },
  {
    name: 'ios Traffic Light',
    value: templatesData.ios,
    codeHeader: (
      <IOSTermainal
        colors={trafficLights}
        variant={HeaderVariants.FILLED}
        style={{
          gap: '4px',
          size: '7px',
          padding: '6px',
          borderRadius: '20px',
          background: 'rgba(0,0,0,0.5)',
        }}
      />
    ),
  },
  {
    name: 'ios Traffic Light',
    value: templatesData.unix,
    codeHeader: (
      <UnixNeon
        colors={unixColors}
        variant={HeaderVariants.OUTLINE}
        style={{
          gap: '4px',
          size: '8px',
          padding: '6px',
          background: 'rgba(0,0,0,0.5)',
        }}
      />
    ),
  },

  {
    name: 'Windows Terminal Border',
    value: templatesData.windows,
    codeHeader: (
      <WindowsTen
        style={{
          gap: '4px',
          size: '8px',
          padding: '6px',
          background: 'rgba(0,0,0,0.5)',
        }}
      />
    ),
  },
];
