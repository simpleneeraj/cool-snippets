'use client';

import React from 'react';
import Section from '@features/marketing/section';
import UIView from '@shared/uikit/UIView';
import FaqSection from '@features/marketing/home/faq';
import Topbar from '@features/marketing/section/topbar';
import { scrollToTarget } from '@shared/lib/elements';
import ContactSection from '@features/marketing/contact/grids';
import { UIAnimatedButton } from '@shared/motion/UIAnimatedButton';
import { AltArrowDownLineDuotoneIcon } from '@solar-icons/react';
import CtaSection from '@features/marketing/home/cta';

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
            className="flex items-center gap-2 text-sm text-muted-foreground"
            onClick={() => scrollToTarget('CONTACT_FORM', 100)}
          >
            Get in Touch
            <AltArrowDownLineDuotoneIcon className="flex-none outline-hidden h-5 w-5" />
          </UIAnimatedButton>
        }
      />
      <UIView
        id="CONTACT_FORM"
        className="mx-auto w-full px-3 max-w-(--breakpoint-lg)"
      >
        <ContactSection />
      </UIView>
      <CtaSection />
    </UIView>
  );
};

export default ContactClient;
