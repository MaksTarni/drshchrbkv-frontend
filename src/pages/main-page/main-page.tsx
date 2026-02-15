import { GalleryConnector } from '../../features/gallery';
import { IntroducingConnector } from '../../features/introducing';
import { ProductsConnector } from '../../features/products';
import { Header } from '../../shared/components/molecules/header';

export const MainPage = () => {
  return (
    <>
      <Header
        leftText='left'
        rightText='right'
      />

      <IntroducingConnector />

      <div className='px-4 md:px-5'>
        <ProductsConnector />
        <GalleryConnector />
      </div>
    </>
  );
};
