export type TCourseData = {
  title: string;
  subtitle: string;
  image: TImage;
};

export type TCompaniesData = {
  variant: TVariant;
  title: string;
  subtitle: string;
  tagA: TTag;
  tagB: TTag;
  frameA: TImage;
  frameB: TImage;
};

export type TImage = {
  url: string;
  alt: string;
};

export type TVariant = 'emex' | 'cloudpayments' | 'sberbank';

export type TTag = {
  title: string;
  subtitle: string;
};
