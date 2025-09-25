import React, { createContext, useReducer, useContext, useMemo } from 'react';
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
function todoReducer(state, action) {
  switch(action.type) {
    case 'ADD': return [...state, { id: Date.now(), text: action.payload, done: false }];
    case 'TOGGLE': return state.map(t => t.id === action.payload ? { ...t, done: !t.done } : t);
    case 'REMOVE': return state.filter(t => t.id !== action.payload);
    default: throw new Error('Unknown action: ' + action.type);
  }
}
export function TodoProvider({ children, initial = [] }) {
  const [state, dispatch] = useReducer(todoReducer, initial);
  // dispatch는 stable하지만 state는 바뀌므로 두 Context 분리하면 불필요 재렌더 최소화
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
export const useTodoState = () => {
  const ctx = useContext(TodoStateContext);
  if (ctx === undefined) throw new Error('useTodoState must be used within TodoProvider');
  return ctx;
};
export const useTodoDispatch = () => {
  const ctx = useContext(TodoDispatchContext);
  if (ctx === undefined) throw new Error('useTodoDispatch must be used within TodoProvider');
  return ctx;
};