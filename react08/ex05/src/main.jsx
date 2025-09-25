import React from 'react';
import { createRoot } from 'react-dom/client';
import { SWRConfig } from 'swr';
import App from './App';

const fetcher = (url) => fetch(url).then(res => {
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher, dedupingInterval: 2000 }}>
      <App />
    </SWRConfig>
  </React.StrictMode>
);
