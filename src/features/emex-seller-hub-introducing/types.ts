import type { TProjectIntro, TTags } from '../../entities/emex-intro';

export type TScreenData = {
  image: TImage;
  tabletImage: TImage;
  mobileImage: TImage;
  projectIntro: TProjectIntro;
  tags: TTags[];
};

export type TImage = {
  url: string;
  alt: string;
};
