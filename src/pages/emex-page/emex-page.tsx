import { ProjectInfoConnector } from '../../features/project-info';

import { ProjectIntroducingConnector } from '../../features/project-introducing';
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

export const EmexPage = ({ screenData, onHome }: Props) => {
  const { isMobile } = useDimensions();

  return (
    <>
      <Header
        leftText='home'
        onLeftClick={onHome}
        withRightButton
      />

      <ProjectIntroducingConnector />

      <div className={`${isMobile ? 'p-s-mobile' : 'p-s-not-mobile'}`}>
        <Box height={isMobile ? XL_MOBILE : XL_NOT_MOBILE} />

        <ProjectInfoConnector />

        <Footer email={screenData?.email} />
      </div>
    </>
  );
};
