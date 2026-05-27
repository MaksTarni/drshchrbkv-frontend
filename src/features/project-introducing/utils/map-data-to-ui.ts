import type { TEmexIntroData } from '../../../entities/emex-intro/types';
import type { TScreenData } from '../types';

export const mapDataToUI = (data?: TEmexIntroData): TScreenData => {
  if (!data) {
    return {
      desktopImage: {
        alt: '-',
        url: '-',
      },
      mobileImage: {
        alt: '-',
        url: '-',
      },
      tabletImage: {
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
    mobileImage: data?.mobileImage,
    tabletImage: data?.tabletImage,
    projectIntro: data.projectIntro,
    tags: data.tags,
  };
};
