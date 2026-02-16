import { Title } from '../../shared/components/atoms/title';
import type { TScreenData } from './types';

type Props = {
  accentColor: string;
  screenData: TScreenData;
};

export const Introducing = ({ accentColor, screenData }: Props) => {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 h-83.5 items-end p-5'>
        <Title text={screenData?.title} />
      </div>
      <div
        className='grid grid-cols-1 sm:grid-cols-2 gap-5 h-83.5 items-end p-5'
        style={{ backgroundColor: accentColor }}
      >
        <Title text={screenData?.description} />
      </div>
    </div>
  );
};
