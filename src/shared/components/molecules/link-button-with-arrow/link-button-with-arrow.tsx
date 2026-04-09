import { ArrowIcon } from '../../atoms/icons';

type Variant = 'accentText' | 'subtitle';

export type Props = { text: string; link: string; variant?: Variant };

export const LinkButtonWithArrow = ({
  text,
  link,
  variant = 'subtitle',
}: Props) => {
  const words = text.trim().split(' ');
  const lastWord = words.pop();
  return (
    <a href={link}>
      <span
        className={`font-Inter ${variant === 'accentText' ? 'text-text-primary' : 'text-text-secondary'}  font-normal text-text leading-text tracking-text text-pretty hover:text-text-accent active:text-text-primary transition-colors duration-200 ease-in-out`}
      >
        {words.join(' ')}{' '}
        <span className='inline-flex items-center gap-0.75 whitespace-nowrap'>
          {lastWord} <ArrowIcon />
        </span>
      </span>
    </a>
  );
};
