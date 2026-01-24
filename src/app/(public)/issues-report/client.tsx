'use client';

import React from 'react';
import UIView from '@/app-kit/source/UIView';
import Topbar from '@/components/section/topbar';
import { scrollToTarget } from '@/utils/elements';
import { Form, Input, Textarea } from '@heroui/react';
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
        <Form className="w-full flex flex-col gap-2" onSubmit={onSubmit}>
          <Input
            size="sm"
            labelPlacement="outside"
            type="email"
            label="Email Address"
            description="We'll use this to contact you if needed."
            placeholder="e.g. john.doe@example.com"
            variant="bordered"
            isRequired
            errorMessage="Please provide a valid email address."
          />

          <Textarea
            size="sm"
            labelPlacement="outside"
            label="Issue Description"
            description="Explain what went wrong or how we can improve."
            placeholder="Write your issue or feedback clearly and concisely..."
            variant="bordered"
            isRequired
            errorMessage="Please enter a valid message."
          />

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
        </Form>
      </UIAuraBox>
    </UIView>
  );
};

export default IssuesReportClient;
