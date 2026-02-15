export type Props = {
  text: string;
};

export const AccentText = ({ text }: Props) => {
  return (
    <span className='font-Inter text-text leading-text tracking-text text-text-primary'>
      {text}
    </span>
  );
};
