/* eslint-disable @next/next/no-img-element */
'use client';
import CardComponent from './elements/card';
import GroupButton from '@/ui/button/group';
import UndoIcon from '@/lib/icons/UndoIcon';
import IconButton from '@/ui/button/icon';
import HRLine from '@/ui/line';
import RedoIcon from '@/lib/icons/RedoIcon';
import DownloadOutline from '@/lib/icons/DownloadOutline';
import Keyboard from '@/lib/icons/Keyboard';
import CheckmarkICloud from '@/lib/icons/CheckmarkICloud';
import EllipsisHorizontal from '@/lib/icons/EllipsisHorizontal';
import UIButtonGroup from '@/ui-kit/source/UIButtonGroup';
import UIButton from '@/ui-kit/source/UIButton';
import UILine from '@/ui-kit/source/UILine';
import UIActivityIndicatorView from '@/ui-kit/source/UIActivityIndicatorView';
import UIView from '@/ui-kit/source/UIView';
import UISwitch from '@/ui-kit/source/UISwitch';
import React from 'react';
import Switch from '@/ui/switch';
import UITextField from '@/ui-kit/source/UITextField';
import SearchIcon from '@/lib/icons/SearchIcon';
import { motion } from 'framer-motion';
import { useState } from 'react';
import clsx from 'clsx';
import UISegmentedControl from '@/ui-kit/source/UISegmentedControl';
import UISegmentButton from '@/ui-kit/source/UISegmentedControl/button';

const App = () => {
  const [state, setState] = React.useState(false);
  const [segmentState, setSegmentState] = React.useState('Tab 1');

  return (
    <div className="w-full antialiased">
      <header className="sticky top-0 z-30 h-[72px] bg-neutral-900/50 backdrop-blur backdrop-filter">
        <div className="mx-auto max-w-8xl xl:px-8">
          <div className="flex items-center justify-between border-b border-gray-800 px-4 py-5 sm:px-6 lg:px-8 xl:px-0">
            <a className="flex items-center gap-1" aria-label="UI home page">
              <img
                width="32"
                height="32"
                alt="ui-components"
                src="/texture/ios-app-icon-grid.svg"
              />
              <h2>UI Components</h2>
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-8xl">
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="mt-10 sm:mt-24 text-2xl font-semibold text-white sm:text-5xl md:max-w-4xl ">
            Fully accessible{' '}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient text-center sm:text-left">
              UIComponents.
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-xs md:max-w-3xl ">
            iOS in every hand: Unleash the power of design for all.
          </p>
        </div>
      </div>
      <br />
      <div className="w-full mx-auto max-w-8xl">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1">
            <CardComponent name="Icon Button">
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
              </UIView>
            </CardComponent>
            <CardComponent name="Group Button">
              <UIView className="flex gap-1 flex-col">
                <UIButton>Download Text</UIButton>
                <UIButtonGroup>
                  <UIButton
                    disabled
                    variant="icon"
                    className="disabled:bg-transparent"
                  >
                    <UndoIcon size={24} />
                  </UIButton>
                  <UIButton disabled variant="icon" aria-label="emoji">
                    <RedoIcon size={24} />
                  </UIButton>
                </UIButtonGroup>
              </UIView>
              <UIView className="flex gap-1 flex-col">
                <UIButtonGroup transparent>
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
              <UIView className="flex justify-center items-center flex-col gap-1 flex-1">
                <UITextField
                  prefix={<SearchIcon size={16} />}
                  placeholder="Search"
                  onSearch={console.log}
                />
              </UIView>
            </CardComponent>
            <CardComponent name="UISkeleton">
              <UIView className="flex justify-center items-center flex-col gap-1 flex-1">
                <div className="flex animate-pulse">
                  <div className="flex-shrink-0">
                    <span className="w-12 h-12 block bg-gray-200 rounded-full dark:bg-gray-700" />
                  </div>
                  <div className="ms-4 mt-2 w-full">
                    <h3
                      className="h-4 bg-gray-200 rounded-full dark:bg-gray-700"
                      style={{ width: '40%' }}
                    />
                    <ul className="mt-5 space-y-3">
                      <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700" />
                      <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700" />
                      <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700" />
                      <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700" />
                    </ul>
                  </div>
                </div>
              </UIView>
            </CardComponent>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-8xl">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <footer className="flex items-center space-x-2 border-t border-gray-800 pt-10">
            <p className="text-xs font-semibold uppercase leading-5 tracking-wide text-gray-400">
              A project by Simple Neeraj
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default App;
