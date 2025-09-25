import { useEffect, useState } from 'react';

export default function BasicFetchDemo() {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState({ loading: false, error: null });

  useEffect(() => {
    const controller = new AbortController();
    const run = async () => {
      setState({ loading: true, error: null });
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setUsers(data);
      } catch (e) {
        if (e.name !== 'AbortError') setState({ loading: false, error: e });
        return; // abort 시에는 조용히 종료
      }
      setState({ loading: false, error: null });
    };
    run();
    return () => controller.abort(); // 언마운트 또는 재호출 시 취소
  }, []);

  if (state.loading) return <p>로딩 중…</p>;
  if (state.error) return <p>에러: {String(state.error.message || state.error)}</p>;
  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
