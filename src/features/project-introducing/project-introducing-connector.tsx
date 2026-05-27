import { useMemo } from 'react';
import { useEmexIntro } from '../../entities/emex-intro/use-emex-intro';
import { ProjectIntroducing } from './project-introducing';
import { mapDataToUI } from './utils';
import { resolveImageByBreakpoint } from '../../shared/utils';
import { useDimensions } from '../../shared/hooks/dimensions';

export const ProjectIntroducingConnector = () => {
  const breakpoints = useDimensions();
  const { data, isLoading } = useEmexIntro();

  const screenData = useMemo(() => mapDataToUI(data), [data]);

  const resolvedImage = resolveImageByBreakpoint({
    defaultImage: screenData?.desktopImage,
    mobileImage: screenData.mobileImage,
    tabletImage: screenData.tabletImage,
    breakpoints,
  });

  if (isLoading) {
    return null;
  }

  return (
    <ProjectIntroducing
      screenData={screenData}
      image={resolvedImage}
    />
  );
};
