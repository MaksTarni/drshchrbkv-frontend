import type { TSiteSettings } from '../../../entities/site-settings';
import type { TScreenData } from '../types';

export const mapSiteSettings = (data?: TSiteSettings): TScreenData => {
  if (!data) {
    return {
      accentColor: '#FDFF45',
      contactEmail: '-',
    };
  }

  return {
    accentColor: data.data.accentColor,
    contactEmail: data.data.contactEmail,
  };
};
