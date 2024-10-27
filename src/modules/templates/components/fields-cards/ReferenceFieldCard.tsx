import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Box, Card } from '@mui/material';

export default function ReferenceFieldCard() {
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
				<LibraryBooksIcon sx={{ fontSize: 60 }} />
				<Box sx={{ fontSize: 16 }}>Reference</Box>
			</Box>
		</Card>
	);
}
