import type { TSiteSettings } from '../../../entities/site-settings';
import type { TScreenData } from '../types';

export const mapSiteSettings = (data?: TSiteSettings): TScreenData => {
  if (!data) {
    return {
      accentColor: '#FDFF45',
      metaTitle: '-',
      projectsTitle: '-',
      projectsSubtitle: '-',
      projectsMetaLeft: '-',
      projectsMetaRight: '-',
      navLeftLabel: '-',
      navRightLabel: '-',
      navLeftLink: '-',
      navRightLink: '-',
      contactEmail: '-',
      linkedInUrl: '-',
    };
  }

  return {
    navLeftLink: data.data.navLeftHref,
    navRightLink: data.data.navRightHref,
    linkedInUrl: data.data.linkedinUrl,
    accentColor: data.data.accentColor,
    metaTitle: data.data.metaTitle,
    projectsTitle: data.data.projectsTitle,
    projectsSubtitle: data.data.projectsSubtitle,
    projectsMetaLeft: data.data.projectsMetaLeft,
    projectsMetaRight: data.data.projectsMetaRight,
    navLeftLabel: data.data.navLeftLabel,
    navRightLabel: data.data.navRightLabel,
    contactEmail: data.data.contactEmail,
  };
};
