export type TDrawer = {
  data: TDrawerData[];
};

export type TDrawerData = {
  title?: string;
  items: TItems[];
};

type TItems = {
  text: string;
  link: string;
};
