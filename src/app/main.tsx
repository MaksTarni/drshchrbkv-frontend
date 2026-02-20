import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { DimensionsProvider } from '../shared/hooks/dimensions';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Routing } from '../shared/process';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <DimensionsProvider>
        <Routing />
      </DimensionsProvider>
    </QueryClientProvider>
  </StrictMode>,
);
