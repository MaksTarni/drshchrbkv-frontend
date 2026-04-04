export type Props = { text: string };

export const MenuTitle = ({ text }: Props) => {
  return (
    <span className='font-Figma font-medium text-text-secondary text-header-mobile tablet:text-header-tablet leading-header-mobile tablet:leading-header-tablet desktop:leading-7.5 tracking-header-mobile tablet:tracking-header-tablet desktop:tracking-[-0.75px]'>
      {text}
    </span>
  );
};
