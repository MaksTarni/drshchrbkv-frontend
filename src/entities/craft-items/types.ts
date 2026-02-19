export type TCraftItems = {
  data: TCraftItemsData;
};

type TCraftItemsData = {
  title: string;
  subtitle: string;
  gallery: TImage[] | null;
};

type TImage = {
  image: {
    url: string;
  };
  alt: string;
};
