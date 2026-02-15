import { Box } from '../../shared/components/atoms/box';
import { AccentTextWithSubtitle } from '../../shared/components/molecules/accent-text-with-description';
import { TitleWithSubtitle } from '../../shared/components/molecules/title-with-subtitle/title-with-subtitle';
import { useDimensions } from '../../shared/hooks/dimensions';
import { ProductsCloudpaymentsLayout } from './layouts/cloudpayment/products-cloudpayments-layout';
import { ProductsEmexLayout } from './layouts/emex/products-emex-layout';
import { ProductsSberbankLayout } from './layouts/sberbank/products-sberbank-layout';

export const Products = () => {
  const { isMobile } = useDimensions();

  return (
    <div className='pt-30 md:pt-55'>
      <AccentTextWithSubtitle
        title='professional projects'
        subtitle='2021 — present'
      />

      <Box height={isMobile ? 60 : 124} />

      <TitleWithSubtitle
        title='superpowered senior ux/ui course'
        subtitle='advanced UX/UI and product design course with 250+ graduates'
      />

      <Box height={isMobile ? 16 : 20} />

      <img
        src='/test-5.png'
        alt='test-5'
        className='w-full h-full object-cover'
      />

      <Box height={isMobile ? 16 : 20} />

      <AccentTextWithSubtitle
        title='landing page'
        subtitle='2026'
        withLine
      />

      <ProductsEmexLayout
        title='fdsf'
        subtitle='fdsfsdf'
      />

      <ProductsSberbankLayout
        title='fdsf'
        subtitle='fdfdf'
      />

      <ProductsCloudpaymentsLayout
        title='fdsf'
        subtitle='fdsfsd'
      />
    </div>
  );
};
