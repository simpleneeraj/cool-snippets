'use client';

import React from 'react';
import Link from 'next/link';
import appConfig from '@/constants/site';
import { Button } from '@/app-kit/ui/button';
import { Badge } from '@/app-kit/ui/badge';
import UISpotlight from '@/app-kit/components/UISpotlight';
import { FluentEmojiCrystalBall } from '@/app-kit/icons/layout/FluentEmojiCrystalBall';
import { TokenBrandedCrystal } from '@/app-kit/icons/layout/TokenBrandedCrystal';
import publicLayout from '../constants/public';

type FooterProps = object;

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="mx-auto w-full px-3 relative overflow-hidden border-border py-16 backdrop-blur-lg md:rounded-t-2xl max-w-(--breakpoint-lg) border-0 bg-transparent lg:px-4 xl:px-0">
      <footer>
        <UISpotlight className="-top-40 left-0 md:left-60 md:-top-20" />
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col flex-1 gap-2">
              <div className="flex items-center gap-1">
                <TokenBrandedCrystal className="h-5 w-5" />
                <p className="text-lg font-light bg-linear-to-r from-lavender-frost to-periwinkle-glow text-transparent bg-clip-text">
                  {appConfig.short_name}
                </p>
              </div>
              <p className="text-muted-foreground text-sm font-light leading-normal">
                {appConfig.name} makes it super easy to create and share code
                snippets. You can design and customize snippets in different
                programming languages and share them effortlessly. It’s perfect
                for improving productivity and sharing your work on social
                media.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {publicLayout.footer.socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="icon-sm"
                  variant="ghost"
                  className="rounded-full"
                  render={
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 xl:col-span-2 xl:mt-0">
            {publicLayout.footer.sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className={`${
                  sectionIndex % 2 === 0
                    ? 'md:grid md:grid-cols-2'
                    : 'mt-10 md:mt-0'
                }`}
              >
                <div>
                  <h3 className="text-sm font-medium text-foreground">
                    {section.title}
                  </h3>
                  <ul role="list" className="flex flex-col mt-2.5 gap-2.5">
                    {section?.links?.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-75"
                          href={link?.href}
                        >
                          {link?.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 items-center gap-8 sm:grid-cols-3">
          <Badge variant="outline" className="gap-1.5 rounded-sm">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            All systems operational
          </Badge>
          <a className="flex sm:justify-center">
            <FluentEmojiCrystalBall className="h-10 w-10" />
          </a>
          <p className="text-xs text-muted-foreground sm:text-right">
            ©{appConfig.year} {appConfig.name} | All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
