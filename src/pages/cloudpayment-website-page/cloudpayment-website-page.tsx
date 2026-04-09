import { CloudpaymentWebsiteInfoConnector } from '../../features/cloudpayment-website-info';
import { CloudpaymentWebsiteIntroducingConnector } from '../../features/cloudpayment-website-introducing';
import { Box } from '../../shared/components/atoms/box';
import { Footer } from '../../shared/components/molecules/footer';
import { Header } from '../../shared/components/molecules/header';
import { useDimensions } from '../../shared/hooks/dimensions';
import type { TScreenData } from './types';

export type Props = {
  screenData: TScreenData;
  onHome?: VoidFunction;
};

export const CloudpaymentWebsitePage = ({ onHome, screenData }: Props) => {
  const { isMobile } = useDimensions();

  return (
    <>
      <Header
        leftText='home'
        withRightButton
        onLeftClick={onHome}
      />

      <CloudpaymentWebsiteIntroducingConnector />

      <div className={`${isMobile ? 'p-4' : 'p-5'}`}>
        <Box height={isMobile ? 68 : 124} />

        <CloudpaymentWebsiteInfoConnector />

        <Footer email={screenData?.email} />
      </div>
    </>
  );
};
