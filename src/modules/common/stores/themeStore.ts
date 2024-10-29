import { create } from 'zustand';

interface ICounterStore {
	isLight: boolean;
	toggleTheme: () => void;
}

export const useThemeStore = create<ICounterStore>((set) => ({
	isLight: true,
	toggleTheme: () => set((state) => ({ isLight: !state.isLight })),
}));
