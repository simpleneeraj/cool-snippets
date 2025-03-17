'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import Section from '@/components/section';
import UIView from '@/app-kit/source/UIView';
import FaqSection from '@/components/home/faq';
import Topbar from '@/components/section/topbar';
import { scrollToTarget } from '@/utils/elements';
import ContactSection from '@/components/contact/grids';
import { UIAnimatedButton } from '@/app-kit/components/UIAnimatedButton';

type ContactProps = object;

const ContactClient: React.FC<ContactProps> = ({}) => {
  return (
    <UIView className="flex flex-col">
      <Topbar
        title="Contact Us"
        description="We’d love to hear from you! Reach out with your questions, feedback, or collaboration ideas."
        startContent={
          <UIAnimatedButton
            duration={2}
            className="flex items-center gap-2 text-sm text-default-500"
            onClick={() => scrollToTarget('CONTACT_FORM', 100)}
          >
            Get in Touch
            <Icon
              className="flex-none outline-none h-5 w-5"
              icon="mynaui:chevron-down-waves"
            />
          </UIAnimatedButton>
        }
      />
      <UIView id="CONTACT_FORM" className="mx-auto w-full px-3 max-w-screen-lg">
        <ContactSection />
      </UIView>
      <Section
        title="FAQs"
        description="Got Questions? We've Got Answers – Everything You Need to Know About Crystal Code!"
      />
      <FaqSection />
    </UIView>
  );
};

export default ContactClient;
