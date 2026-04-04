import { type SVGProps } from 'react';
export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='currentColor'
    {...props}
  >
    <path
      fill='currentColor'
      d='M2 10h12.25L9 4.75 9.66 4l6.5 6.5-6.5 6.5-.66-.75L14.25 11H2v-1Z'
    />
  </svg>
);
