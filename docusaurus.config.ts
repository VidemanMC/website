import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'VidemanMC',
  favicon: 'img/icon.png',

  url: 'http://videmanmc.ru',
  baseUrl: '/',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  
  themeConfig: {
    metadata: [
      {name: 'title', content: 'VidemanMC.ru'},
      {name: 'keywords', content: 'minecraft, gaming, multiplayer, survival, oneblock, one block, modded, pvp, гейминг, игры, мультиплеер, майнкрафт, выживание, моды, ванблок, ван блок, пвп, онлайн игры'},
      {name: 'description', content: 'VidemanMC.ru - это сервера для игры с друзьями во множестве увлекательных режимов!'},
    ],
    navbar: {
      items: [
        {
          to: '/',
          label: 'Главная',
          activeBaseRegex: 'docs/(next|v8)'
        },
        {
          type: 'docSidebar',
          sidebarId: 'modSidebar',
          position: 'left',
          label: 'The Cut Occult',
        },
        {
          type: 'docSidebar',
          sidebarId: 'oneBlockSidebar',
          position: 'left',
          label: 'OneBlock',
        },

        {
          to: 'https://store.videmanmc.ru',
          label: 'Магазин',
          position: 'right',
        },
        {
          to: 'https://www.youtube.com/@videmanmc',
          label: 'Ютуб',
          position: 'right',
        },
        {
          to: 'https://discord.gg/kQeW23CjNa',
          label: 'Дискорд',
          position: 'right',
        },
        {
          to: 'https://t.me/+AakeNuqMt6M2NDgy', 
          label: 'Телеграм',
          position: 'right'
        }, 
      ],
      hideOnScroll:true,
      logo: {
        alt: 'VidemanLogo',
        src: 'img/icon_transparet_background.png',
        target: '_self',
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} VidemanMC`,
    },
    prism: {
      theme: prismThemes.jettwaveLight,
      darkTheme: prismThemes.jettwaveDark,
    },
  } satisfies Preset.ThemeConfig,

  
};

export default config;
