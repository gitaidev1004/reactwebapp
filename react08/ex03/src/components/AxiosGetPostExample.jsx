import React, { useEffect, useState } from 'react';
import api from './axiosInstance';

export default function AxiosGetPostExample() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  // GET 요청: JSONPlaceholder posts 가져오기
  useEffect(() => {
    setLoading(true);
    api.get('/posts') // https://jsonplaceholder.typicode.com/posts
      .then((res) => setItems(res.data.slice(0, 10))) // 상위 10개만 표시
      .catch((error) => setErr(error))
      .finally(() => setLoading(false));
  }, []);

  // POST 요청: JSONPlaceholder에 새 post 생성
  const createItem = async (payload) => {
    try {
      const res = await api.post('/posts', payload); // 자동 JSON 변환
      // JSONPlaceholder는 실제 DB에 저장하지 않지만 response는 반환
      setItems((prev) => [res.data, ...prev]);
    } catch (error) {
      console.error('생성 실패', error);
    }
  };

  if (loading) return <div>로딩...</div>;
  if (err) return <div role="alert">오류: {String(err.message)}</div>;
  return (
    <div>
      <button onClick={() => createItem({ title: '새 아이템', body: '내용', userId: 1 })}>
        아이템 생성
      </button>
      <ul>
        {items.map((it) => (
          <li key={it.id}>
            {it.id}. {it.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
