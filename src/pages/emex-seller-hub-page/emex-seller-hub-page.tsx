import { EmexSellerHubInfoConnector } from '../../features/emex-seller-hub-info';
import { EmexSellerHubIntroducingConnector } from '../../features/emex-seller-hub-introducing/emex-seller-hub-introducing-connector';

import { Box } from '../../shared/components/atoms/box';
import { Footer } from '../../shared/components/molecules/footer';
import { Header } from '../../shared/components/molecules/header';
import { useDimensions } from '../../shared/hooks/dimensions';
import type { TScreenData } from './types';

export type Props = {
  screenData: TScreenData;
  onHome?: VoidFunction;
};

export const EmexSellerHubPage = ({ screenData, onHome }: Props) => {
  const { isMobile } = useDimensions();

  return (
    <>
      <Header
        leftText='home'
        rightText='index'
        onLeftClick={onHome}
        rightTextLink='/stub'
      />

      <EmexSellerHubIntroducingConnector />

      <div className={`${isMobile ? 'p-4' : 'p-5'}`}>
        <Box height={isMobile ? 68 : 124} />

        <EmexSellerHubInfoConnector />

        <Footer email={screenData?.email} />
      </div>
    </>
  );
};
