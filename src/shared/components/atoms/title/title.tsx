import type { ReactNode } from 'react';

type Variant = 'header' | 'header2';

export type Props = {
  text: string | ReactNode;
  className?: string;
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  header:
    'text-header-mobile leading-header-mobile md:text-header-tablet md:leading-header-tablet lg:text-header-desktop lg:leading-header-desktop tracking-header-mobile md:tracking-header-tablet lg:tracking-header-desktop',
  header2:
    'text-header2-mobile leading-header2-mobile md:text-header2-tablet md:leading-header2-tablet lg:text-header2-desktop lg:leading-header2-desktop tracking-header2-mobile md:tracking-header2-tablet lg:tracking-header2-desktop',
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
