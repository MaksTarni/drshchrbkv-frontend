import { Link, type LinkProps } from 'react-router-dom';

export type Props = LinkProps & { text: string };

export const MenuPoint = ({ text, ...rest }: Props) => {
  return (
    <Link
      {...rest}
      className='font-Figma font-medium text-header2-moblie tablet:text-header2-tablet desktop:text-header2-desktop leading-header2-moblie tablet:leading-header2-tablet desktop:leading-header2-desktop tracking-header2-moblie tablet:tracking-header2-tablet desktop:tracking-header2-desktop cursor-pointer hover:text-text-accent active:text-text-primary transition-colors duration-200 ease-in-out'
    >
      {text}
    </Link>
  );
};
