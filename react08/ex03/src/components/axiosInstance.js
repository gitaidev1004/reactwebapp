import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // JSONPlaceholder 사용
  timeout: 10000,
});

// 요청 인터셉터 (여기서는 토큰 없음)
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// 응답 인터셉터 (간단)
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default api;
