import { SberbankMetalInfoConnector } from '../../features/sberbank-metal-info';
import { SberbankMetalIntroducingConnector } from '../../features/sberbank-metal-introducing';
import { Box } from '../../shared/components/atoms/box';
import { Footer } from '../../shared/components/molecules/footer';
import { Header } from '../../shared/components/molecules/header';
import { useDimensions } from '../../shared/hooks/dimensions';
import { XL_MOBILE, XL_NOT_MOBILE } from '../../shared/indents';
import type { TScreenData } from './types';

export type Props = {
  screenData: TScreenData;
  onHome?: VoidFunction;
};

export const SberbankMetalPage = ({ onHome, screenData }: Props) => {
  const { isMobile } = useDimensions();

  return (
    <>
      <Header
        leftText='home'
        withRightButton
        onLeftClick={onHome}
      />

      <SberbankMetalIntroducingConnector />

      <div className={`${isMobile ? 'p-s-mobile' : 'p-s-not-mobile'}`}>
        <Box height={isMobile ? XL_MOBILE : XL_NOT_MOBILE} />

        <SberbankMetalInfoConnector />

        <Footer email={screenData?.email} />
      </div>
    </>
  );
};
