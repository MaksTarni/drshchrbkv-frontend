import { Subtitle } from '../../atoms/subtitle';
import { Title } from '../../atoms/title';

export type Props = {
  title: string;
  subtitle: string;
};

export const TitleWithSubtitle = ({ subtitle, title }: Props) => {
  return (
    <div className='flex flex-col items-start justify-start gap-xxs-mobile tablet:gap-xxs-not-mobile'>
      <Title text={title} />

      <Subtitle text={subtitle} />
    </div>
  );
};
