export type TScreenData = {
  title: string;
  subtitle: string;
  image: TImage[] | null;
};

type TImage = {
  url: string;
  alt: string;
};
