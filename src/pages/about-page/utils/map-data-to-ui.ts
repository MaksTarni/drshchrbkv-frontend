import type { TAboutData } from '../../../entities/about/types';
import type { TScreenData } from '../types';

export const mapDataToUi = (data?: TAboutData): TScreenData => {
  if (!data) {
    return {
      content: [],
      title: '-',
    };
  }

  return {
    content: data.content,
    title: data.title,
  };
};
