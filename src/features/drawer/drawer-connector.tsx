import { useMemo } from 'react';
import { Drawer } from './drawer';
import { mapDataToUi } from './utils';
import { useGetDrawer } from '../../entities/drawer';

type Props = { onClose: VoidFunction };

export const DrawerConnector = ({ onClose }: Props) => {
  const { data } = useGetDrawer();

  const screenData = useMemo(() => mapDataToUi(data), [data]);

  return (
    <Drawer
      screenData={screenData}
      onClose={onClose}
    />
  );
};
