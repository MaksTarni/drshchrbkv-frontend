export type Props = { text: string };

export const TextBody = ({ text }: Props) => {
  return (
    <span className='font-Inter text-text-primary font-normal text-text leading-text tracking-text text-pretty'>
      {text}
    </span>
  );
};
