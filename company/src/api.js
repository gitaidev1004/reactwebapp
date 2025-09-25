// src/api.js
import axios from 'axios';
import { fetchAuth } from './auth';

const BASE_URL = "http://localhost:8003/api/";
const API = axios.create({ baseURL: BASE_URL });
const PRODUCT_URL = `${BASE_URL}products/`;
const NOTICE_URL = `${BASE_URL}notices/`;
const DATAROOM_URL = `${BASE_URL}dataroom/`;
const QNA_URL = `${BASE_URL}qna/`;

// -------------------- 공지사항 --------------------
export async function getNotices(page = 1) {
  const res = await fetch(`${NOTICE_URL}?page=${page}`);
  return await res.json();
}

export async function getNotice(id) {
  const res = await fetch(`${NOTICE_URL}${id}/`);
  return await res.json();
}

export async function createNotice(data) {
  const res = await fetch(NOTICE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
}

export async function updateNotice(id, data) {
  const res = await fetch(`${NOTICE_URL}${id}/`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
}

export async function deleteNotice(id) {
  await fetch(`${NOTICE_URL}${id}/`, { method: 'DELETE' });
}

// -------------------- 회원 --------------------
export const register = (data) =>
  fetch(`${BASE_URL}users/register/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((r) => r.json());

export const login = (data) =>
  fetch(`${BASE_URL}users/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((r) => r.json());

export const checkUsername = (username) =>
  fetch(`${BASE_URL}users/check-username/?username=${username}`).then((r) =>
    r.json()
  );

export const getProfile = () =>
  fetchAuth(`${BASE_URL}users/profile/`).then((r) => r.json());

export const getUserList = (page = 1) =>
  fetchAuth(`${BASE_URL}users/list/?page=${page}`).then((res) => res.json());

// -------------------- QnA --------------------
export async function getQuestions(page = 1) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${QNA_URL}questions/?page=${page}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await res.json();
}

export const getQuestion = (id) => {
  const token = localStorage.getItem('token');
  return axios.get(`${QNA_URL}questions/${id}/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createQuestion = (data, token) =>
  axios.post(`${QNA_URL}questions/`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const createAnswer = (data, token) =>
  axios.post(`${QNA_URL}answers/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

export async function deleteQuestion(id, token) {
  const res = await fetch(`${QNA_URL}questions/${id}/`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || '삭제 실패');
  }
}

// 답변 삭제
export async function deleteAnswer(id, token) {
  return fetch(`http://localhost:8003/api/qna/answers/${id}/`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

// 답변 수정
export async function updateAnswer(id, content, token) {
  return fetch(`http://localhost:8003/api/qna/answers/${id}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content }),
  }).then(res => res.json());
}


// -------------------- 상품 --------------------
export async function getProducts(page = 1) {
  const res = await fetch(`${PRODUCT_URL}?page=${page}`);
  if (!res.ok) throw new Error("❌ 상품 목록 불러오기 실패");
  const data = await res.json();
  return data;  // 전체 data 반환 (count, results 포함)
}

export async function getProductsByCategory() {
  const res = await fetch(`http://localhost:8003/api/products/by_category/`);
  if (!res.ok) throw new Error("❌ 카테고리별 상품 목록 불러오기 실패");
  return await res.json(); // { "침실": [...], "거실": [...], ... }
}

export const getProduct = (id) => {
  const token = localStorage.getItem('token');

  const headers = token
    ? { Authorization: `Bearer ${token}` }
    : {};  // ✅ 토큰 없으면 헤더 비움

  return axios.get(`${PRODUCT_URL}${id}/`, { headers });
};

export async function createProduct(formData) {
  const token = localStorage.getItem('access') || localStorage.getItem('token');
  const res = await axios.post(PRODUCT_URL, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
}

export async function updateProduct(id, data, token) {
  const res = await fetch(`${PRODUCT_URL}${id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('상품 수정 실패');
  }
  return await res.json();
}

export async function deleteProduct(id, token) {
  const res = await fetch(`${PRODUCT_URL}${id}/`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || '상품 삭제 실패');
  }
}

// -------------------- 자료실 --------------------
export async function getDatarooms(page = 1) {
  const res = await fetch(`${DATAROOM_URL}?page=${page}`);
  if (!res.ok) {
    throw new Error("❌ 자료실 목록 불러오기 실패");
  }
  const data = await res.json();
  return data; // { count, next, previous, results } 포함
}


export async function getDataroom(id) {
  const res = await fetch(`${DATAROOM_URL}${id}/`);
  return await res.json();
}

export async function createDataroom(FormData) {
  const res = await fetch(DATAROOM_URL, {
    method: 'POST',
    body: FormData,
  });
  return await res.json();
}

export async function updateDataroom(id, FormData) {
  const res = await fetch(`${DATAROOM_URL}${id}/`, {
    method: 'PATCH',
    body: FormData,
  });
  return await res.json();
}

export async function deleteDataroom(id) {
  const res = await fetch(`${DATAROOM_URL}${id}/`, { method: 'DELETE' });
  if (!res.ok) throw new Error('삭제 실패');
}
