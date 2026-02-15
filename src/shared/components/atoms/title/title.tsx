export type Props = {
  text: string;
};

export const Title = ({ text }: Props) => {
  return (
    <span className='font-Figma font-medium text-header-mobile leading-header-mobile md:text-header-tablet md:leading-header-tablet lg:text-header-desktop lg:leading-header-desktop tracking-header-mobile md:tracking-header-tablet lg:tracking-header-desktop text-pretty'>
      {text}
    </span>
  );
};
