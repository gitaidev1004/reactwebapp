export function chatReducer(state, action) {
  switch (action.type) {
    case 'INIT': return { ...state, messages: action.payload || [] };
    case 'ADD_MESSAGES': {
      const map = new Map(state.messages.map(m => [m.id, m]));
      for (const msg of action.payload) if (!map.has(msg.id)) map.set(msg.id, msg);
      const messages = Array.from(map.values()).sort((a,b) => a.ts - b.ts);
      return { ...state, messages };
    }
    case 'ADD_MESSAGE': {
      if (state.messages.some(m=>m.id===action.payload.id)) return state;
      return { ...state, messages: [...state.messages, action.payload] };
    }
    case 'REPLACE_TEMP': {
      const messages = state.messages.map(m => m.id === action.payload.tempId ? action.payload.newMessage : m);
      return { ...state, messages };
    }
    case 'MARK_READ': {
      const messages = state.messages.map(m => ({ ...m, read: m.read || action.payload.readUntil >= m.ts }));
      return { ...state, messages };
    }
    default: return state;
  }
}
