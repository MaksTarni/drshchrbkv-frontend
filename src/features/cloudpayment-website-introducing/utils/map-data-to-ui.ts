import type { TCloudpaymentWebsiteIntroData } from '../../../entities/cloudpayment-website-intro';

import type { TScreenData } from '../types';

export const mapDataToUI = (
  data?: TCloudpaymentWebsiteIntroData,
): TScreenData => {
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
