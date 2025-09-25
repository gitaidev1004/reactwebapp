import React, { useCallback, useEffect, useRef } from 'react';
import { useForm } from '../hooks/useForm';
import { useTodoDispatch } from '../context/TodoContext';
export default function TodoInput() {
  const { values, bind, reset } = useForm({ text: '' });
  const dispatch = useTodoDispatch();
  const inputRef = useRef(null);
  // 마운트 시 포커스
  useEffect(() => { inputRef.current?.focus(); }, []);
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const text = values.text.trim();
    if (!text) return;
    dispatch({ type: 'ADD', text });
    reset();
    inputRef.current?.focus();
  }, [values.text, dispatch, reset]);
  return (
    <form onSubmit={onSubmit} className="row">
      <input ref={inputRef} type="text" placeholder="할 일을 입력..." {...bind} />
      <button type="submit">추가</button>
    </form>
  );
}