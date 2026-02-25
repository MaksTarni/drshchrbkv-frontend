export type TScreenData = {
  title?: string;
  firstImage: TImage;
  secondImage?: TImage;
  firstMobileImage?: TImage;
  firstTabletImage?: TImage;
  secondMobileImage?: TImage;
  secondTabletImage?: TImage;
  firstColumnMarkdown: string[];
  secondColumnMarkdown?: string[];
};

export type TImage = {
  url: string;
  alt: string;
};
