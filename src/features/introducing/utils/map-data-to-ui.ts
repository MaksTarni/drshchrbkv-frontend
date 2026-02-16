import type { THero } from '../../../entities/hero';
import type { TScreenData } from '../types';

export const mapDataToUI = (data?: THero): TScreenData => {
  if (!data) {
    return {
      title: '-',
      description: '-',
    };
  }

  return {
    title: data.data.title,
    description: data.data.description,
  };
};
