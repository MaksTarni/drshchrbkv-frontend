export type TScreenData = {
  title: string;
  content: TContent[];
};

export type TSiteSettingsData = {
  email: string;
};

type TContent = {
  title: string;
  links?: TContentLink[];
};

type TContentLink = {
  text: string;
  link: string;
};
