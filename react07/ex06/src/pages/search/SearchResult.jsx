import { useLocation } from 'react-router-dom';

export default function SearchResult() {
  const q = new URLSearchParams(useLocation().search).get('q') || '';
  return (
    <div>
      <h2>🔍 검색 결과</h2>
      <p>검색어: {q || '없음'}</p>
    </div>
  );
}
