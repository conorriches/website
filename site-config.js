const path = require('path');

module.exports = {
  siteTitle: `notes from the hackerspace`,
  siteTitleShort: `NFTH`,
  siteDescription: `notes from the hackerspace - a blog by Conor Riches`,
  siteUrl: `https://conorriches.co.uk`,
  author: 'Conor',
  themeColor: `#fff`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: `gatsbyjs`,
    fbAppId: `966242223397117`,
  },
};
