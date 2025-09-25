import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './components/postsSlice';
import { AuthProvider } from './contexts/AuthContext';

const qc = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={qc}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
