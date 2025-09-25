import React, { Suspense } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import Spinner from './Spinner';
import SafeFetchComponent from './components/SafeFetchComponent';
import SearchableList from './components/SearchableList';

const HeavyPage = React.lazy(() => import('./HeavyPage')); // 코드 분할

export default function App() {
  const handleQuery = (query) => {
    console.log('검색어:', query);
    // 실제 데이터 fetch 트리거 가능
  };

  return (
    <ErrorBoundary onReport={(info)=>console.log('Error reported:', info)}>
      <Suspense fallback={<div style={{padding:20}}>로딩중… <Spinner /></div>}>
        <HeavyPage />
        <h2>SafeFetchComponent 예제</h2>
        <SafeFetchComponent url="https://jsonplaceholder.typicode.com/users" />

        <h2>SearchableList 예제</h2>
        <SearchableList onQuery={handleQuery} />
      </Suspense>
    </ErrorBoundary>
  );
}
