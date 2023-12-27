/* eslint-disable @next/next/no-img-element */
'use client';

import UndoIcon from '@/lib/icons/UndoIcon';
import IconButton from '@/ui/button/icon';
import RedoIcon from '@/lib/icons/RedoIcon';
import DownloadOutline from '@/lib/icons/DownloadOutline';
import Keyboard from '@/lib/icons/Keyboard';
import CheckmarkICloud from '@/lib/icons/CheckmarkICloud';
import EllipsisHorizontal from '@/lib/icons/EllipsisHorizontal';
import UIButtonGroup from '@/ui-kit/source/UIButtonGroup';
import UIButton from '@/ui-kit/source/UIButton';
import UIView from '@/ui-kit/source/UIView';
import UISwitch from '@/ui-kit/source/UISwitch';
import React from 'react';
import UITextField from '@/ui-kit/source/UITextField';
import SearchIcon from '@/lib/icons/SearchIcon';
import UISegmentedControl from '@/ui-kit/source/UISegmentedControl';
import UISegmentButton from '@/ui-kit/source/UISegmentedControl/button';
import CardComponent from '../elements/card';
import UILine from '@/ui-kit/source/UILine';
import UIActivityIndicatorView from '@/ui-kit/source/UIActivityIndicatorView';

const SecondryPreview = () => {
  const [state, setState] = React.useState(false);
  const [segmentState, setSegmentState] = React.useState('Tab 1');

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
      <CardComponent name="Icon Button">
        <UIView className="flex gap-1 flex-col">
          <UIView className="flex items-center gap-1">
            <UIButton variant="icon">
              <DownloadOutline size={20} />
            </UIButton>
            <UIButton variant="icon">
              <Keyboard size={20} />
            </UIButton>
            <UIButton variant="icon">
              <CheckmarkICloud size={24} />
            </UIButton>
            <UIButton variant="icon">
              <EllipsisHorizontal size={20} />
            </UIButton>
            <UIButtonGroup>
              <UIButton variant="fit">
                <UndoIcon size={24} />
              </UIButton>
              <UILine direction="vertical" />
              <UIButton variant="fit" aria-label="emoji">
                <RedoIcon size={24} />
              </UIButton>
            </UIButtonGroup>
          </UIView>
          <UIButton>Download Text</UIButton>
          <UIView className="flex gap-1 flex-col">
            <UIButtonGroup transparent className="gap-1">
              <UIButton variant="icon" aria-label="emoji">
                <UndoIcon size={24} />
              </UIButton>
              <UIButton variant="fit" aria-label="emoji">
                <Keyboard size={20} />
              </UIButton>
              <UIButton variant="outline" aria-label="emoji">
                Rotate
              </UIButton>
              <UIButton variant="clear" aria-label="emoji">
                Reset
              </UIButton>
              <IconButton aria-label="emoji">
                <Keyboard size={20} />
              </IconButton>
            </UIButtonGroup>
          </UIView>
        </UIView>
      </CardComponent>

      <CardComponent name="UISegment">
        <UIView className="flex justify-center items-center flex-col gap-1 flex-1">
          <UISegmentedControl>
            {['Tab 1', 'Tab 2', 'Tab 3'].map((item) => {
              return (
                <UISegmentButton
                  onClick={() => setSegmentState(item)}
                  active={item === segmentState}
                  key={item}
                >
                  {item}
                </UISegmentButton>
              );
            })}
          </UISegmentedControl>
        </UIView>
      </CardComponent>
      <CardComponent name="Button">
        <UIView className="flex gap-1 flex-col">
          <UIButton variant="clear">Clear</UIButton>
          <UIButton variant="outline">Outline</UIButton>
          <UIButton>Default</UIButton>
          <UIButton disabled>Disabled</UIButton>
        </UIView>
      </CardComponent>
      <CardComponent name="Spinner">
        <UIView className="flex items-center justify-center flex-1">
          <UIActivityIndicatorView />
        </UIView>
      </CardComponent>
      <CardComponent name="UISwitch">
        <UIView className="flex justify-center items-center flex-col gap-1 flex-1">
          <UISwitch
            onChecked={(checked) => setState(checked)}
            checked={state}
          />
        </UIView>
      </CardComponent>
      <CardComponent name="UISwitch">
        <UIView className="flex justify-center items-center flex-col gap-2 flex-1">
          <UITextField
            type="number"
            prefix={'$'}
            placeholder="100"
            onSearch={console.log}
            // description={'Enter your amount'}
          />
          <UITextField
            type="text"
            prefix={'😎'}
            placeholder="100"
            onSearch={console.log}
            // description={'Enter your amount'}
          />
          <UITextField
            type="search"
            prefix={<SearchIcon size={16} />}
            placeholder="100"
            onSearch={console.log}
            // description={'Enter your amount'}
          />
        </UIView>
      </CardComponent>
      <CardComponent name="UISkeleton">
        <UIView className="flex justify-center items-center flex-col gap-1 flex-1">
          Soon
        </UIView>
      </CardComponent>
    </div>
  );
};
export default SecondryPreview;
