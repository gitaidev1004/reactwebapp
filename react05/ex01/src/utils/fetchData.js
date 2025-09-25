//표준 Fetch API 사용 예시.
export async function fetchData() {
  const res = await fetch("/api/data");
  if (!res.ok) throw new Error("네트워크 오류");
  return res.json();
}