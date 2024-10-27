import PinIcon from '@mui/icons-material/Pin';
import { Box, Card } from '@mui/material';

export default function NumberFieldCard() {
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
				<PinIcon sx={{ fontSize: 60 }} />
				<Box sx={{ fontSize: 16 }}>Number</Box>
			</Box>
		</Card>
	);
}
