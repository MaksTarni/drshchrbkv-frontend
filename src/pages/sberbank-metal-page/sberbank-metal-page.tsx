import { SberbankMetalInfoConnector } from '../../features/sberbank-metal-info';
import { SberbankMetalIntroducingConnector } from '../../features/sberbank-metal-introducing/sberbank-metal-introducing-connector';
import { Box } from '../../shared/components/atoms/box';
import { Footer } from '../../shared/components/molecules/footer';
import { Header } from '../../shared/components/molecules/header';
import { useDimensions } from '../../shared/hooks/dimensions';
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
        rightText='index'
        onLeftClick={onHome}
        rightTextLink='/stub'
      />

      <SberbankMetalIntroducingConnector />

      <div className={`${isMobile ? 'p-4' : 'p-5'}`}>
        <Box height={isMobile ? 68 : 124} />

        <SberbankMetalInfoConnector />

        <Footer email={screenData?.email} />
      </div>
    </>
  );
};
