import React from 'react';
import FilterableList from '../components/FilterableList';

export default function FilterPage() {
  return (
    <div>
      <h1>Filterable List</h1>
      <p>useSearchParams를 사용한 필터/정렬 예제입니다.</p>
      <FilterableList />
    </div>
  );
}
