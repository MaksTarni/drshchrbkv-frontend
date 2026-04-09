import type { TDrawer } from '../types';

export const DRAWER_MOCKS: TDrawer = {
  data: [
    {
      items: [
        {
          text: 'home',
          link: '/',
        },
      ],
    },
    {
      items: [
        {
          text: 'about',
          link: '/about',
        },
      ],
    },
    {
      items: [
        {
          text: 'superpowered ux/ui',
          link: '/stub',
        },
      ],
    },
    {
      title: 'emex',
      items: [
        {
          text: 'design system',
          link: '/auth/companies/emex',
        },
        {
          text: 'seller hub',
          link: '/auth/companies/emex-seller-hub',
        },
      ],
    },
    {
      title: 'sberbank',
      items: [
        {
          text: 'metal accounts onboarding',
          link: '/auth/companies/sberbank-metal',
        },
        {
          text: 'deposit box map search',
          link: '/auth/companies/sberbank-deposit',
        },
      ],
    },
    {
      title: 'cloudpayments',
      items: [
        {
          text: 'company website',
          link: '/auth/companies/cloudpayment-website',
        },
        {
          text: 'payment widget',
          link: 'https://www.behance.net/gallery/159303845/Cloud-Visual-philosophy-as-a-product',
        },
      ],
    },
  ],
};
