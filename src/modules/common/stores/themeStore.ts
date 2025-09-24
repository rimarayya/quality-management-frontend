import { create } from 'zustand';

interface ThemeStore {
	isLight: boolean;
	toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
	isLight: true,
	toggleTheme: () => set((state) => ({ isLight: !state.isLight })),
}));
