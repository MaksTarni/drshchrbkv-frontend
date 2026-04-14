import { Title } from '../../atoms/title';

export type Props = {
  title?: string;
  description?: string;
  accentColor?: string;
};

export const IntroducingBlock = ({
  accentColor,
  description,
  title,
}: Props) => {
  return (
    <div className='h-dvh'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-s-mobile tablet:gap-s-not-mobile items-end p-s-mobile tablet:p-s-not-mobile h-[50%]'>
        <Title text={title || ''} />
      </div>
      <div
        className='grid grid-cols-1 sm:grid-cols-2 gap-s-mobile tablet:gap-s-not-mobile items-end p-s-mobile tablet:p-s-not-mobile h-[50%]'
        style={{ backgroundColor: accentColor }}
      >
        <Title text={description || ''} />
      </div>
    </div>
  );
};
