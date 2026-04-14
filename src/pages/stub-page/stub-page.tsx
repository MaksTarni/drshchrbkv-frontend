import { Footer } from '../../shared/components/molecules/footer';
import { Header } from '../../shared/components/molecules/header';
import { IntroducingBlock } from '../../shared/components/molecules/introducing-block';

type Props = {
  accentColor: string;
  email: string;
};

export const StubPage = ({ accentColor, email }: Props) => {
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

      <div className='px-s-mobile tablet:px-s-not-mobile'>
        <Footer email={email} />
      </div>
    </>
  );
};
