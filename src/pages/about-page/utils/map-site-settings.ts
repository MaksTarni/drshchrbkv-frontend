import type { TSiteSettings } from '../../../entities/site-settings';
import type { TSiteSettingsData } from '../types';

export const mapSiteSettings = (data?: TSiteSettings): TSiteSettingsData => {
  if (!data?.data) {
    return {
      email: '-',
    };
  }

  return {
    email: data.data.contactEmail,
  };
};
