import React from 'react';
import { Box, Button, SvgIconProps, useTheme } from '@mui/material';

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

	return (
		<Button
			variant="outlined"
			sx={{
				color: theme.palette.primary.main,
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: height,
				cursor: 'pointer',
				borderRadius: 1,
				borderColor: theme.palette.divider,
				backgroundColor: theme.palette.background.default,
				'&:hover': {
					backgroundColor: theme.palette.primary.dark,
					transition: 'background-color 0.3s ease-in-out',
				},
			}}
		>
			<Box sx={{ textAlign: 'center', width: 100 }}>
				<Icon
					sx={{
						color: theme.palette.primary.main,
						fontSize: iconSize,
					}}
				/>
				<Box sx={{ fontSize: 13, textTransform: 'capitalize' }}>
					{text}
				</Box>
			</Box>
		</Button>
	);
}
