import { CloudpaymentWebsiteInfoConnector } from '../../features/cloudpayment-website-info';
import { CloudpaymentWebsiteIntroducingConnector } from '../../features/cloudpayment-website-introducing';
import { Box } from '../../shared/components/atoms/box';
import { Footer } from '../../shared/components/molecules/footer';
import { Header } from '../../shared/components/molecules/header';
import { useDimensions, useXL } from '../../shared/hooks/dimensions';

import type { TScreenData } from './types';

export type Props = {
  screenData: TScreenData;
  onHome?: VoidFunction;
};

export const CloudpaymentWebsitePage = ({ onHome, screenData }: Props) => {
  const { isMobile } = useDimensions();

  const xl = useXL();
  return (
    <>
      <Header
        leftText='home'
        withRightButton
        onLeftClick={onHome}
      />

      <CloudpaymentWebsiteIntroducingConnector />

      <div className={`${isMobile ? 'p-s-mobile' : 'p-s-not-mobile'} pt-0`}>
        <Box height={xl} />

        <CloudpaymentWebsiteInfoConnector />

        <Footer email={screenData?.email} />
      </div>
    </>
  );
};
