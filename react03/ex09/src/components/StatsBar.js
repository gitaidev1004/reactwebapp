import React, { useMemo } from 'react';
import { useTodos, useTodoDispatch } from '../context/TodoContext';
import { useWindowSize } from '../hooks/useWindowSize';
import { useFetch } from '../hooks/useFetch';
export default function StatsBar() {
  const todos = useTodos();
  const dispatch = useTodoDispatch();
  const size = useWindowSize();
  const stats = useMemo(() => {
    const total = todos.length;
    const done = todos.filter(t => t.done).length;
    const left = total - done;
    const percent = total ? Math.round((done / total) * 100) : 0;
    return { total, done, left, percent };
  }, [todos]);
  // 샘플 로딩(외부 API)
  const { data, loading, error, refetch } = useFetch(null);
  const loadSamples = () =>
    refetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
  const importSamples = () => {
    if (!Array.isArray(data)) return;
    const items = data.map(d => ({
      id: Date.now() + Math.random(),
      text: d.title,
      done: d.completed
    }));
    dispatch({ type: 'LOAD', items });
  };
  return (
    <div className="stats">
      <div>총 {stats.total}개 · 완료 {stats.done}개 ({stats.percent}%) · 남은 일 {stats.left}개</div>
      <div className="muted">창 크기: {size.width}×{size.height}</div>
      <div className="row" style={{ marginTop: 8 }}>
        <button onClick={loadSamples} disabled={loading}>샘플 불러오기</button>
        <button onClick={importSamples} disabled={!data || loading}>리스트에 추가</button>
        {error && <span className="error">불러오기 실패</span>}
      </div>
    </div>
  );
}