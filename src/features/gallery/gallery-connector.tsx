import { useMemo } from 'react';
import { useCraftItems } from '../../entities/craft-items';
import { Gallery } from './gallery';
import { mapDataToUI } from './utils';

export const GalleryConnector = () => {
  const { data, isLoading } = useCraftItems();

  const mappedData = useMemo(() => mapDataToUI(data), [data]);

  if (isLoading) {
    return null;
  }

  return <Gallery screenData={mappedData} />;
};
