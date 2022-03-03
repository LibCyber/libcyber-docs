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
    colorMode: {
      respectPrefersColorScheme: true,
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
    function supportIE(context, options) {
      return {
        name: 'supportIE',
        injectHtmlTags({content}) {
          return {
            postBodyTags: [`<script type="text/javascript">
            function IEVersion() {
              var userAgent = navigator.userAgent;
              var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
              var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
              var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
              if(isIE) {
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp["$1"]);
                if(fIEVersion == 7) {
                  return 7;
                } else if(fIEVersion == 8) {
                  return 8;
                } else if(fIEVersion == 9) {
                  return 9;
                } else if(fIEVersion == 10) {
                  return 10;
                } else {
                  return 6;
                }
              } else if(isEdge) {
                return 'edge';
              } else if(isIE11) {
                return 11;
              }else{
                return -1;
              }
            }

            var isIE = IEVersion();
            if (isIE == 6 || isIE == 7 || isIE == 8 || isIE == 9 || isIE == 11 ){
              window.location="/browser.html"
            }            
            </script>`],
          };
        },
      };
    },
  ],
};
