import type { TDrawer } from '../../../entities/drawer';
import type { TScreenData } from '../types';

export const mapDataToUi = (data?: TDrawer): TScreenData[] => {
  if (!data) {
    return [];
  }

  return data.data.map(item => {
    return {
      ...item,
    };
  });
};
