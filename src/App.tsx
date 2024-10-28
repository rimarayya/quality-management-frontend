import { colors, createTheme, CssBaseline } from '@mui/material';
import AppRoutes from './modules/app/AppRoutes';
import { ThemeProvider } from '@emotion/react';
import { useThemeStore } from './modules/common/stores/themeStore';

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xl2: true;
		xl3: true;
		xl4: true;
	}
}

export default function App() {
	const { isLight } = useThemeStore();

	const theme = createTheme({
		breakpoints: {
			keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xl2', 'xl3', 'xl4'],
			values: {
				xs: 0,
				sm: 600,
				md: 900,
				lg: 1024,
				xl: 1280,
				xl2: 1536,
				xl3: 1720,
				xl4: 1839,
			},
		},
		palette: {
			primary: {
				main: colors.grey[900],
				dark: colors.grey[100],
			},
			mode: isLight ? 'light' : 'dark',
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppRoutes />
		</ThemeProvider>
	);
}
