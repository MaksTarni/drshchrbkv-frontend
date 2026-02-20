import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from 'react-router-dom';

import { MainPageConnector } from '../../pages/main-page';
import { StubPageConnector } from '../../pages/stub-page';

export const Routing = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <MainPageConnector />,
    },
    {
      path: '*',
      element: <StubPageConnector />,
    },
  ];
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
