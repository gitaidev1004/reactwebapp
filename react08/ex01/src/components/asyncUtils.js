export async function fetchJSON(url, opts = {}) {
  const res = await fetch(url, opts);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export function withTimeout(ms, controller = new AbortController()) {
  const id = setTimeout(() => controller.abort(), ms);
  const clear = () => clearTimeout(id);
  return { controller, clear };
}

// then/catch 사용 예
fetchJSON('/api/user/1')
  .then(data => console.log('then:', data))
  .catch(err => console.error('catch:', err))
  .finally(() => console.log('done'));

// async/await + try/catch 사용 예
export async function getUserAndPosts(userId) {
  try {
    const [user, posts] = await Promise.all([
      fetchJSON(`/api/users/${userId}`),
      fetchJSON(`/api/users/${userId}/posts`),
    ]);
    return { user, posts };
  } catch (e) {
    throw e;
  }
}

// 가장 빠른 결과 우선의 사용 예
export async function fetchFirstAvailable(urls) {
  const promises = urls.map(u => fetchJSON(u));
  return Promise.any(promises); // 모두 실패 시 AggregateError
}

// 타임아웃 + 취소 사용 예
export async function fetchWithTimeout(url, ms = 5000) {
  const { controller, clear } = withTimeout(ms);
  try {
    const json = await fetchJSON(url, { signal: controller.signal });
    clear();
    return json;
  } finally {
    clear();
  }
}
