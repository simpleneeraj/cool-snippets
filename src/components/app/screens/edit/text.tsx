import React from 'react';
import UIView from '@/app-kit/source/UIView';
import { TEXT_ALIGN } from '@/typings/enums';
import { Select, SelectItem } from '@heroui/react';
import UIButton from '@/app-kit/source/UIButton/button';
import UIButtonGroup from '@/app-kit/source/UIButtonGroup';
import TextBoldIcon from '@/app-kit/icons/text/TextBoldIcon';
import { Frame, FrameItem } from '@/components/elements/frame';
import UISegmentedControl from '@/app-kit/source/UISegmentedControl';
import UISegmentButton from '@/app-kit/source/UISegmentedControl/button';
import TextAlignLeftIcon from '@/app-kit/icons/text/TextAlignLeftIcon';
import TextAlignCenterIcon from '@/app-kit/icons/text/TextAlignCenterIcon';
import TextAlignRightIcon from '@/app-kit/icons/text/TextAlignRightIcon';
import TextAlignJustifyIcon from '@/app-kit/icons/text/TextAlignJustifyIcon';
import TextItalicIcon from '@/app-kit/icons/text/TextItalicIcon';
import TextUnderlineicon from '@/app-kit/icons/text/TextUnderlineicon';
import TextStrikeThroughIcon from '@/app-kit/icons/text/TextStrikeThroughIcon';
import useSlideEditor from '@/store/hooks/use-editor';

const TextScreen = () => {
  const { onChangeSlideElement: updateElementProperties } = useSlideEditor();

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
