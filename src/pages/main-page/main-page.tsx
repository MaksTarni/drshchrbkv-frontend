import { GalleryConnector } from '../../features/gallery';
import { IntroducingConnector } from '../../features/introducing';
import { ProductsConnector } from '../../features/products';
import { Footer } from '../../shared/components/molecules/footer';
import { Header } from '../../shared/components/molecules/header';
import type { TScreenData } from './types';

export type Props = {
  screenData: TScreenData;
};

export const MainPage = ({ screenData }: Props) => {
  return (
    <>
      <Header
        leftText={screenData?.navLeftLabel}
        rightText={screenData?.navRightLabel}
        leftTextLink={screenData?.navLeftLink}
        rightTextLink={screenData?.navRightLink}
      />

      <IntroducingConnector accentColor={screenData?.accentColor} />

      <div className='px-4 md:px-5'>
        <ProductsConnector
          projectsTitle={screenData?.projectsTitle}
          projectsSubtitle={screenData?.projectsSubtitle}
          projectsMetaLeft={screenData?.projectsMetaLeft}
          projectsMetaRight={screenData?.projectsMetaRight}
        />
        <GalleryConnector />
        <Footer email={screenData?.contactEmail} />
      </div>
    </>
  );
};
