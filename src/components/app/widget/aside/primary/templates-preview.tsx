import React from 'react';
import { templates } from './templates';
import CodingLines from './coding-lines';
import UIView from '@/ui-kit/source/UIView';
import { Card, tv } from '@nextui-org/react';
import useSlideEditor from '@/store/hooks/use-editor';
import backgroundPurify from '@/utils/background-purify';

type CardProps = {
  background?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const template = tv({
  slots: {
    base: 'flex-1 flex flex-col gap-2',
    container:
      'flex flex-col flex-1 min-h-44 rounded-xl p-10 relative overflow-hidden',
    card: 'h-fit min-w-36 backdrop-blur-lg flex flex-col overflow-hidden justify-between rounded-lg bg-black bg-opacity-50',
  },
});

const { base, container, card } = template();

const TemplatesPreview = () => {
  const { currentSlide } = useSlideEditor();

  const background = React.useMemo(() => {
    return backgroundPurify(
      currentSlide?.background?.type!,
      currentSlide?.background?.properties
    );
  }, [currentSlide?.background]);

  return (
    <UIView className={base()}>
      {templates.map(({ codeHeader }, index) => (
        <Item
          key={index}
          style={{
            transition: '100ms ease-in',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            background,
          }}
        >
          {codeHeader}
        </Item>
      ))}
    </UIView>
  );
};
export default TemplatesPreview;

const Item = ({ children, ...rest }: CardProps) => {
  return (
    <Card
      isPressable
      className="relative flex flex-col overflow-hidden bg-black bg-opacity-50 w-full"
      as={'div'}
    >
      <UIView className={container()} {...rest}>
        <UIView className={card()}>
          {children}
          <CodingLines />
        </UIView>
      </UIView>
    </Card>
  );
};
