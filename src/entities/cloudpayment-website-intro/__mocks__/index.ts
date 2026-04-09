import type { TCloudpaymentWebsiteIntroData } from '../types';

export const MOCK_CLOUDPAYMENT_WEBSITE_INTRO: TCloudpaymentWebsiteIntroData = {
  image: {
    url: '/test-2.png',
    alt: 'fsdf',
  },
  mobileImage: {
    url: '/test-2.png',
    alt: 'fsdf2',
  },
  tabletImage: {
    url: '/test-2.png',
    alt: 'fsdf3',
  },
  projectIntro: {
    title: 'fdsfsdf',
    subtitles: ['dsfsdffsdfsdf\ndfdsfdsf\nfdsfsdfdsfds\nfsdfdsf'],
  },
  tags: [
    {
      title: 'fdsfsdf',
      subtitle: 'dsfsdffsdfsdf\ndfdsfdsf\nfdsfsdfdsfds\nfsdfdsf',
    },
    {
      title: 'cloudpayments.ru',
      subtitle: 'go to',
      accentTextWithArrow: true,
      accentTextLink: 'https://ya.ru',
    },
  ],
};
