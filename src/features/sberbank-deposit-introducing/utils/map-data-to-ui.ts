import type { TSberbankDepositIntroData } from '../../../entities/sberbank-deposit-intro';

import type { TScreenData } from '../types';

export const mapDataToUI = (data?: TSberbankDepositIntroData): TScreenData => {
  if (!data) {
    return {
      image: {
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
    image: data?.image,
    projectIntro: data.projectIntro,
    tags: data.tags,
  };
};
