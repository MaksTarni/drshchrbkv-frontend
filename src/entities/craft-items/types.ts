export type TCraftItems = {
  data: TCraftItemsData;
};

type TCraftItemsData = {
  title: string;
  subtitle: string;
  image: TImage[] | null;
};

type TImage = {
  url: string;
  alt: string;
};
