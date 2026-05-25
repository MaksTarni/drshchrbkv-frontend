import type { TCompanies } from '../../../entities/companies';

import type { TCompaniesData } from '../types';

export const mapCompaniesDataToUI = (data?: TCompanies[]): TCompaniesData[] => {
  if (!data) {
    return [];
  }

  return data.map(item => {
    return {
      variant: item.variant,
      title: item.title,
      subtitle: item.subtitle,
      tagA: {
        title: item.tagA.title,
        subtitle: item.tagA.subtitle,
      },
      tagB: {
        title: item.tagB.title,
        subtitle: item.tagB.subtitle,
      },
      frameA: {
        url: item.frameA.url,
        alt: item.frameA.alt,
      },
      frameATablet: {
        url: item.frameATablet?.url || '-',
        alt: item.frameATablet?.alt || '-',
      },
      frameAMobile: {
        url: item.frameAMobile?.url || '-',
        alt: item.frameAMobile?.alt || '-',
      },
      frameB: {
        url: item.frameB.url,
        alt: item.frameB.alt,
      },
      frameBTablet: {
        url: item.frameBTablet?.url || '-',
        alt: item.frameBTablet?.alt || '-',
      },
      frameBMobile: {
        url: item.frameBMobile?.url || '-',
        alt: item.frameBMobile?.alt || '-',
      },
    };
  });
};
