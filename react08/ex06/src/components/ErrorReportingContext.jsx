import React, { createContext, useContext } from 'react';
import { initGlobalErrorHandler } from './globalErrorHandler';

const ctx = createContext(null);

export function ErrorReportingProvider({ children }) {
  const handler = initGlobalErrorHandler({
    reportUrl: '/api/log/client-error',
    getContext: () => ({ url: location.href, userAgent: navigator.userAgent }),
  });
  return <ctx.Provider value={handler}>{children}</ctx.Provider>;
}

export const useErrorReporter = () => useContext(ctx);
