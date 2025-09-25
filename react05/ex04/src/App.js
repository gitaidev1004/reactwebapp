import React from 'react';
import BasicTable from './components/BasicTable';
import SortableTable from './components/SortableTable';
import ServerSideSortTable from './components/ServerSideSortTable';
import FilteredTable from './components/FilteredTable';
import ClientPagination from './components/ClientPagination';
import ServerPagedTable from './components/ServerPagedTable';
import CursorPaginationTable from './components/CursorPaginationTable';
import VirtualizedTable from './components/VirtualizedTable';

export default function App() {
  const sampleData = Array.from({length: 100}, (_,i) => ({id:i+1, name:`User${i+1}`, age:20 + i%30, city:'Seoul'}));

  return (
    <div style={{ padding: 20 }}>
      <h1>5.4 테이블 구현 실습</h1>
      
      <h2>1. 기본 테이블</h2>
      <BasicTable />

      <h2>2. 클라이언트 정렬 테이블</h2>
      <SortableTable />

      <h2>3. 서버 사이드 정렬 테이블</h2>
      <ServerSideSortTable />

      <h2>4. 필터 테이블</h2>
      <FilteredTable data={sampleData} />

      <h2>5. 클라이언트 페이지네이션</h2>
      <ClientPagination items={sampleData} pageSize={10} />

      <h2>6. 서버 오프셋 페이징</h2>
      <ServerPagedTable />

      <h2>7. 커서 기반 페이징</h2>
      <CursorPaginationTable />

      <h2>8. 가상화 테이블 (대용량)</h2>
      <VirtualizedTable items={sampleData} />
    </div>
  );
}