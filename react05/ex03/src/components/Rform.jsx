import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('유효한 이메일을 입력하세요').required('필수 입력'),
  password: yup.string().min(6, '6자 이상').required(),
});

export default function Rform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log('submit', data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <input {...register('email')} placeholder="email" />
      {errors.email && <span role="alert">{errors.email.message}</span>}

      <input {...register('password')} type="password" placeholder="password" />
      {errors.password && (
        <span role="alert">{errors.password.message}</span>
      )}

      <button type="submit">회원가입</button>
    </form>
  );
}
