import React from 'react';
import { useFetch } from './useFetch';

/**
 * useFetch 훅을 사용한 예제
 */
export default function FetchWithReducer({ url }) {
  const [{ data, loading, error }] = useFetch(url);

  if (loading) return <div>로딩 중…</div>;
  if (error) return <div role="alert">에러: {String(error.message)}</div>;
  return (
    <div>
      <h3>데이터:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
