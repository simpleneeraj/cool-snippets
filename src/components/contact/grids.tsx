import Link from 'next/link';
import appConfig from '@/constants/site';
import FeatureCard from '@/app-kit/components/UIFeatureCard';
import { tv } from 'tailwind-variants';
import { Github } from '@/components/icons/github';
import { Home2LineDuotoneIcon, PhoneCallingRoundedLineDuotoneIcon, ChatRoundUnreadLineDuotoneIcon } from '@solar-icons/react';

type ContactSectionProps = object;

const styles = tv({
  base: '',
  slots: {
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto',
    paragraph: 'text-muted-foreground',
    wrapper: 'text-sm max-w-xs relative z-10 px-10 flex flex-col gap-2',
    link: 'text-transparent bg-clip-text font-semibold bg-linear-to-r from-lavender-frost to-periwinkle-glow',
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

// Every channel here is a real, staffed one. There is no phone line, no live
// chat and no office — this is a solo open-source project, and inventing
// support channels it cannot answer is worse than offering none.
const contactMethods = [
  {
    title: 'Report a Bug',
    description: (
      <div className={styles().wrapper()}>
        <p className={styles().paragraph()}>
          Found a bug or have an idea? Everything is tracked in the open.
        </p>
        <Link
          className={styles().link()}
          href={appConfig.contact.issues}
          target="_blank"
          rel="noreferrer"
        >
          GitHub Issues
        </Link>
      </div>
    ),
    icon: Github,
  },
  {
    title: 'Request a Feature',
    description: (
      <div className={styles().wrapper()}>
        <p className={styles().paragraph()}>
          Missing a theme, a language or an export size? Ask for it.
        </p>
        <Link
          className={styles().link()}
          href={appConfig.contact.issues}
          target="_blank"
          rel="noreferrer"
        >
          Open a Request
        </Link>
      </div>
    ),
    icon: ChatRoundUnreadLineDuotoneIcon,
  },
  {
    title: 'Contribute',
    description: (
      <div className={styles().wrapper()}>
        <p className={styles().paragraph()}>
          The source is MIT licensed. Fork it, patch it, send it back.
        </p>
        <Link
          className={styles().link()}
          href={appConfig.links.repo}
          target="_blank"
          rel="noreferrer"
        >
          View the Repository
        </Link>
      </div>
    ),
    icon: Home2LineDuotoneIcon,
  },
  {
    title: 'Support the Project',
    description: (
      <div className={styles().wrapper()}>
        <p className={styles().paragraph()}>
          Cool Snippets is free. Sponsorship is what keeps it that way.
        </p>
        <Link
          className={styles().link()}
          href={appConfig.links.sponsor}
          target="_blank"
          rel="noreferrer"
        >
          Become a Sponsor
        </Link>
      </div>
    ),
    icon: PhoneCallingRoundedLineDuotoneIcon,
  },
];
