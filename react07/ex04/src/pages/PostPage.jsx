import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!postId) return;
    // 숫자 ID로 가정하고 검증 (요구한 대로)
    const id = Number(postId);
    if (!Number.isInteger(id) || id <= 0) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    setLoading(true);
    // 실 예제는 /api/posts/:id 로 호출 — 데모 환경에서는 404가 날 수 있음
    fetch(`/api/posts/${id}`)
      .then((r) => {
        if (r.status === 404) { setNotFound(true); return null; }
        return r.json();
      })
      .then((data) => {
        if (data) setPost(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [postId]);

  if (loading) return <div>로딩중…</div>;
  if (notFound) return <Navigate to="/404" replace />;

  // 만약 서버가 실제로 데이터를 반환하지 않는다면 임시 UI 제공
  if (!post) {
    return (
      <article>
        <h1>포스트 #{postId}</h1>
        <p>(데모) 서버에 실제 데이터가 없으면 여기에는 예시 텍스트가 표시됩니다.</p>
        <p>서버가 구현되어 있으면 post.title / post.body 를 렌더합니다.</p>
      </article>
    );
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </article>
  );
}
