export type TScreenData = {
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
