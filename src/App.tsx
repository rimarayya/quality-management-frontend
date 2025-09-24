import { CssBaseline } from '@mui/material';
import AppRoutes from './modules/app/AppRoutes';
import { ThemeProvider } from '@emotion/react';
import { useThemeStore } from './modules/common/stores/themeStore';
import { lightTheme, darkTheme } from './modules/templates/theme/theme';

export default function App() {
	const { isLight } = useThemeStore();

	return (
		<ThemeProvider theme={isLight ? lightTheme : darkTheme}>
			<CssBaseline />
			<AppRoutes />
		</ThemeProvider>
	);
}
