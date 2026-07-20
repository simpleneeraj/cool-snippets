const appConfig = {
  name: 'Cool Snippets',
  short_name: 'Cool Snippets',
  /** One-line pitch, reused for the hero, OG cards and store listings. */
  tagline: 'Turn code into beautiful, shareable images.',
  /** Canonical meta description — single source for SEO + social cards. */
  description:
    'Cool Snippets turns code into beautiful, shareable images. A free, open-source ray.so and Carbon alternative with 40+ syntax themes, glow and glassmorphism effects, custom backgrounds, and one-click export. No account, no paywall.',
  version: 'v2.0.0',
  environment: 'Beta',
  year: new Date().getFullYear(),
  contact: {
    // Support runs through GitHub Issues — there is no mailbox, phone line or
    // live chat, so none are advertised.
    issues: 'https://github.com/simpleneeraj/cool-snippets/issues',
  },
  snippet: {
    output: 'cool-snippet',
  },
  links: {
    repo: 'https://github.com/simpleneeraj/cool-snippets',
    sponsor: 'https://github.com/sponsors/simpleneeraj',
    coffee: 'https://www.buymeacoffee.com/simplneeraj',
  },
};
export default appConfig;
