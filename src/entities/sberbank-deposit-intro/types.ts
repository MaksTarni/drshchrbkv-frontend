export type TSberbankDepositIntro = {
  data: TSberbankDepositIntroData;
};

export type TSberbankDepositIntroData = {
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
};

export type TImage = {
  url: string;
  alt: string;
};
