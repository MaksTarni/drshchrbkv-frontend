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
        leftText='Back'
        leftTextLink='/'
      />

      <IntroducingBlock
        accentColor={accentColor}
        title='coming soon'
      />

      <div className='px-4 md:px-5'>
        <Footer email={email} />
      </div>
    </>
  );
};
