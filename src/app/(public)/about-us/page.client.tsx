'use client';

import React from 'react';
import UIView from '@/app-kit/source/UIView';
import Topbar from '@/components/section/topbar';
import { scrollToTarget } from '@/utils/elements';
import { UIAnimatedButton } from '@/app-kit/components/UIAnimatedButton';
import { MynauiChevronDownWaves } from '@/app-kit/icons/MynauiChevronDownWaves';
import UIAuraBox from '@/app-kit/components/UIAuraBox';

type AboutClientProps = {
  // Define your props here
};

const AboutClient: React.FC<AboutClientProps> = ({}) => {
  return (
    <UIView className="flex flex-col">
      <Topbar
        title="About Us"
        description="Discover who we are, what drives us, and how we're building CrystalCode to empower developers worldwide."
        startContent={
          <UIAnimatedButton
            duration={2}
            className="flex items-center gap-2 text-sm text-default-500"
            onClick={() => scrollToTarget('about-section', 100)}
          >
            Learn More About Us
            <MynauiChevronDownWaves className="flex-none outline-hidden h-5 w-5" />
          </UIAnimatedButton>
        }
      />

      <UIAuraBox
        id="details-section"
        className="relative mx-auto w-full px-2 max-w-(--breakpoint-lg)"
      >
        <div>
          {/* Profile */}
          <div className="flex items-center gap-x-3">
            <div className="shrink-0 text-3xl">
              <img src="https://www.tapback.co/api/avatar/2.webp" />
            </div>

            <div className="grow">
              <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
                Neeraj
              </h1>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Full-Stack Developer
              </p>
            </div>
          </div>
          {/* End Profile */}

          {/* About */}
          <div className="mt-8">
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              I'm a full-stack developer focused on building fast, scalable, and
              modern SaaS products that solve real-world problems.
            </p>

            <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
              I currently work on my own SaaS ventures, handling everything from
              product ideation to launch. I care deeply about clean code, great
              UX, and empowering developers through tools.
            </p>

            <ul className="mt-5 flex flex-col gap-y-3">
              <li className="flex items-center gap-x-2.5">
                <svg
                  className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                </svg>
                <a
                  className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                  href="https://github.com/simpleneeraj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/simpleneeraj
                </a>
              </li>

              <li className="flex items-center gap-x-2.5">
                <svg
                  className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a8.15 8.15 0 0 1-2.36.65A4.11 4.11 0 0 0 21.9 4.9a8.2 8.2 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.73A11.65 11.65 0 0 1 3 5.15a4.1 4.1 0 0 0 1.27 5.47A4.08 4.08 0 0 1 2.8 10v.05a4.1 4.1 0 0 0 3.29 4 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 19.54a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.36 8.36 0 0 0 24 5.64a8.2 8.2 0 0 1-2.46.68z" />
                </svg>
                <a
                  className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                  href="https://twitter.com/iamsimpleneeraj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  twitter.com/iamsimpleneeraj
                </a>
              </li>
            </ul>
          </div>
          {/* End About */}
        </div>
      </UIAuraBox>
    </UIView>
  );
};

export default AboutClient;
