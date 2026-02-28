import type { ReactNode } from 'react';

export type Props = {
  text: string | ReactNode;
  color?: string;
  className?: string;
  onClick?: VoidFunction;
};

export const Subtitle = ({ text, color, className, onClick }: Props) => {
  return (
    <span
      className={`font-Inter text-text leading-text tracking-text ${color || 'text-text-secondary'} ${onClick && 'cursor-pointer'} ${className}`}
      onClick={onClick}
    >
      {text}
    </span>
  );
};
