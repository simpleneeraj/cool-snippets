import { Github } from '@shared/icons/github';
import appConfig from '@shared/config/site';

const publicLayout = {
  header: {
    links: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Features',
        href: '/features',
      },
      {
        label: 'Studio',
        href: '/studio',
      },
    ],
  },
  footer: {
    sections: [
      {
        title: 'Explore',
        links: [
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Features',
            href: '/features',
          },
          {
            label: 'Studio',
            href: '/studio',
          },
        ],
      },
      {
        title: 'Learn',
        links: [
          {
            label: 'About',
            href: '/about-us',
          },
          {
            label: 'Contact',
            href: '/contact',
          },
        ],
      },
      {
        title: 'Project',
        links: [
          {
            label: 'Source Code',
            href: appConfig.links.repo,
          },
          {
            label: 'Report an Issue',
            href: appConfig.contact.issues,
          },
          {
            label: 'Sponsor',
            href: appConfig.links.sponsor,
          },
        ],
      },
    ],
    // Only the GitHub link is real. Placeholder social profiles were removed
    // rather than pointed at the platform home pages.
    socialLinks: [
      {
        icon: Github,
        href: appConfig.links.repo,
      },
    ],
  },
};
export default publicLayout;
