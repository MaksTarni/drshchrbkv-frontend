import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from 'react-router-dom';

import { MainPageConnector } from '../../pages/main-page';
import { StubPageConnector } from '../../pages/stub-page';
import { EmexPageConnector } from '../../pages/emex-page';
import { ErrorFallback } from '../components/ogranisms/error-fallback';
import { PasswordPageConnector } from '../../pages/password-page';
import { AuthLayout } from './layouts';
import { AuthProvider } from './context';
import { ProtectedRoute } from './guard';
import { EmexSellerHubPageConnector } from '../../pages/emex-seller-hub-page/emex-seller-hub-page-connector';

export const Routing = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <MainPageConnector />,
      ErrorBoundary: ErrorFallback,
    },
    {
      path: '*',
      element: <StubPageConnector />,
      ErrorBoundary: ErrorFallback,
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        { index: true, element: <PasswordPageConnector /> },
        {
          path: 'companies/emex',
          element: (
            <ProtectedRoute>
              <EmexPageConnector />
            </ProtectedRoute>
          ),
          ErrorBoundary: ErrorFallback,
        },
        {
          path: 'companies/emex-seller-hub',
          element: (
            <ProtectedRoute>
              <EmexSellerHubPageConnector />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};
