import { Header } from '../../shared/components/molecules/header';
import { IntroducingBlock } from '../../shared/components/molecules/introducing-block';

type Props = {
  accentColor: string;
};

export const StubPage = ({ accentColor }: Props) => {
  return (
    <>
      <Header
        leftText='home'
        leftTextLink='/'
      />

      <IntroducingBlock
        accentColor={accentColor}
        title='coming soon'
      />
    </>
  );
};
