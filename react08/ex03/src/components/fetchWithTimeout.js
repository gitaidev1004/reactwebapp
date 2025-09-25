export async function fetchWithTimeout(url, { timeout = 5000, ...opts } = {}) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(url, { signal: controller.signal, ...opts });
    clearTimeout(id);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res;
  } finally {
    clearTimeout(id);
  }
}
