import type { ReactNode } from 'react';

type Variant = 'header' | 'header2';

export type Props = {
  text: string | ReactNode;
  className?: string;
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  header:
    'text-header-mobile leading-header-mobile tablet:text-header-tablet tablet:leading-header-tablet desktop:text-header-desktop desktop:leading-header-desktop tracking-header-mobile tablet:tracking-header-tablet desktop:tracking-header-desktop',
  header2:
    'text-header2-mobile leading-header2-mobile tablet:text-header2-tablet tablet:leading-header2-tablet desktop:text-header2-desktop desktop:leading-header2-desktop tracking-header2-mobile tablet:tracking-header2-tablet desktop:tracking-header2-desktop',
};

export const Title = ({ text, className, variant = 'header' }: Props) => {
  return (
    <h2
      className={`font-Figma font-medium ${variantClasses[variant]} text-pretty ${className ?? ''}`}
    >
      {text}
    </h2>
  );
};
