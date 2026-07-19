'use client';

import React from 'react';
import UIView from '@/app-kit/source/UIView';
import Topbar from '@/components/section/topbar';
import { scrollToTarget } from '@/utils/elements';
import { Input } from '@/app-kit/ui/input';
import { Textarea } from '@/app-kit/ui/textarea';
import UIAuraBox from '@/app-kit/components/UIAuraBox';
import UIButton from '@/app-kit/source/UIButton/button';
import { UIAnimatedButton } from '@/app-kit/components/UIAnimatedButton';
import { MynauiChevronDownWaves } from '@/app-kit/icons/MynauiChevronDownWaves';

type HeroSectionProps = object;

const IssuesReportClient: React.FC<HeroSectionProps> = ({}) => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);
  };
  return (
    <UIView className="flex flex-col relative">
      <Topbar
        title="Report an Issue"
        description="Found a bug or want to suggest something better? We’d love to hear from you!"
        startContent={
          <UIAnimatedButton
            duration={2}
            className="flex items-center gap-2 text-sm"
            onClick={() => scrollToTarget('report-form-section', 100)}
          >
            Submit a Report
            <MynauiChevronDownWaves className="flex-none h-5 w-5" />
          </UIAnimatedButton>
        }
      />

      <UIAuraBox
        id="report-form-section"
        className="z-50 relative mx-auto w-full px-2 max-w-(--breakpoint-sm) p-4 overflow-hidden sm:overflow-visible my-4 sm:my-16"
      >
        <form className="w-full flex flex-col gap-3" onSubmit={onSubmit}>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="e.g. john.doe@example.com"
            />
            <p className="text-xs text-muted-foreground">
              We&apos;ll use this to contact you if needed.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium">
              Issue Description
            </label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Write your issue or feedback clearly and concisely..."
            />
            <p className="text-xs text-muted-foreground">
              Explain what went wrong or how we can improve.
            </p>
          </div>

          <div className="w-full flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
            {/* <Checkbox
              size="sm"
              classNames={{
                label: 'text-xs',
                wrapper: 'after:bg-periwinkle-glow max-w-full',
              }}
            >
              I agree to the{' '}
              <Link
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-periwinkle-glow transition"
              >
                Terms
              </Link>
            </Checkbox> */}

            <UIButton type="submit" size="sm">
              {' '}
              Submit Report
            </UIButton>
          </div>
        </form>
      </UIAuraBox>
    </UIView>
  );
};

export default IssuesReportClient;
