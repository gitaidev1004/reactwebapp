import React, { memo, useCallback } from 'react';
import { useTodoDispatch } from '../context/TodoContext';
function TodoItem({ todo }) {
  const dispatch = useTodoDispatch();
  const toggle = useCallback(
    () => dispatch({ type: 'TOGGLE', id: todo.id }),
    [dispatch, todo.id]
  );
  const remove = useCallback(
    () => dispatch({ type: 'REMOVE', id: todo.id }),
    [dispatch, todo.id]
  );
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={todo.done} onChange={toggle} />
        <span className={todo.done ? 'done' : ''}>{todo.text}</span>
      </label>
      <button onClick={remove}>삭제</button>
    </li>
  );
}
export default memo(TodoItem); // props 같으면 재렌더 방지