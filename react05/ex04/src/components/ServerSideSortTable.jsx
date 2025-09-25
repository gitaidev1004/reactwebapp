// react05/ex04/src/components/ServerSideSortTable.jsx
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// 서버에서 데이터 가져오는 함수 (DummyJSON API 사용)
const fetchTableData = async ({ page }) => {
  const limit = 10; // 한 페이지에 10개
  const skip = (page - 1) * limit;

  const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  
  // DummyJSON 응답 구조: { products: [...], total: n, skip: n, limit: n }
  return {
    items: res.data.products.map(p => ({
      id: p.id,
      name: p.title,
      category: p.category,
      price: p.price,
    })),
    totalPages: Math.ceil(res.data.total / limit),
  };
};

export default function ServerSideSortTable() {
  const [page, setPage] = useState(1);

  // React Query v5: 단일 객체 사용
  const { data, isLoading, error } = useQuery({
    queryKey: ['tableData', page],
    queryFn: () => fetchTableData({ page }),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000, // 5분 캐시
  });

  return (
    <div>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>이름</th>
            <th>카테고리</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td colSpan="3">로딩 중...</td>
            </tr>
          )}
          {error && (
            <tr>
              <td colSpan="3">오류 발생: {error.message}</td>
            </tr>
          )}
          {data?.items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>₩{item.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지 네비게이션 */}
      <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
        <button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>
          이전
        </button>
        <span>페이지 {page}</span>
        <button onClick={() => setPage(p => p + 1)} disabled={page === data?.totalPages}>
          다음
        </button>
      </div>
    </div>
  );
}
