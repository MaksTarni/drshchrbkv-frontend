import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { MainPageConnector } from '../pages/main-page';
import { DimensionsProvider } from '../shared/hooks/dimensions';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DimensionsProvider>
      <MainPageConnector />
    </DimensionsProvider>
  </StrictMode>,
);
