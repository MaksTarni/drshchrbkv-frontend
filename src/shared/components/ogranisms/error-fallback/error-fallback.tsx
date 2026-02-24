import { Title } from '../../atoms/title';
import { Header } from '../../molecules/header';

export const ErrorFallback = () => {
  return (
    <>
      <Header
        leftText='home'
        leftTextLink='/'
      />
      <div className='flex items-center justify-start pl-5 h-dvh'>
        <Title text='Something went wrong' />
      </div>
    </>
  );
};
