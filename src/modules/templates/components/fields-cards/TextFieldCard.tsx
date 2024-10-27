import TextFieldsIcon from '@mui/icons-material/TextFields';
import { Box, Card } from '@mui/material';

export default function TextFieldCard() {
	return (
		<Card
			variant="outlined"
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: 120,
				cursor: 'pointer',
				borderRadius: 1,
			}}
		>
			<Box
				sx={{
					textAlign: 'center',
					width: 100,
				}}
			>
				<TextFieldsIcon sx={{ fontSize: 60 }} />
				<Box sx={{ fontSize: 16 }}>Text</Box>
			</Box>
		</Card>
	);
}
