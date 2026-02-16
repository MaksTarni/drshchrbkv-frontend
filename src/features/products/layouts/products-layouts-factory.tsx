import type { TImage, TTag, TVariant } from '../types';
import { ProductsCloudpaymentsLayout } from './cloudpayment';
import { ProductsEmexLayout } from './emex';
import { ProductsSberbankLayout } from './sberbank';

export type Props = {
  variant: TVariant;
  title: string;
  subtitle: string;
  tagA: TTag;
  tagB: TTag;
  frameA: TImage;
  frameB: TImage;
};

export const ProductsLayoutsFactory = ({
  variant,
  subtitle,
  title,
  frameA,
  frameB,
  tagA,
  tagB,
}: Props) => {
  switch (variant) {
    case 'sberbank':
      return (
        <ProductsSberbankLayout
          title={title}
          subtitle={subtitle}
          tagA={tagA}
          tagB={tagB}
          frameA={frameA}
          frameB={frameB}
        />
      );
    case 'emex':
      return (
        <ProductsEmexLayout
          title={title}
          subtitle={subtitle}
          tagA={tagA}
          tagB={tagB}
          frameA={frameA}
          frameB={frameB}
        />
      );

    case 'cloudpayments':
      return (
        <ProductsCloudpaymentsLayout
          title={title}
          subtitle={subtitle}
          tagA={tagA}
          tagB={tagB}
          frameA={frameA}
          frameB={frameB}
        />
      );
  }
};
