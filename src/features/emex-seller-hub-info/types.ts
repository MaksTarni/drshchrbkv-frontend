export type TScreenData = {
  title?: string;
  mobileImages: {
    firstImage: TImage;
    secondImage?: TImage;
    thirdImage?: TImage;
    fourthImage?: TImage;
  };
  tabletImages: {
    firstImage: TImage;
    secondImage?: TImage;
    thirdImage?: TImage;
    fourthImage?: TImage;
  };
  desktopImages: {
    firstImage: TImage;
    secondImage?: TImage;
    thirdImage?: TImage;
    fourthImage?: TImage;
  };
  firstColumnMarkdown: string[];
  secondColumnMarkdown?: string[];
};

export type TImage = {
  url: string;
  alt: string;
};
