import React from 'react';
import FetchExample from './components/FetchExample.jsx';
import AxiosGetPostExample from './components/AxiosGetPostExample.jsx';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>8.3 Fetch API 및 Axios 활용</h1>

      <h2>Fetch Example</h2>
      {/* JSONPlaceholder 무료 API 사용 예시 */}
      <FetchExample url="https://jsonplaceholder.typicode.com/posts/1" />

      <h2>Axios Example</h2>
      {/* 실제 API 서버 대신 /api/* 경로를 사용 → devServer 프록시 또는 목서버 필요 */}
      <AxiosGetPostExample />
    </div>
  );
}
