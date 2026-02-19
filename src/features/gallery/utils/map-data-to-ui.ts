import type { TCraftItems } from '../../../entities/craft-items';

import type { TScreenData } from '../types';

export const mapDataToUI = (data?: TCraftItems): TScreenData => {
  if (!data) {
    return {
      title: '-',
      subtitle: '-',
      gallery: null,
    };
  }

  return {
    title: data.data.title,
    subtitle: data.data.subtitle,
    gallery:
      data.data.gallery?.map(image => {
        return {
          url: image.image.url,
          alt: image.alt,
        };
      }) ?? null,
  };
};
