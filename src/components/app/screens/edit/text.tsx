import React from 'react';
import UIView from '@/ui-kit/source/UIView';
import UIButton from '@/ui-kit/source/UIButton/button';
import UIButtonGroup from '@/ui-kit/source/UIButtonGroup';
import UISegmentedControl from '@/ui-kit/source/UISegmentedControl';
import UISegmentButton from '@/ui-kit/source/UISegmentedControl/button';
import { Frame, FrameItem } from '@/components/elements/frame';
import { Select, SelectItem } from '@nextui-org/react';
import TextAlignLeftIcon from '@/ui-kit/icons/text/TextAlignLeftIcon';
import TextAlignCenterIcon from '@/ui-kit/icons/text/TextAlignCenterIcon';
import TextAlignRightIcon from '@/ui-kit/icons/text/TextAlignRightIcon';
import TextAlignJustifyIcon from '@/ui-kit/icons/text/TextAlignJustifyIcon';
import { TEXT_ALIGN } from '@/typings/enums';
import TextBoldIcon from '@/ui-kit/icons/text/TextBoldIcon';
import TextItalicIcon from '@/ui-kit/icons/text/TextItalicIcon';
import TextUnderlineicon from '@/ui-kit/icons/text/TextUnderlineicon';
import TextStrikeThroughIcon from '@/ui-kit/icons/text/TextStrikeThroughIcon';
import useSlideEditor from '@/store/hooks/use-editor';

const TextScreen = () => {
  const { updateElementProperties } = useSlideEditor();

  return (
    <Frame title="TEXT">
      <FrameItem>
        <UIView className="flex gap-2 flex-col flex-1">
          <UISegmentedControl size="sm" fullWidth>
            <UISegmentButton
              key={TEXT_ALIGN.LEFT}
              aria-label={TEXT_ALIGN.LEFT}
              title={<TextAlignLeftIcon className="h-5 w-5" />}
            />
            <UISegmentButton
              key={TEXT_ALIGN.CENTER}
              aria-label={TEXT_ALIGN.CENTER}
              title={<TextAlignCenterIcon className="h-5 w-5" />}
            />
            <UISegmentButton
              key={TEXT_ALIGN.RIGHT}
              aria-label={TEXT_ALIGN.RIGHT}
              title={<TextAlignRightIcon className="h-5 w-5" />}
            />
            <UISegmentButton
              key={TEXT_ALIGN.JUSTIFY}
              aria-label={TEXT_ALIGN.JUSTIFY}
              title={<TextAlignJustifyIcon className="h-5 w-5" />}
            />
          </UISegmentedControl>
          <UIView className="flex gap-2">
            <UIView className="w-4/6">
              <Select
                size={'sm'}
                labelPlacement="outside"
                className="max-w-xs"
                placeholder="Weight"
              >
                {weights.map((weight) => (
                  <SelectItem
                    aria-label={String(weight)}
                    key={weight}
                    value={weight}
                  >
                    {weight}
                  </SelectItem>
                ))}
              </Select>
            </UIView>
            <UIView className="w-1/3">
              <Select
                size={'sm'}
                labelPlacement="outside"
                className="max-w-xs"
                placeholder="20"
                onChange={(event) => {
                  updateElementProperties({
                    style: {
                      fontSize: event.target.value,
                    },
                  });
                }}
              >
                {Array.from({ length: 8 }).map((_, index) => (
                  <SelectItem
                    key={index}
                    classNames={{
                      title: 'text-tiny',
                    }}
                    value={index + 10}
                    aria-label={`${index}`}
                  >
                    {index + 10} Px
                  </SelectItem>
                ))}
              </Select>
            </UIView>
          </UIView>
          <UIButtonGroup variant="flat" size="sm" fullWidth>
            <UIButton variant={'solid'} color={'primary'}>
              <TextBoldIcon className="h-5 w-5" />
            </UIButton>
            <UIButton>
              <TextItalicIcon className="h-5 w-5" />
            </UIButton>
            <UIButton>
              <TextUnderlineicon className="h-5 w-5" />
            </UIButton>
            <UIButton>
              <TextStrikeThroughIcon className="h-4 w-4" />
            </UIButton>
          </UIButtonGroup>
        </UIView>
      </FrameItem>
      <FrameItem label="Color">{`-`}</FrameItem>
      <FrameItem label="Background">{`-`}</FrameItem>
    </Frame>
  );
};
export default TextScreen;

const weights = Array.from({ length: 9 }, (_, index) => (index + 1) * 100);
