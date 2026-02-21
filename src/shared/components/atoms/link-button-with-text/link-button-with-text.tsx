import type { ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

export type Props = LinkProps & {
  children: ReactNode;
};

export const LinkButtonWithText = ({ children, ...rest }: Props) => {
  return (
    <Link
      className='font-Inter font-normal text-text leading-text tracking-text cursor-pointer hover:text-text-accent active:text-text-primary transition-colors duration-200 ease-in-out'
      {...rest}
    >
      {children}
    </Link>
  );
};
