import { Box, Switch } from '@mui/material';
import { useThemeStore } from '../../common/stores/themeStore';

export default function FormBuilderView() {
	const { isLight, toggleTheme } = useThemeStore();
	return (
		<Box
			sx={{
				background: {
					xs: 'orange',
					lg: 'red',
					xl: 'green',
					xl2: 'purple',
					xl3: 'pink',
					xl4: 'black',
				},
			}}
		>
			<Switch color="default" onChange={toggleTheme} checked={!isLight} />
		</Box>
	);
}
