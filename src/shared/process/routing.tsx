import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from 'react-router-dom';

import { MainPageConnector } from '../../pages/main-page';
import { StubPageConnector } from '../../pages/stub-page';
import { EmexPageConnector } from '../../pages/emex-page';
import { ErrorFallback } from '../components/ogranisms/error-fallback';

export const Routing = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <MainPageConnector />,
      ErrorBoundary: ErrorFallback,
    },
    {
      path: '/companies/emex',
      element: <EmexPageConnector />,
      ErrorBoundary: ErrorFallback,
    },
    {
      path: '*',
      element: <StubPageConnector />,
      ErrorBoundary: ErrorFallback,
    },
  ];
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
