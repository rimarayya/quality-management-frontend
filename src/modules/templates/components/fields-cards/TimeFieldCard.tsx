import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, Card } from '@mui/material';

export default function TimeFieldCard() {
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
				<AccessTimeIcon sx={{ fontSize: 60 }} />
				<Box sx={{ fontSize: 16 }}>Time</Box>
			</Box>
		</Card>
	);
}
