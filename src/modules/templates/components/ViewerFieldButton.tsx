import { Box, Button, colors, Typography, useTheme } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface viewerFieldButtonProps {
	label: string;
	value: string;
	onDelete: () => void;
}
export default function ViewerFieldButton({
	label,
	value,
	onDelete,
}: viewerFieldButtonProps) {
	const theme = useTheme();

	return (
		<>
			<Button
				variant="outlined"
				sx={{
					marginX: 1,
					color: theme.palette.primary.main,
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					justifyContent: 'flex-start',
					height: 110,
					cursor: 'pointer',
					borderRadius: '4px',
					border: 'none',
					backgroundColor: theme.palette.background.default,
					position: 'relative',
					'&:hover': {
						backgroundColor: theme.palette.primary.dark,
						transition: 'background-color 0.3s ease-in-out',
					},
					'&:hover .hoverMessage': {
						visibility: 'visible',
						opacity: 1,
					},
					'&:hover .trashIconRectangle': {
						visibility: 'visible',
						opacity: 1,
						transition: 'visibility 0.3s, opacity 0.3s ease-in-out',
					},
				}}
			>
				<Typography
					variant="body1"
					sx={{
						textTransform: 'capitalize',
						marginBottom: 1,
					}}
				>
					{label}
				</Typography>
				<Box
					sx={{
						border: '1px solid',
						borderColor: 'divider',
						borderRadius: '6px',
						flexDirection: 'column',
						alignItems: 'flex-start',
						padding: 2,
						marginX: 2,
						color: theme.palette.primary.main,
						width: '96%',
						display: 'flex',
						justifyContent: 'center',
						height: 10,
						textTransform: 'capitalize',
					}}
				>
					{value}
				</Box>

				{/* Trash Icon that appears on hover */}
				<Box
					className="trashIconRectangle"
					onClick={(e) => {
						// Prevents parent click events
						e.stopPropagation();
						onDelete();
					}}
					sx={{
						position: 'absolute',
						top: 0,
						right: 0,
						backgroundColor: colors.red[600],
						width: 50,
						height: '100%',
						cursor: 'pointer',
						borderRadius: '4px',
						paddingY: 5,
						visibility: 'hidden',
						opacity: 0,
						'&:hover': {
							backgroundColor: colors.red[400],
							transition: 'background-color 0.3s ease-in-out',
						},
					}}
				>
					<DeleteIcon
						sx={{
							justifyContent: 'center',
							alignItems: 'center',
							right: 0,
							fontSize: 30,
							color: 'white',
						}}
					/>
				</Box>

				{/* Message that appears on hover */}
				<Box
					className="hoverMessage"
					sx={{
						position: 'absolute',
						bottom: '40px',
						left: '50%',
						transform: 'translateX(-50%)',
						opacity: 0,
						transition: 'visibility 0s, opacity 0.3s linear',
						fontSize: '12px',
						padding: '5px',
						borderRadius: '6px',
					}}
				>
					<Typography
						variant="caption"
						sx={{
							color: theme.palette.primary.main,
							textTransform: 'capitalize',
						}}
					>
						Click for properties
					</Typography>
				</Box>
			</Button>
		</>
	);
}
