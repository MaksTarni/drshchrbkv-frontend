import type { TEmexSellerHubIntroData } from '../../../entities/emex-seller-hub-intro/types';
import type { TScreenData } from '../types';

export const mapDataToUI = (data?: TEmexSellerHubIntroData): TScreenData => {
  if (!data) {
    return {
      image: {
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
    image: data?.image,
    tabletImage: data?.tabletImage,
    mobileImage: data?.mobileImage,
    projectIntro: data.projectIntro,
    tags: data.tags,
  };
};
