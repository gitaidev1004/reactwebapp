import { create } from 'zustand';

export const useSelected = create(set => ({
  selectedId: null,
  select: (id) => set({ selectedId: id }),
  clear: () => set({ selectedId: null }),
}));
