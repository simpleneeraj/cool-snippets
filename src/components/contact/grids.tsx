import Link from 'next/link';
import appConfig from '@/constants/site';
import FeatureCard from '@/ui-kit/components/UIFeatureCard';
import { tv } from '@nextui-org/react';

type ContactSectionProps = object;

const styles = tv({
  base: '',
  slots: {
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto',
    paragraph: 'text-default-600',
    wrapper: 'text-sm max-w-xs relative z-10 px-10 flex flex-col gap-2',
    link: 'text-transparent bg-clip-text font-semibold bg-gradient-to-r from-lavender-frost to-periwinkle-glow',
  },
});

const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <div className={styles().grid()}>
      {contactMethods.map((method, index) => (
        <FeatureCard key={method.title} {...method} index={index} />
      ))}
    </div>
  );
};

export default ContactSection;

const contactMethods = [
  {
    title: 'Visit Us',
    description: (
      <div className={styles().wrapper()}>
        <p className={styles().paragraph()}>Drop by our office for a chat.</p>
        <Link className={styles().link()} href={appConfig.contact.map}>
          Get Directions
        </Link>
      </div>
    ),
    icon: 'solar:home-2-line-duotone',
  },
  {
    title: 'Call Us',
    description: (
      <div className={styles().wrapper()}>
        <p className={styles().paragraph()}>Reach us directly via phone.</p>
        <Link className={styles().link()} href={appConfig.contact.phone}>
          {appConfig.contact.phone}
        </Link>
      </div>
    ),
    icon: 'solar:phone-calling-rounded-line-duotone',
  },
  {
    title: 'Chat with Us',
    description: (
      <div className={styles().wrapper()}>
        <p className={styles().paragraph()}>
          Need quick help? Start a live chat.
        </p>
        <Link className={styles().link()} href={appConfig.contact.chat}>
          Start Chat
        </Link>
      </div>
    ),
    icon: 'solar:chat-round-unread-line-duotone',
  },
  {
    title: 'Email Us',
    description: (
      <div className={styles().wrapper()}>
        <p className={styles().paragraph()}>
          Got something to share? Write to us.
        </p>
        <Link className={styles().link()} href={appConfig.contact.email}>
          {appConfig.contact.email}
        </Link>
      </div>
    ),
    icon: 'solar:letter-line-duotone',
  },
];
