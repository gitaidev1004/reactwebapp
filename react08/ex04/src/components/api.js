const BASE_URL = 'https://jsonplaceholder.typicode.com';

// GET todos (상위 10개만)
export async function fetchTodos() {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error('Failed to fetch todos');
  const data = await res.json();
  return data.slice(0, 10);
}

// POST todo
export async function createTodo(payload) {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Create failed');
  return res.json();
}
