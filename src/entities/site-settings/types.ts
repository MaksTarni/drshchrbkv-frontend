export type TSiteSettingsData = {
  accentColor: string;
  metaTitle: string;
  projectsTitle: string;
  projectsSubtitle: string;
  projectsMetaLeft?: string;
  projectsMetaRight?: string;
  navLeftLabel: string;
  navRightLabel: string;
  navLeftHref: string;
  navRightHref: string;
  contactEmail: string;
  linkedinUrl: string;
};

export type TSiteSettings = {
  data: TSiteSettingsData;
};
