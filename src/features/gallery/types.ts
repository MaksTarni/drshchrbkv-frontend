export type TScreenData = {
  title: string;
  subtitle: string;
  gallery: TImage[] | null;
};

type TImage = {
  url: string;
  alt: string;
};
