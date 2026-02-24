export type TEmexPoints = {
  data: TEmexPointsData[];
};

export type TEmexPointsData = {
  title?: string;
  firstImage: TImage;
  secondImage?: TImage;
  firstMobileImage?: TImage;
  secondMobileImage?: TImage;
  firstColumnMarkdown: string[];
  secondColumnMarkdown?: string[];
};

export type TImage = {
  url: string;
  alt: string;
};
