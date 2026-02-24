export type TEmexIntro = {
  data: TEmexIntroData;
};

export type TEmexIntroData = {
  image: TImage;
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
