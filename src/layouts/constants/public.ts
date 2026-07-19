import { MdiGithub } from '@/app-kit/icons/social/MdiGithub';
import { MdiLinkedin } from '@/app-kit/icons/social/MdiLinkedin';
import { MdiTwitter } from '@/app-kit/icons/social/MdiTwitter';
import appConfig from '@/constants/site';

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
        label: 'Templates',
        href: '/templates',
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
            label: 'Templates',
            href: '/templates',
          },
        ],
      },
      {
        title: 'Learn',
        links: [
          {
            label: 'Blog',
            href: '/blog',
          },
          {
            label: 'Contact',
            href: '/contact',
          },
          {
            label: 'About Us',
            href: '/about-us',
          },
        ],
      },
      {
        title: 'Legal',
        links: [
          {
            label: 'Privacy Policy',
            href: '/legal/privacy',
          },
          {
            label: 'Terms and Conditions',
            href: '/legal/terms',
          },
        ],
      },
      {
        title: 'Company',
        links: [
          {
            label: 'Issues Report',
            href: '/issues-report',
          },

          {
            label: 'Change Log',
            href: '/change-log',
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: MdiGithub,
        href: appConfig.links.repo,
      },
      {
        icon: MdiLinkedin,
        href: 'https://linkedin.com',
      },
      {
        icon: MdiTwitter,
        href: 'https://twitter.com',
      },
    ],
  },
};
export default publicLayout;
