import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BasicList from './components/BasicList';
import SortFilterList from './components/SortFilterList';
import ServerFilterList from './components/ServerFilterList';
import FilterList from './components/FilterList';
import ClientPager from './components/ClientPager';
import ServerPager from './components/ServerPager';
import InfiniteList from './components/InfiniteList';
import VirtualList from './components/VirtualList';
import DnDList from './components/DnDList';
import GroupedList from './components/GroupedList';

// 테스트용 데이터
const sampleData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `User${i + 1}`,
  tags: ['tag1', 'tag2'],
  category: 'General'
}));

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: '20px' }}>
        <h1>React 5.5 목록 예제</h1>

        <BasicList />
        <hr />

        <SortFilterList data={sampleData} />
        <hr />

        <ServerFilterList />
        <hr />

        {/* 🔎 FilterList 실습 */}
        <FilterList />
        <hr />

        <ClientPager items={sampleData} pageSize={10} />
        <hr />

        <ServerPager pageSize={10} />
        <hr />

        <InfiniteList />
        <hr />

        <VirtualList items={sampleData} />
        <hr />

        <DnDList initial={sampleData.slice(0, 5)} />
        <hr />

        <GroupedList />
      </div>
    </QueryClientProvider>
  );
}
