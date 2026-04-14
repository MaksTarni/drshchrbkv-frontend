import { Title } from '../../atoms/title';
import { Header } from '../../molecules/header';

export const ErrorFallback = () => {
  return (
    <>
      <Header
        leftText='home'
        leftTextLink='/'
      />
      <div className='flex items-center justify-start pl-s-mobile tablet:pl-s-not-mobile h-dvh'>
        <Title text='Something went wrong' />
      </div>
    </>
  );
};
