import type { TSberbankMetalPointsData } from '../../../entities/sberbank-metal-points/types';
import type { TScreenData } from '../types';

export const mapDataToUI = (
  data?: TSberbankMetalPointsData[],
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
      isVideo: item.isVideo,
    };
  });
};
