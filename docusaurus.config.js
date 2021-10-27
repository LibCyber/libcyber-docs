// /** @type {import('@docusaurus/Translate').Translate} */
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'LibCyber 用户手册',
  tagline: 'LibCyber 很酷 😎',
  url: 'https://docs.libcyber.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'LibCyber', // Usually your GitHub org/user name.
  projectName: 'libcyber-docs', // Usually your repo name.
  noIndex: true,
  themeConfig: {
    navbar: {
      title: 'LibCyber 用户手册',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '教程',
        },
        {
          href: 'https://github.com/LibCyber',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '教程',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/libcyber',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/HAwQhGPBNZ',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/libcyber',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/LibCyber',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LibCyber, Inc. Built with ❤️.`,
    },
    // algolia: {
    //   apiKey: 'YOUR_API_KEY',
    //   indexName: 'dev_libcyber',

    //   // Optional: see doc section below
    //   contextualSearch: true,

    //   // Optional: see doc section below
    //   appId: 'VO30QJT5M2',

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   //... other Algolia params
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/LibCyber/libcyber-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn', 'en']
  },
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ["en", "zh"],
      },
    ],
    function crisp(context, options) {
      return {
        name: 'crisp',
        injectHtmlTags({content}) {
          return {
            postBodyTags: [`<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="9bf1c6d9-b23b-4b0c-95aa-fbeac29d2be6";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>`],
          };
        },
      };
    },
  ],
};
