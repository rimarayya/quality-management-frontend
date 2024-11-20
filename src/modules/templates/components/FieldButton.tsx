import { Box, Button, SvgIconProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface FiledButtonProps {
	Icon: React.FC<SvgIconProps>;
	text: string;
	height: number;
	iconSize: number;
}

export default function FieldButton({
	Icon,
	text,
	height,
	iconSize,
}: FiledButtonProps) {
	const theme = useTheme();

	const mainColor = theme.palette.primary.main;
	const hoverColor = theme.palette.primary.dark;

	return (
		<Button
			variant="outlined"
			sx={[
				(theme) => ({
					color: mainColor,
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: height,
					cursor: 'pointer',
					borderRadius: 1,
					borderColor: 'divider',
					boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.12)',
					backgroundColor: 'white',
					...theme.applyStyles('dark', {
						backgroundColor: '#121212',
						color: 'white',
					}),
					'&:hover': {
						backgroundColor: hoverColor,
						transition: 'background-color 0.3s ease-in-out',
						...theme.applyStyles('dark', {
							backgroundColor: '#222222',
							transition: 'background-color 0.3s ease-in-out',
						}),
					},
				}),
			]}
		>
			<Box
				sx={{
					textAlign: 'center',
					width: 100,
				}}
			>
				<Icon
					sx={[
						(theme) => ({
							color: mainColor,
							fontSize: iconSize,
							...theme.applyStyles('dark', {
								color: 'white',
							}),
						}),
					]}
				/>
				<Box sx={{ fontSize: 13, textTransform: 'capitalize' }}>
					{text}
				</Box>
			</Box>
		</Button>
	);
}
