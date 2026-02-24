import type { TEmexPointsData } from '../../../entities/emex-points/types';
import type { TScreenData } from '../types';

export const mapDataToUI = (data?: TEmexPointsData[]): TScreenData[] => {
  if (!data) {
    return [];
  }

  return data.map(item => {
    return {
      firstColumnMarkdown: item.firstColumnMarkdown,
      secondColumnMarkdown: item.secondColumnMarkdown,
      firstImage: item.firstImage,
      firstMobileImage: item.firstMobileImage,
      secondImage: item.secondImage,
      secondMobileImage: item.secondMobileImage,
      title: item.title,
    };
  });
};
