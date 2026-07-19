const appConfig = {
  name: 'Cool Snippets',
  short_name: 'Cool Snippets',
  version: 'v2.0.0',
  environment: 'Beta',
  year: new Date().getFullYear(),
  contact: {
    phone: '+1 234 567 890',
    // Support runs through GitHub Issues — there is no support mailbox.
    issues: 'https://github.com/simpleneeraj/cool-snippets/issues',
    map: 'https://www.google.com/maps?q=Cool+Snippets+Office',
    chat: 'https://wa.me/1234567890?text=Hi%20Cool%20Snippets,%20I%20need%20help!',
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
