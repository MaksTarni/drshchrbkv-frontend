import type { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
  onClick: VoidFunction;
};

export const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className='font-Inter font-normal text-text leading-text tracking-text cursor-pointer hover:text-text-accent active:text-text-primary transition-colors duration-200 ease-in-out'
      onClick={onClick}
    >
      {children}
    </button>
  );
};
