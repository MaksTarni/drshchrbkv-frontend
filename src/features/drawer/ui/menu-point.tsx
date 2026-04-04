import { Link, type LinkProps } from 'react-router-dom';

export type Props = LinkProps & { text: string };

export const MenuPoint = ({ text, ...rest }: Props) => {
  return (
    <Link
      {...rest}
      className='font-Figma font-medium text-header-mobile tablet:text-header-tablet desktop:text-header-desktop leading-header-mobile tablet:leading-header-tablet desktop:leading-header-desktop tracking-header-mobile tablet:tracking-header-tablet desktop:tracking-header-desktop cursor-pointer hover:text-text-accent active:text-text-primary transition-colors duration-200 ease-in-out'
    >
      {text}
    </Link>
  );
};
