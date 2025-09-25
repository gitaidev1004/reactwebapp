import React from 'react';
import { useForm } from 'react-hook-form';

export default function ServerResponseHandling() {
  const { register, handleSubmit, setError, setFocus, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const payload = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (payload?.errors) {
          const firstField = Object.keys(payload.errors)[0];
          Object.entries(payload.errors).forEach(([field, msg]) => {
            setError(field, { type: 'server', message: msg });
          });
          setFocus(firstField);
          return;
        }
        throw new Error(payload.message || `HTTP ${res.status}`);
      }
      reset();
      alert('등록 성공!');
    } catch (err) {
      console.error('등록 실패', err);
      setError('root', { type: 'server', message: err.message || '알 수 없는 오류' });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-disabled={isSubmitting}>
      <div>
        <label>이메일</label>
        <input {...register('email', { required: '이메일은 필수입니다' })} />
        {errors.email && <p role="alert">{errors.email.message}</p>}
      </div>
      <div>
        <label>비밀번호</label>
        <input type="password" {...register('password', { required: '비밀번호 필요', minLength: { value: 6, message: '6자 이상' } })} />
        {errors.password && <p role="alert">{errors.password.message}</p>}
      </div>

      {errors.root && <div role="alert" style={{ color: 'red' }}>{errors.root.message}</div>}

      <button type="submit" disabled={isSubmitting}>{isSubmitting ? '제출 중…' : '회원가입'}</button>
    </form>
  );
}
