import React from 'react';
import state from '@/json/state.json';
import backgroundPurify from '@/utils/background-purify';
import templatesData from '@/json/templates.json';
import IOSTermainal from '@/components/app/widget/code/templates/ios-terminal';
import UnixNeon from '@/components/app/widget/code/templates/unix-neon';
import WindowsTen from '@/components/app/widget/code/templates/windows-terminal';
import CodingLines from './coding-lines';
import { HeaderVariants } from '@/typings/templates';
import { trafficLights, unixColors } from '../../code/templates/colors';
import { tv } from '@nextui-org/react';
import UIView from '@/ui-kit/source/UIView';

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
