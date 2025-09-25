import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ErrorReportingProvider } from './components/ErrorReportingContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorReportingProvider>
      <App />
    </ErrorReportingProvider>
  </React.StrictMode>
);
