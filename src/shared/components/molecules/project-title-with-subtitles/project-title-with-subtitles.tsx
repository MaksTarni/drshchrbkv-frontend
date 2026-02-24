import { ProjectSubtitle } from '../../atoms/project-subtitle';
import { Title } from '../../atoms/title';

export type Props = {
  title: string;
  subtitles: string[];
};

export const ProjectTitleWithSubtitles = ({ subtitles, title }: Props) => {
  return (
    <div className='flex flex-col items-start justify-start'>
      <Title text={title} />

      {subtitles.map(subtitle => {
        return <ProjectSubtitle text={subtitle} />;
      })}
    </div>
  );
};
