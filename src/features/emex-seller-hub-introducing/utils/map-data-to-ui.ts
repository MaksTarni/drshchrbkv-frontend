import type { TEmexIntroData } from '../../../entities/emex-intro/types';
import type { TScreenData } from '../types';

export const mapDataToUI = (data?: TEmexIntroData): TScreenData => {
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
