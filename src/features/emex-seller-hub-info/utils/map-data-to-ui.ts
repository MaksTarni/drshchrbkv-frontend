import type { TEmexSellerHubPointsData } from '../../../entities/emex-seller-hub-points/types';
import type { TScreenData } from '../types';

export const mapDataToUI = (
  data?: TEmexSellerHubPointsData[],
): TScreenData[] => {
  if (!data) {
    return [];
  }

  return data.map(item => {
    return {
      title: item.title,
      firstColumnMarkdown: item.firstColumnMarkdown,
      secondColumnMarkdown: item.secondColumnMarkdown,
      desktopImages: item.desktopImages,
      tabletImages: item.tabletImages,
      mobileImages: item.mobileImages,
    };
  });
};
