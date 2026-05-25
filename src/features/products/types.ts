export type TCourseData = {
  title: string;
  subtitle: string;
  image: TImage;
  imageTablet?: TImage;
  imageMobile?: TImage;
};

export type TCompaniesData = {
  variant: TVariant;
  title: string;
  subtitle: string;
  tagA: TTag;
  tagB: TTag;
  frameA: TImage;
  frameATablet?: TImage;
  frameAMobile?: TImage;
  frameB: TImage;
  frameBTablet?: TImage;
  frameBMobile?: TImage;
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
