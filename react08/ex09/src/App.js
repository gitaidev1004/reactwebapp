import React from 'react';
import Dashboard from './components/Dashboard';
import PostViewer from './components/PostViewer';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Dashboard />
      <PostViewer />
    </div>
  );
}
