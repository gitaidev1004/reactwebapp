import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // 필요시 스타일 추가

const root = createRoot(document.getElementById('root'));
root.render(<App />);
