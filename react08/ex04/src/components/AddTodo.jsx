import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo } from './api';

export default function AddTodo() {
  const [title, setTitle] = useState('');
  const qc = useQueryClient();

  const mutation = useMutation({
    mutationFn: createTodo,
    onMutate: async (newTodo) => {
      await qc.cancelQueries(['todos']);
      const previous = qc.getQueryData(['todos']);
      qc.setQueryData(['todos'], (old = []) => [{ id: 'tmp-' + Date.now(), ...newTodo }, ...old]);
      return { previous };
    },
    onError: (err, newTodo, context) => {
      if (context?.previous) qc.setQueryData(['todos'], context.previous);
    },
    onSettled: () => {
      qc.invalidateQueries(['todos']);
    },
  });

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    mutation.mutate({ title });
    setTitle('');
  };

  return (
    <form onSubmit={submit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit" disabled={mutation.isLoading}>추가</button>
      {mutation.isError && <div role="alert">에러: {String(mutation.error?.message)}</div>}
    </form>
  );
}
