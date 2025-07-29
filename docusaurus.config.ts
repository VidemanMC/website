import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "VidemanMC",
  favicon: "img/icon.png",

  url: "http://videmanmc.ru",
  baseUrl: "/",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ru",
    locales: ["ru"],
  },

  scripts: [
    {
      src: "https://videmanmc.ru/scripts/yandex-analitics.js",
      defer: true,
      "data-domain": "videmanmc.ru",
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      { name: "title", content: "VidemanMC" },
      {
        name: "keywords",
        content: "майнкрафт, выживание, моды, ванила, взрослые игроки",
      },
      {
        name: "description",
        content:
          "сервера для игры с друзьями во множестве увлекательных режимов!",
      },
    ],
    navbar: {
      items: [
        {
          type: "docSidebar",
          sidebarId: "modSidebar",
          position: "left",
          label: "The Cut Occult",
        },
        {
          type: "docSidebar",
          sidebarId: "survivalSidebar",
          position: "left",
          label: "Survival",
        },
        {
          to: "https://store.videmanmc.ru",
          label: "Магазин",
          position: "right",
        },
      ],
      hideOnScroll: true,
      logo: {
        alt: "VidemanLogo",
        src: "img/icon_transparet_background.png",
        target: "_self",
      },
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} VidemanMC`,
      links: [
        {
          title: 'Соц. сети',
          items: [
            {
              label: 'Телеграм',
              to: 'https://t.me/videmanmc',
            },
            {
              label: 'Ютуб',
              to: 'https://www.youtube.com/@videmanmc',
            },
            {
              label: 'Рутуб',
              to: 'https://rutube.ru/channel/65583935',
            },
          ],
        },
        {
          title: 'Интересное',
          items: [
            {
              label: 'Правила',
              to: '/rules',
            },
            {
              label: 'Льготы строителям',
              to: '/builder-benefits',
            },
            {
              label: 'Мониторинги',
              to: '/ratings',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.jettwaveLight,
      darkTheme: prismThemes.jettwaveDark,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "./static/plugins/custom-sitemap.js",
      {
        priorityMap: {
          "/": { priority: 1.0, changefreq: "daily" },
          "/docs/mods/intro": { priority: 0.9, changefreq: "daily" },
          "/docs/survival/intro": { priority: 0.9, changefreq: "daily" },
        },
      },
    ],
  ],
};

export default config;
