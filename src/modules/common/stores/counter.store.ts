import { create } from "zustand";

interface ICounterStore {
  /**
   * Hello hi there here is the counter of the whole application.
   */
  count: number;
  increase: () => any;
  decrease: () => any;
}

export const useCounterStore = create<ICounterStore>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));
