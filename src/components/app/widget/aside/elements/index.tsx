import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import UITooltip from '@/ui-kit/source/UITooltip';
import UIButton from '@/ui-kit/source/UIButton/button';
import { Frame, FrameItem } from '@/components/elements/frame';
import InputBoxIcon from '@/ui-kit/icons/elements/InputBoxIcon';
import TextBoxIcon from '@/ui-kit/icons/elements/TextBoxIcon';
import TerminalIcon from '@/ui-kit/icons/elements/TerminalIcon';
import AddImageIcon from '@/ui-kit/icons/elements/AddImageIcon';

const ElementsScreen = () => {
  return (
    <Frame title="Elements">
      <FrameItem divider={false} className="p-2">
        <UIView className="flex-1 grid grid-cols-5 gap-2">
          {elmArray.map((item, index) => {
            return (
              <UITooltip
                key={index}
                placement="bottom"
                content={item.content}
                color="primary"
              >
                <UIButton
                  size={'lg'}
                  isIconOnly
                  variant={'flat'}
                  aria-label={item.content}
                >
                  <item.icon />
                </UIButton>
              </UITooltip>
            );
          })}
        </UIView>
      </FrameItem>
    </Frame>
  );
};
export default ElementsScreen;

const elmArray = [
  {
    content: 'Add Code',
    icon: TerminalIcon,
  },
  {
    content: 'Add Text',
    icon: TextBoxIcon,
  },
  {
    content: 'Add Input',
    icon: InputBoxIcon,
  },
  {
    content: 'Add Image',
    icon: AddImageIcon,
  },
  {
    content: 'Add Input',
    icon: InputBoxIcon,
  },
];
