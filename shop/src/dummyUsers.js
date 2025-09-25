// dummyUsers.js
import axios from "axios";

const BASE_URL = "http://localhost:8003"; // Spring Boot 서버 주소

// 30개의 더미 유저 만들기
const users = Array.from({ length: 50 }, (_, i) => ({
  username: `dummy${i + 1}`,
  password: `pass${i + 1}`,
  email: `dummy${i + 1}@example.com`,
}));

const registerUser = async (user) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/users/register`, user);
    console.log(`✅ 등록 완료: ${user.username}`);
  } catch (err) {
    console.error(`❌ 실패: ${user.username}`, err.response?.data || err.message);
  }
};

const registerAll = async () => {
  for (const user of users) {
    await registerUser(user);
  }
};

registerAll();
