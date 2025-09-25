// ❌ 잘못된 예시
if (isLogin) {
  const [user, setUser] = useState(null); // 조건문 안에서 훅 사용 금지
}// ✅ 올바른 예시
const [user, setUser] = useState(null);
if (isLogin) {
  // 조건문 안에서는 상태값만 사용
}