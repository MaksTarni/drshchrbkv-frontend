import { Title } from '../../atoms/title';
import { Header } from '../../molecules/header';

export const ErrorFallback = () => {
  return (
    <>
      <Header
        leftText='home'
        leftTextLink='/'
      />
      <div className='flex items-center justify-start pl-s-mobile pt-s-mobile tablet:pt-s-not-mobile tablet:pl-s-not-mobile h-[calc(100dvh-28px)] tablet:h-[calc(100dvh-36px)] desktop:h-[calc(100dvh-36px)]'>
        <Title text='something went wrong' />
      </div>
    </>
  );
};
