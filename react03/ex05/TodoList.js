import React from 'react';
import { useTodoState, useTodoDispatch } from './TodosContext';
export default function TodoList() {
  const todos = useTodoState();
  const dispatch = useTodoDispatch();
  return (
    <ul>
      {todos.map(t => (
        <li key={t.id}>
          <label>
            <input type="checkbox" checked={t.done} onChange={() => dispatch({type:'TOGGLE', payload:t.id})}/>
            {t.text}
          </label>
          <button onClick={() => dispatch({type:'REMOVE', payload:t.id})}>삭제</button>
        </li>
      ))}
    </ul>
  );
}