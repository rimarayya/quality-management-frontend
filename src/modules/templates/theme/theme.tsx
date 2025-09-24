import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xl2: true;
		xl3: true;
		xl4: true;
	}
}

const breakpoints = {
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
};

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: colors.grey[900],
			dark: colors.grey[100],
		},
		divider: colors.grey[300],
		background: {
			default: '#ffffff',
		},
	},
	breakpoints,
});

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: colors.grey[100],
			dark: ' #2A2A2A',
		},
		divider: colors.grey[800],
		background: {
			default: colors.grey[900],
		},
	},
	breakpoints,
});
