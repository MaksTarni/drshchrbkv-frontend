import type { TSberbankDepositIntroData } from '../../../entities/sberbank-deposit-intro';

import type { TScreenData } from '../types';

export const mapDataToUI = (data?: TSberbankDepositIntroData): TScreenData => {
  if (!data) {
    return {
      desktopImage: {
        alt: '-',
        url: '-',
      },
      tabletImage: {
        alt: '-',
        url: '-',
      },
      mobileImage: {
        alt: '-',
        url: '-',
      },
      projectIntro: {
        subtitles: [],
        title: '',
      },
      tags: [],
    };
  }

  return {
    desktopImage: data?.image,
    tabletImage: data?.tabletImage,
    mobileImage: data?.mobileImage,
    projectIntro: data.projectIntro,
    tags: data.tags,
  };
};
