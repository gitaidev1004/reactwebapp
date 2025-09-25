import { useQuery } from '@tanstack/react-query';
import { useSelected } from '../stores/useSelected';

function fetchPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(r => r.json());
}

export default function PostViewer() {
  const selectedId = useSelected(s => s.selectedId);

  const { data: post, isLoading } = useQuery({
    queryKey: ['post', selectedId],
    queryFn: () => fetchPost(selectedId),
    enabled: !!selectedId,      // 선택되어 있을 때만 fetch
    staleTime: 1000 * 60,       // 1분
  });

  if (!selectedId) return <div>선택된 포스트 없음</div>;
  if (isLoading) return <div>로딩…</div>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
