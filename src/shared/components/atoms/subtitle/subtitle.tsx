import type { ReactNode } from 'react';

export type Props = { text: string | ReactNode; className?: string };

export const Subtitle = ({ text, className }: Props) => {
  return (
    <span
      className={`font-Inter text-text leading-text tracking-text text-text-secondary ${className}`}
    >
      {text}
    </span>
  );
};
