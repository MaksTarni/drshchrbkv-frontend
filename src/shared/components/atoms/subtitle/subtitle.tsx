import type { ReactNode } from 'react';

export type Props = {
  text: string | ReactNode;
  color?: string;
  onClick?: VoidFunction;
};

export const Subtitle = ({ text, color, onClick }: Props) => {
  return (
    <span
      className={`font-Inter text-text leading-text tracking-text ${color || 'text-text-secondary'} ${onClick && 'cursor-pointer'}`}
      onClick={onClick}
    >
      {text}
    </span>
  );
};
