import type { TCraftItems } from '../../../entities/craft-items';

import type { TScreenData } from '../types';

export const mapDataToUI = (data?: TCraftItems): TScreenData => {
  if (!data) {
    return {
      title: '-',
      subtitle: '-',
      image: null,
    };
  }

  return {
    title: data.data.title,
    subtitle: data.data.subtitle,
    image:
      data.data.image?.map(image => {
        return {
          url: image.url,
          alt: image.alt,
        };
      }) || null,
  };
};
