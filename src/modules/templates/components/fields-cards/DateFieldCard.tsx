import { Box, Card } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';

export default function DateFieldCard() {
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
				<DateRangeIcon sx={{ fontSize: 60 }} />
				<Box sx={{ fontSize: 16 }}>Date</Box>
			</Box>
		</Card>
	);
}
