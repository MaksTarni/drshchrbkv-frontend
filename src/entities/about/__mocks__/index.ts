import type { TAbout } from '../types';

export const ABOUT_MOCKS: TAbout = {
  data: {
    title: 'about',
    content: [
      {
        title:
          'product designer with experience in businesses of all sizes — from startups to large financial companies',
      },
      {
        title:
          'I regularly share insights about the superpowered UX/UI course in my Telegram channel',
        links: [
          {
            link: 'https://ya.ru',
            text: 'super ux/ui',
          },
        ],
      },
      {
        title: 'i give talks and write articles',
        links: [
          {
            text: 'master class on product metrics',
            link: 'https://ya.ru',
          },
          {
            text: 'how and in what situations to use ux reasearch with a prototype',
            link: 'https://ya.ru',
          },
          {
            text: 'what hinders a product manager from collaborating with a designer',
            link: 'https://ya.ru',
          },
        ],
      },
    ],
  },
};
