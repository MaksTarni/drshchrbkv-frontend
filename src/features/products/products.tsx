import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '../../shared/components/atoms/box';
import { AccentTextWithSubtitle } from '../../shared/components/molecules/accent-text-with-subtitle';
import { TitleWithSubtitle } from '../../shared/components/molecules/title-with-subtitle/title-with-subtitle';
import { useDimensions, useXL } from '../../shared/hooks/dimensions';
import { getFullUrl, resolveImageByBreakpoint } from '../../shared/utils';
import { ProductsLayoutsFactory } from './layouts';
import type { TCompaniesData, TCourseData } from './types';
import { S_MOBILE, S_NOT_MOBILE } from '../../shared/indents';

type Props = {
  courseData: TCourseData;
  companiesData: TCompaniesData[];

  courseImage: TImage;

  projectsTitle: string;
  projectsSubtitle: string;
  projectsMetaLeft?: string;
  projectsMetaRight?: string;

  onAllImagesLoaded?: () => void;
};

export const Products = ({
  courseData,
  companiesData,
  courseImage,
  projectsSubtitle,
  projectsTitle,
  projectsMetaLeft,
  projectsMetaRight,
  onAllImagesLoaded,
}: Props) => {
  const breakpoints = useDimensions();
  const loadedCountRef = useRef(0);

  const xl = useXL();

  const totalImages = 1 + companiesData.length * 2;

  useEffect(() => {
    if (totalImages === 0) {
      onAllImagesLoaded?.();
    }
  }, [totalImages, onAllImagesLoaded]);

  const handleSettle = () => {
    loadedCountRef.current++;
    if (loadedCountRef.current >= totalImages) {
      onAllImagesLoaded?.();
    }
  };

  return (
    <div className='pt-30 md:pt-55'>
      <AccentTextWithSubtitle
        title={projectsMetaLeft || ''}
        subtitle={projectsMetaRight || ''}
      />

      <Box height={xl} />

      <TitleWithSubtitle
        title={courseData?.title}
        subtitle={courseData?.subtitle}
      />

      <Box height={breakpoints.isMobile ? S_MOBILE : S_NOT_MOBILE} />

      <Link
        to='/stub'
        className='custom-cursor'
      >
        <img
          src={getFullUrl(courseImage.url)}
          alt={courseImage.alt}
          className='w-full h-full object-cover'
          onLoad={handleSettle}
          onError={handleSettle}
        />
      </Link>

      <Box height={breakpoints.isMobile ? S_MOBILE : S_NOT_MOBILE} />

      <AccentTextWithSubtitle
        title={projectsTitle}
        subtitle={projectsSubtitle}
        withLine
      />

      {companiesData.map(item => {
        const resolvedImageA = resolveImageByBreakpoint({
          defaultImage: item.frameA,
          mobileImage: item.frameAMobile,
          tabletImage: item.frameATablet,
          breakpoints,
        });

        const resolvedImageB = resolveImageByBreakpoint({
          defaultImage: item.frameB,
          mobileImage: item.frameBMobile,
          tabletImage: item.frameBTablet,
          breakpoints,
        });
        return (
          <ProductsLayoutsFactory
            key={item.title}
            variant={item.variant}
            title={item.title}
            subtitle={item.subtitle}
            frameA={resolvedImageA}
            frameB={resolvedImageB}
            tagA={item.tagA}
            tagB={item.tagB}
            onImageLoad={handleSettle}
          />
        );
      })}
    </div>
  );
};
