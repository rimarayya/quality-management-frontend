import { create } from 'zustand';

interface ICounterStore {
	isLight: boolean;
	toggleTheme: () => void;
}

export const useThemeStore = create<ICounterStore>((set) => ({
	isLight: false,
	toggleTheme: () => set((state) => ({ isLight: !state.isLight })),
}));
