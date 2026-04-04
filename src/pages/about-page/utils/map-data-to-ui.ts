import type { TAbout } from '../../../entities/about';
import type { TScreenData } from '../types';

export const mapDataToUi = (data?: TAbout): TScreenData => {
  if (!data) {
    return {
      content: [],
      title: '-',
    };
  }

  return {
    content: data.data.content,
    title: data.data.title,
  };
};
