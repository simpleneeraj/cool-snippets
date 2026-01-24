'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import UIView from '@/app-kit/source/UIView';
import Topbar from '@/components/section/topbar';
import { scrollToTarget } from '@/utils/elements';
import UITimelineView from '@/app-kit/components/UITimelineView';
import { UIAnimatedButton } from '@/app-kit/components/UIAnimatedButton';
import { MynauiChevronDownWaves } from '@/app-kit/icons/MynauiChevronDownWaves';

type HeroSectionProps = object;

const ChangeLogClient: React.FC<HeroSectionProps> = ({}) => {
  return (
    <UIView className="flex flex-col">
      <Topbar
        title="Change Log"
        description="Stay up-to-date with all the latest features, fixes, and
                improvements. See how CrystalCode keeps getting better for you!"
        startContent={
          <UIAnimatedButton
            duration={2}
            className="flex items-center gap-2 text-sm text-default-500"
            onClick={() => scrollToTarget('pricing-section', 100)}
          >
            Check Out the Change Log
            <MynauiChevronDownWaves className="flex-none outline-hidden h-5 w-5" />
          </UIAnimatedButton>
        }
      />
      <UIView
        id="details-section"
        className="relative mx-auto w-full px-2 max-w-(--breakpoint-lg)"
      >
        <UIView className={cn('prose-sm dark:prose-invert rounded-xl')}>
          <UITimelineView data={data} />
        </UIView>
      </UIView>
    </UIView>
  );
};

export default ChangeLogClient;

const data = [
  {
    title: '2025',
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Launched AI-powered snippet rewriting, grammar fixing, and tone
          adjustments (like Grammarly). Integrated open-source models with
          streaming output.
        </p>
      </div>
    ),
  },
  {
    title: '2024',
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Introduced snippet folders, sharing, and public galleries. Added
          dark/light theme toggle and full Markdown + code export.
        </p>
      </div>
    ),
  },
  {
    title: '2023',
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Released CrystalCode v1.0 publicly. Key features included instant
          snippet generation, language detection, and image export (HD/4K).
        </p>
      </div>
    ),
  },
  {
    title: '2022',
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Internal beta for code snippet editor with live preview and custom
          fonts/backgrounds. Focused on performance and image rendering
          accuracy.
        </p>
      </div>
    ),
  },
  {
    title: '2021',
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built the initial proof-of-concept for generating beautiful code
          snippets from any programming language. Used a simple syntax
          highlighter + canvas.
        </p>
      </div>
    ),
  },
  {
    title: '2020',
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Conceptualized the idea of a simple, beautiful, and customizable code
          snippet generator. Started from Figma designs and community feedback.
        </p>
      </div>
    ),
  },
];
