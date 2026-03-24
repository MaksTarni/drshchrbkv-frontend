import type { TSiteSettings } from '../../../entities/site-settings';
import type { TScreenData } from '../types';

export const mapSiteSettings = (data?: TSiteSettings): TScreenData => {
  if (!data?.data) {
    return {
      email: '-',
    };
  }

  return {
    email: data.data.contactEmail,
  };
};
