import { Link } from 'react-router-dom';

export type Props = {
  leftText?: string;
  rightText?: string;
  leftTextLink?: string;
  rightTextLink?: string;
};

export const Header = ({
  leftText,
  rightText,
  leftTextLink,
  rightTextLink,
}: Props) => {
  return (
    <header className='absolute top-0 left-0 right-0 flex justify-between p-5'>
      <Link
        to={leftTextLink || '/'}
        className='font-Inter font-normal text-text/[20px] tracking-text cursor-pointer'
      >
        {leftText}
      </Link>
      <Link
        to={rightTextLink || '/'}
        className='font-Inter font-normal text-text leading-header-mobile tracking-text cursor-pointer'
      >
        {rightText}
      </Link>
    </header>
  );
};
