import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import appConfig from '@/constants/site';
import footerData from '@/json/layout/public.json';
import { Button, Chip } from '@heroui/react';
import UISpotlight from '@/app-kit/components/UISpotlight';

type FooterProps = object;

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="mx-auto w-full px-3 relative overflow-hidden border-default-200 py-16 backdrop-blur-lg md:rounded-t-2xl max-w-screen-lg border-0 bg-transparent lg:px-4 xl:px-0 z-50">
      <footer>
        <UISpotlight className="-top-40 left-0 md:left-60 md:-top-20" />
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col flex-1 gap-2">
              <div className="flex items-center gap-1">
                <Icon className="h-5 w-5" icon="token-branded:crystal" />
                <p className="text-lg font-light bg-gradient-to-r from-lavender-frost to-periwinkle-glow text-transparent bg-clip-text">
                  {appConfig.short_name}
                </p>
              </div>
              <p className="text-default-500 text-sm font-light leading-normal">
                {appConfig.name} makes it super easy to create and share code
                snippets. You can design and customize snippets in different
                programming languages and share them effortlessly. It’s perfect
                for improving productivity and sharing your work on social
                media.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {footerData.footer.socialLinks.map((social, index) => (
                <Button
                  key={index}
                  isIconOnly
                  size="sm"
                  variant="light"
                  radius="full"
                  as="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" icon={social.icon} />
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 xl:col-span-2 xl:mt-0">
            {footerData.footer.sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className={`${
                  sectionIndex % 2 === 0
                    ? 'md:grid md:grid-cols-2'
                    : 'mt-10 md:mt-0'
                }`}
              >
                <div>
                  <h3 className="text-sm font-medium text-default-900">
                    {section.title}
                  </h3>
                  <ul role="list" className="flex flex-col mt-2.5 gap-2.5">
                    {section?.links?.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          className="text-sm text-default-500 hover:text-default-700 transition-colors duration-75"
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
          <Chip variant="dot" color="success" radius="sm">
            All systems operational
          </Chip>
          <a className="flex sm:justify-center">
            <Icon className="h-10 w-10" icon="fluent-emoji:crystal-ball" />
          </a>
          <p className="text-xs text-default-500 sm:text-right">
            ©{appConfig.year} {appConfig.name} | All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
