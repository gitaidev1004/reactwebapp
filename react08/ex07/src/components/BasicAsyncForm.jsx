import React, { useState, useRef } from 'react';

export default function BasicAsyncForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [meta, setMeta] = useState({ submitting: false, error: null });
  const abortRef = useRef(null);

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (meta.submitting) return;
    setMeta({ submitting: true, error: null });

    const controller = new AbortController();
    abortRef.current = controller;
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        signal: controller.signal,
      });
      clearTimeout(timeout);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      console.log('로그인 성공', data);
      alert('로그인 성공!');
    } catch (err) {
      if (err.name === 'AbortError') {
        setMeta({ submitting: false, error: new Error('요청이 취소되었습니다(타임아웃).') });
        return;
      }
      setMeta({ submitting: false, error: err });
    } finally {
      abortRef.current = null;
    }
  };

  return (
    <form onSubmit={onSubmit} aria-busy={meta.submitting}>
      <label>
        이메일
        <input name="email" value={form.email} onChange={onChange} type="email" required />
      </label>
      <label>
        비밀번호
        <input name="password" value={form.password} onChange={onChange} type="password" required />
      </label>
      <button type="submit" disabled={meta.submitting}>
        {meta.submitting ? '제출 중…' : '로그인'}
      </button>
      {meta.error && <div role="alert" style={{ color: 'red' }}>{meta.error.message}</div>}
    </form>
  );
}
