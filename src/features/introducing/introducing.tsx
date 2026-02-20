import { IntroducingBlock } from '../../shared/components/molecules/introducing-block';
import type { TScreenData } from './types';

type Props = {
  accentColor: string;
  screenData: TScreenData;
};

export const Introducing = ({ accentColor, screenData }: Props) => {
  return (
    <IntroducingBlock
      title={screenData?.title}
      description={screenData?.description}
      accentColor={accentColor}
    />
  );
};
