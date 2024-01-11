/* eslint-disable @next/next/no-img-element */
'use client';

import UIButtonGroup from '@/ui-kit/source/UIButtonGroup';
import UIButton from '@/ui-kit/source/UIButton/button';
import UIIconButton from '@/ui-kit/source/UIButton/icon';
import UIView from '@/ui-kit/source/UIView';
import UISwitch from '@/ui-kit/source/UISwitch';
import React from 'react';
import UITextField from '@/ui-kit/source/UITextField';
import UISegmentedControl from '@/ui-kit/source/UISegmentedControl';
import UISegmentButton from '@/ui-kit/source/UISegmentedControl/button';
import CardComponent from '../elements/card';
import UIActivityIndicatorView from '@/ui-kit/source/UIActivityIndicatorView';
import UISlider from '@/ui-kit/source/UISlider';
import UIDivider from '@/ui-kit/source/UIDivider';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';

const SecondryPreview = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
      <CardComponent name="UIButtons">
        <UIView className="flex gap-1 flex-col">
          <UIView className="flex items-center gap-1">
            <UIIconButton>D</UIIconButton>

            <UIIconButton>C</UIIconButton>
            <UIIconButton>E</UIIconButton>
            <UIButtonGroup>
              <UIIconButton>←</UIIconButton>
              <UIDivider orientation="vertical" />
              <UIIconButton aria-label="emoji">→</UIIconButton>
            </UIButtonGroup>
          </UIView>
          <UIButton>Download Text</UIButton>
        </UIView>
      </CardComponent>

      <CardComponent name="UISegment">
        <UIView className="flex justify-center items-center flex-col gap-1 flex-1">
          <UISegmentedControl size="sm">
            {['Colors', 'Gradients', 'Stock Images'].map((item) => {
              return <UISegmentButton key={item} title={item} />;
            })}
          </UISegmentedControl>
          <UISegmentedControl size="md">
            {['🧡', '💛', '💚', '💙', '💜'].map((item) => {
              return <UISegmentButton title={item} key={item} />;
            })}
          </UISegmentedControl>
        </UIView>
      </CardComponent>
      <CardComponent name="Button">
        <UIView className="flex gap-1 flex-col">
          <UIButton variant="light">Clear</UIButton>
          <UIButton variant="bordered">Outline</UIButton>
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
          <UISwitch />
        </UIView>
      </CardComponent>
      <CardComponent name="UISwitch">
        <UIView className="flex justify-center items-center flex-col gap-2 flex-1">
          <UITextField
            size="sm"
            type="number"
            startContent={'$'}
            placeholder="100"
          />
          <UITextField
            size="sm"
            type="text"
            startContent={'😎'}
            placeholder="100"
          />
        </UIView>
      </CardComponent>
      <CardComponent name="UISkeleton">
        <UIView className="flex justify-center items-center flex-col gap-1 flex-1">
          <UISlider
            size="sm"
            step={0.01}
            maxValue={1}
            minValue={0}
            aria-label="Temperature"
            defaultValue={0.2}
            color="foreground"
            classNames={{
              base: 'max-w-md',
              label: 'text-medium',
            }}
          />
          <UISlider
            size="md"
            step={0.01}
            maxValue={1}
            minValue={0}
            aria-label="Temperature"
            defaultValue={0.4}
            className="max-w-md"
            radius="lg"
          />
          <UISlider
            radius="md"
            label="Exposure"
            size="sm"
            step={0.01}
            maxValue={5}
            minValue={-5}
            fillOffset={0}
            defaultValue={1.5}
            className="max-w-md"
            formatOptions={{ signDisplay: 'always' }}
          />
        </UIView>
      </CardComponent>
      <CardComponent name="UIDropdown">
        <UIView className="flex justify-center items-center flex-col gap-1 flex-1">
          <Dropdown>
            <DropdownTrigger>
              <UIButton variant="bordered" className="capitalize">
                Hello
              </UIButton>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              // selectedKeys={selectedKeys}
              // onSelectionChange={setSelectedKeys}
            >
              <DropdownItem key="text">Text</DropdownItem>
              <DropdownItem key="number">Number</DropdownItem>
              <DropdownItem key="date">Date</DropdownItem>
              <DropdownItem key="single_date">Single Date</DropdownItem>
              <DropdownItem key="iteration">Iteration</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </UIView>
      </CardComponent>
    </div>
  );
};
export default SecondryPreview;
