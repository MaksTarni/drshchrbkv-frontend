export type TCompanies = {
  variant: TVariant;
  title: string;
  subtitle: string;
  tagA: TTag;
  tagB: TTag;
  frameA: TImage;
  frameB: TImage;
};

type TVariant = 'emex' | 'cloudpayments' | 'sberbank';

type TImage = {
  url: string;
  alt: string;
};

type TTag = {
  title: string;
  subtitle: string;
};
