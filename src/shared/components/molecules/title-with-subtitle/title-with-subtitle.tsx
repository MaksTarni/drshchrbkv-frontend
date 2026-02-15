import { Subtitle } from '../../atoms/subtitle';
import { Title } from '../../atoms/title';

export type Props = {
  title: string;
  subtitle: string;
};

export const TitleWithSubtitle = ({ subtitle, title }: Props) => {
  return (
    <div className='flex flex-col items-start justify-start gap-0.75'>
      <Title text={title} />

      <Subtitle text={subtitle} />
    </div>
  );
};
