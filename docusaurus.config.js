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
          href: 'https://github.com/LibCyber/libcyber',
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
              href: 'https://discordapp.com/invite/libcyber',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/LibCyber/libcyber-docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn']
  }
};
