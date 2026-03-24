import type { TSberbankMetalIntroData } from '../../../entities/sberbank-metal-intro/types';
import type { TScreenData } from '../types';

export const mapDataToUI = (data?: TSberbankMetalIntroData): TScreenData => {
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
