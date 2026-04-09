export type TCloudpaymentWebsiteIntro = {
  data: TCloudpaymentWebsiteIntroData;
};

export type TCloudpaymentWebsiteIntroData = {
  image: TImage;
  tabletImage: TImage;
  mobileImage: TImage;
  projectIntro: TProjectIntro;
  tags: TTags[];
};

export type TProjectIntro = {
  title: string;
  subtitles: string[];
};

export type TTags = {
  title: string;
  subtitle: string;
  accentTextWithArrow?: boolean;
  accentTextLink?: string;
};

export type TImage = {
  url: string;
  alt: string;
};
