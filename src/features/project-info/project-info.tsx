import { ProjectInfoBlock } from '../../shared/components/ogranisms/project-info-block';
import { useDimensions } from '../../shared/hooks/dimensions';
import { resolveImageByBreakpoint } from '../../shared/utils';
import type { TScreenData } from './types';

type Props = {
  screenData: TScreenData[];
};

export const ProjectInfo = ({ screenData }: Props) => {
  const breakpoints = useDimensions();

  return screenData?.map((item, index) => {
    const resolvedFirstImage = resolveImageByBreakpoint({
      defaultImage: item?.firstImage,
      mobileImage: item.firstMobileImage,
      tabletImage: item.firstTabletImage,
      breakpoints,
    });

    const resolvedSecondImage =
      item?.secondImage &&
      resolveImageByBreakpoint({
        defaultImage: item?.secondImage,
        mobileImage: item?.secondMobileImage,
        tabletImage: item?.secondTabletImage,
        breakpoints,
      });

    return (
      <ProjectInfoBlock
        key={item.title}
        title={item.title}
        firstColumnMarkdown={item.firstColumnMarkdown}
        secondColumnMarkdown={item.secondColumnMarkdown}
        firstImage={resolvedFirstImage}
        secondImage={resolvedSecondImage}
        isLast={index === screenData.length - 1}
      />
    );
  });
};
