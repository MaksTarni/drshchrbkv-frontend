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
import { AuthLayout, RootLayout } from './layouts';
import { AuthProvider } from './context';
import { ProtectedRoute } from './guard';
import { EmexSellerHubPageConnector } from '../../pages/emex-seller-hub-page/emex-seller-hub-page-connector';
import { SberbankMetalPageConnector } from '../../pages/sberbank-metal-page';
import { AboutPageConnector } from '../../pages/about-page';
import { SberbankDepositPageConnector } from '../../pages/sberbank-deposit-page';

export const Routing = () => {
  const routes: RouteObject[] = [
    {
      element: <RootLayout />,
      children: [
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
          path: '/about',
          element: <AboutPageConnector />,
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
              ErrorBoundary: ErrorFallback,
            },
            {
              path: 'companies/sberbank-metal',
              element: (
                <ProtectedRoute>
                  <SberbankMetalPageConnector />
                </ProtectedRoute>
              ),
              ErrorBoundary: ErrorFallback,
            },
            {
              path: 'companies/sberbank-deposit',
              element: (
                <ProtectedRoute>
                  <SberbankDepositPageConnector />
                </ProtectedRoute>
              ),
              ErrorBoundary: ErrorFallback,
            },
          ],
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
