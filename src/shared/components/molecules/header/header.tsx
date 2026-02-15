export type Props = { leftText?: string; rightText?: string };

export const Header = ({ leftText = 'index', rightText = 'info' }: Props) => {
  return (
    <header className='flex justify-between p-5'>
      <p className='font-Inter font-normal text-text/[20px] tracking-[-0.48px] cursor-pointer'>
        {leftText}
      </p>
      <p className='font-Inter font-normal text-text/[20px] tracking-[-0.48px] cursor-pointer'>
        {rightText}
      </p>
    </header>
  );
};
