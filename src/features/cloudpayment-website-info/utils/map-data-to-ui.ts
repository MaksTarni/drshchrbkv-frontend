import type { TSberbankDepositPointsData } from '../../../entities/sberbank-deposit-points';
import type { TScreenData } from '../types';

export const mapDataToUI = (
  data?: TSberbankDepositPointsData[],
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
