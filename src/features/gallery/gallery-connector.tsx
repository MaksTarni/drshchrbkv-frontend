import { useMemo, useState } from 'react';
import { useCraftItems } from '../../entities/craft-items';
import { Gallery } from './gallery';
import { mapDataToUI } from './utils';
import { Skeleton } from './skeleton';

export const GalleryConnector = () => {
  const [loadedForKey, setLoadedForKey] = useState<string | null>(null);

  const { data, isLoading } = useCraftItems();

  const mappedData = useMemo(() => mapDataToUI(data), [data]);

  const galleryKey = useMemo(
    () => mappedData?.gallery.map(i => i.url).join(',') ?? null,
    [mappedData],
  );

  const imagesLoaded = galleryKey !== null && loadedForKey === galleryKey;

  if (isLoading || !mappedData) {
    return <Skeleton />;
  }

  return (
    <>
      {!imagesLoaded && <Skeleton />}
      <div style={!imagesLoaded ? { display: 'none' } : undefined}>
        <Gallery
          key={galleryKey ?? undefined}
          screenData={mappedData}
          onAllImagesLoaded={() => setLoadedForKey(galleryKey)}
        />
      </div>
    </>
  );
};
