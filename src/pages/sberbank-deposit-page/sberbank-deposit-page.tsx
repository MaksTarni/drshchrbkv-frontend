import { SberbankDepositInfoConnector } from '../../features/sberbank-deposit-info';
import { SberbankDepositIntroducingConnector } from '../../features/sberbank-deposit-introducing';
import { Box } from '../../shared/components/atoms/box';
import { Footer } from '../../shared/components/molecules/footer';
import { Header } from '../../shared/components/molecules/header';
import { useDimensions } from '../../shared/hooks/dimensions';
import type { TScreenData } from './types';

export type Props = {
  screenData: TScreenData;
  onHome?: VoidFunction;
};

export const SberbankDepositPage = ({ onHome, screenData }: Props) => {
  const { isMobile } = useDimensions();

  return (
    <>
      <Header
        leftText='home'
        withRightButton
        onLeftClick={onHome}
      />

      <SberbankDepositIntroducingConnector />

      <div className={`${isMobile ? 'p-4' : 'p-5'}`}>
        <Box height={isMobile ? 68 : 124} />

        <SberbankDepositInfoConnector />

        <Footer email={screenData?.email} />
      </div>
    </>
  );
};
