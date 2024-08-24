const path = require('path');

module.exports = function (context) {

  const phpLoader = 'matomo.php';
  const jsLoader = 'matomo.js';
  const matomoUrl = 'https://matomo.brifle.de/';
  const siteId = '2';

  const isEnabled = process.env.ENABLE_MATOMO === 'true';

  return {
    name: 'docusaurus-matomo',

    getClientModules() {
      return isEnabled ? [path.resolve(__dirname, './tracking')] : [];
    },

    injectHtmlTags() {
      if (!isEnabled) {
        return {};
      }
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: `${matomoUrl}`,
            },
          },
          {
            tagName: 'script',
            innerHTML: `
              var _paq = window._paq = window._paq || [];
              _paq.push(['setRequestMethod', 'POST']);
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              _paq.push(['enableHeartBeatTimer']);
              (function() {
                var u="${matomoUrl}";
                _paq.push(['setRequestMethod', 'POST']);
                _paq.push(['setTrackerUrl', u+'${phpLoader}']);
                _paq.push(['setSiteId', '${siteId}']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.type='text/javascript'; g.async=true; g.src=u+'${jsLoader}'; s.parentNode.insertBefore(g,s);
              })();
            `,
          },
        ],
      };
    },
  };
};