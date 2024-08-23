import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
// If you are using dotenv (https://www.npmjs.com/package/dotenv)
import 'dotenv/config';

const config: Config = {
  title: 'Brifle Docs',
  tagline: 'Deliver your Mail with Brifle',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://developer.brifle.de',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  customFields: {
    enableMatomo: process.env.ENABLE_MATOMO === 'true',
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Brifle GmbH', // Usually your GitHub org/user name.
  projectName: 'Brifle API', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  scripts: process.env.ENABLE_MATOMO === 'true' ? [ 
    "/js/matomo.js",
  ] : [],

  // Even if you don't use internationalization, you can use this field to set
 
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl:
        //    'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        
       // api: {
       //   path: "./openapi.json",
       //   routeBasePath: "/api",
       // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    metadata: [
      {name: 'keywords', content: 'Brifle, API, Documentation, Post'},
      {name: 'description', content: 'Explore the developer documentation for Brifle'},
    ],

    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Brifle Docs',
      logo: {
        alt: 'Brifle Docs Logo',
        src: 'img/brifle-docs.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          label: 'API',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/tutorials/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [           
            {
              label: 'Homepage',
              href: 'https://www.brifle.de',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/brifle-de',
            },
            {
              label: 'Imprint',
              href: 'https://www.brifle.de/imprint'
            },
            {
              label: 'Privacy Policy',
              href: 'https://www.brifle.de/privacy-policy'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Brifle`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,  
      additionalLanguages: [
        "ruby",
        "csharp",
        "php",
        "java",
        "powershell",
        "json",
        "bash",
      ],
    },  
    languageTabs: [
    
      {
        highlight: "bash",
        language: "curl",
        logoClass: "bash-custom",
      },
      {
        highlight: "python",
        language: "python",
        logoClass: "python-custom",
      },
      {
        highlight: "go",
        language: "go",
        logoClass: "go-custom",
      },
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs-custom",
      },
      {
        highlight: "ruby",
        language: "ruby",
        logoClass: "ruby-custom",
      },
      {
        highlight: "php",
        language: "php",
        logoClass: "php-custom",
      },
      {
        highlight: "java",
        language: "java",
        logoClass: "java-custom",
        variant: "unirest",
      },
    ],
    
    
    
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          brifle_api: {
            specPath: "openapi.json",
            outputDir: "docs/api", 
            sidebarOptions: {
              groupPathsBy: "tag",      
              sidebarCollapsible: true,
            },

          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],
};

export default config;
