export type TAbout = {
  data: TAboutData;
};

export type TAboutData = {
  title: string;
  content: TContent[];
};

type TContent = {
  title: string;
  links?: TContentLink[];
};

type TContentLink = {
  text: string;
  link: string;
};
