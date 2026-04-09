import { ProjectInfoBlock } from '../../shared/components/ogranisms/project-info-block';
import { useDimensions } from '../../shared/hooks/dimensions';
import { resolveImageByBreakpoint } from '../../shared/utils';
import type { TScreenData } from './types';

type Props = {
  screenData: TScreenData[];
};

export const CloudpaymentWebsiteInfo = ({ screenData }: Props) => {
  const breakpoints = useDimensions();

  return screenData?.map((item, index) => {
    const resolvedFirstImage = resolveImageByBreakpoint({
      defaultImage: item?.desktopImages.firstImage,
      mobileImage: item.mobileImages.firstImage,
      tabletImage: item.tabletImages.firstImage,
      breakpoints,
    });

    const resolvedSecondImage =
      item?.desktopImages.secondImage &&
      resolveImageByBreakpoint({
        defaultImage: item?.desktopImages.secondImage,
        mobileImage: item?.mobileImages.secondImage,
        tabletImage: item?.tabletImages.secondImage,
        breakpoints,
      });

    const resolvedThirdImage =
      item?.desktopImages.thirdImage &&
      resolveImageByBreakpoint({
        defaultImage: item?.desktopImages.thirdImage,
        mobileImage: item?.mobileImages.thirdImage,
        tabletImage: item?.tabletImages.thirdImage,
        breakpoints,
      });

    const resolvedFourthImage =
      item?.desktopImages.fourthImage &&
      resolveImageByBreakpoint({
        defaultImage: item?.desktopImages.fourthImage,
        mobileImage: item?.mobileImages.fourthImage,
        tabletImage: item?.tabletImages.fourthImage,
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
        thirdImage={resolvedThirdImage}
        fourthImage={resolvedFourthImage}
        isLast={index === screenData.length - 1}
      />
    );
  });
};
