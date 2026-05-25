export type TCompanies = {
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

type TVariant = 'emex' | 'cloudpayments' | 'sberbank';

type TTag = {
  title: string;
  subtitle: string;
};
