import type { ReactNode } from 'react';

export type Props = {
  text: string | ReactNode;
};

export const Title = ({ text }: Props) => {
  return (
    <h2 className='font-Figma font-medium text-header-mobile leading-header-mobile md:text-header-tablet md:leading-header-tablet lg:text-header-desktop lg:leading-header-desktop tracking-header-mobile md:tracking-header-tablet lg:tracking-header-desktop text-pretty'>
      {text}
    </h2>
  );
};
