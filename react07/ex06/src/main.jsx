import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { ErrorBoundary } from './components/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
