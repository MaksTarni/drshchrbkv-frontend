export type Props = { text: string };

export const Subtitle = ({ text }: Props) => {
  return (
    <span className='font-Inter text-text leading-text tracking-text text-text-secondary'>
      {text}
    </span>
  );
};
