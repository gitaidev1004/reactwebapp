import React, { useRef } from 'react';
import { useTodoDispatch } from './TodosContext';
export default function AddTodo() {
  const inputRef = useRef();
  const dispatch = useTodoDispatch();
  return (
    <form onSubmit={(e)=> { e.preventDefault(); const v = inputRef.current.value.trim(); if(v) { dispatch({type:'ADD', payload:v}); inputRef.current.value=''; } }}>
      <input ref={inputRef} />
      <button type="submit">추가</button>
    </form>
  );
}