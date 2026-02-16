import { useMemo } from 'react';
import { useCraftItems } from '../../entities/craft-items';
import { Gallery } from './gallery';
import { mapDataToUI } from './utils';

export const GalleryConnector = () => {
  const { data } = useCraftItems();

  const mappedData = useMemo(() => mapDataToUI(data), [data]);

  return <Gallery screenData={mappedData} />;
};
