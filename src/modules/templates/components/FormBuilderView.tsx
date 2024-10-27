import { Box } from '@mui/material';

export default function FormBuilderView() {
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
			Form builder view
		</Box>
	);
}
