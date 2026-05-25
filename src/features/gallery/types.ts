export type TScreenData = {
  title: string;
  subtitle: string;
  gallery: TImage[];
  galleryTablet: TImage[];
  galleryMobile: TImage[];
};

type TImage = {
  url: string;
  alt: string;
};
