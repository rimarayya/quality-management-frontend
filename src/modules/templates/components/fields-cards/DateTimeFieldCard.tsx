import { Box, Card } from '@mui/material';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';

export default function DateTimeFieldCard() {
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
				<BrowseGalleryIcon sx={{ fontSize: 60 }} />
				<Box sx={{ fontSize: 16 }}>Datetime</Box>
			</Box>
		</Card>
	);
}
