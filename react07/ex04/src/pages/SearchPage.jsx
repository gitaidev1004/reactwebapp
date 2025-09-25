import React from 'react';
import SearchList from '../components/SearchList';

export default function SearchPage() {
  return (
    <div>
      <h1>Search</h1>
      <p>쿼리스트링으로 검색어와 페이지를 전달합니다.</p>
      <SearchList />
    </div>
  );
}
