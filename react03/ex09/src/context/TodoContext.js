import React, { createContext, useContext, useEffect, useReducer } from 'react';
const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);
const initial = [];
function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [{ id: Date.now(), text: action.text, done: false }, ...state];
    case 'TOGGLE':
      return state.map(t => t.id === action.id ? { ...t, done: !t.done } : t);
    case 'REMOVE':
      return state.filter(t => t.id !== action.id);
    case 'LOAD': // 외부 데이터 병합
      return [...action.items, ...state];
    case 'SET': // 전체 치환(필요시)
      return action.items;
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial, () => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : initial;
  });
  // 로컬 스토리지에 자동 동기화
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export const useTodos = () => {
  const v = useContext(TodoStateContext);
  if (v === null) throw new Error('useTodos must be used within TodoProvider');
  return v;
};

export const useTodoDispatch = () => {
  const v = useContext(TodoDispatchContext);
  if (v === null) throw new Error('useTodoDispatch must be used within TodoProvider');
  return v;
};