import { createTheme, CssBaseline } from '@mui/material';
import AppRoutes from './modules/app/AppRoutes';
import { ThemeProvider } from '@emotion/react';

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xl2: true;
		xl3: true;
		xl4: true;
	}
}

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
});

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppRoutes />
		</ThemeProvider>
	);
}
