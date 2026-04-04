import { ArrowIcon } from '../../../shared/components/atoms/icons';

export type Props = { text: string };

export const LinkButton = ({ text }: Props) => {
  return (
    <span className='font-Inter text-text-secondary font-normal text-text leading-text tracking-text text-pretty hover:text-text-accent active:text-text-primary transition-colors duration-200 ease-in-out'>
      {text}
      <span className='inline-block ml-0.75 align-text-bottom'>
        <ArrowIcon />
      </span>
    </span>
  );
};
