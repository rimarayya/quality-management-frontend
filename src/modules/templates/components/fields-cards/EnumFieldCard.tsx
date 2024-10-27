import ListIcon from '@mui/icons-material/List';
import { Box, Card } from '@mui/material';

export default function EnumFieldCard() {
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
				<ListIcon sx={{ fontSize: 60 }} />
				<Box sx={{ fontSize: 16 }}>Options</Box>
			</Box>
		</Card>
	);
}
