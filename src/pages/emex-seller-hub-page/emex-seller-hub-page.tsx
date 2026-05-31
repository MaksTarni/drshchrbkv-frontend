import { EmexSellerHubInfoConnector } from '../../features/emex-seller-hub-info';
import { EmexSellerHubIntroducingConnector } from '../../features/emex-seller-hub-introducing/emex-seller-hub-introducing-connector';

import { Box } from '../../shared/components/atoms/box';
import { Footer } from '../../shared/components/molecules/footer';
import { Header } from '../../shared/components/molecules/header';
import { useDimensions, useXL } from '../../shared/hooks/dimensions';

import type { TScreenData } from './types';

export type Props = {
  screenData: TScreenData;
  onHome?: VoidFunction;
};

export const EmexSellerHubPage = ({ screenData, onHome }: Props) => {
  const { isMobile } = useDimensions();

  const xl = useXL();
  return (
    <>
      <Header
        leftText='home'
        withRightButton
        onLeftClick={onHome}
      />

      <EmexSellerHubIntroducingConnector />

      <div className={`${isMobile ? 'p-s-mobile' : 'p-s-not-mobile'} pt-0`}>
        <Box height={xl} />

        <EmexSellerHubInfoConnector />

        <Footer email={screenData?.email} />
      </div>
    </>
  );
};
