import { ProjectInfoConnector } from '../../features/project-info';

import { ProjectIntroducingConnector } from '../../features/project-introducing';
import { Box } from '../../shared/components/atoms/box';
import { Footer } from '../../shared/components/molecules/footer';
import { Header } from '../../shared/components/molecules/header';

import { useDimensions } from '../../shared/hooks/dimensions';
import type { TScreenData } from './types';

export type Props = {
  screenData: TScreenData;
};

export const EmexPage = ({ screenData }: Props) => {
  const { isMobile } = useDimensions();

  return (
    <>
      <Header
        leftText='home'
        rightText='index'
        leftTextLink='/'
        rightTextLink='/stub'
      />

      <ProjectIntroducingConnector />

      <div className={`${isMobile ? 'p-4' : 'p-5'}`}>
        <Box height={isMobile ? 68 : 124} />

        <ProjectInfoConnector />

        <Footer email={screenData?.email} />
      </div>
    </>
  );
};
