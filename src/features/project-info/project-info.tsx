import { ProjectInfoBlock } from '../../shared/components/ogranisms/project-info-block';
import type { TScreenData } from './types';

type Props = {
  screenData: TScreenData[];
};

export const ProjectInfo = ({ screenData }: Props) => {
  return screenData?.map(item => {
    return (
      <ProjectInfoBlock
        key={item.title}
        title={item.title}
        firstColumnMarkdown={item.firstColumnMarkdown}
        secondColumnMarkdown={item.secondColumnMarkdown}
        firstImage={item.firstImage}
        firstMobileImage={item.firstMobileImage}
        secondImage={item.secondImage}
        secondMobileImage={item.secondMobileImage}
      />
    );
  });
};
