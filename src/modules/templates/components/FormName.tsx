import { Box, useTheme } from '@mui/material';

interface ForNameProps {
	name: string;
}

export default function FormName({ name }: ForNameProps) {
	const theme = useTheme();

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Box
				sx={{
					marginX: 1,
					marginTop: 4,
					marginBottom: 1.5,
					color: theme.palette.primary.main,
					width: '50%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: 80,
					cursor: 'pointer',
					borderColor: theme.palette.divider,
					borderWidth: 1,
					borderStyle: 'solid',
					borderRadius: 10,
					backgroundColor: theme.palette.background.default,
					'&:hover': {
						backgroundColor: theme.palette.primary.dark,
						transition: 'background-color 0.3s ease-in-out',
					},
					fontSize: 20,
				}}
			>
				{name}
			</Box>
		</Box>
	);
}
