import { Box, Grid2 as Grid } from '@mui/material';
import TextFieldCard from './fields-cards/TextFieldCard';
import NumberFieldCard from './fields-cards/NumberFieldCard';
import BooleanFieldCard from './fields-cards/BooleanFieldCard';
import DateFieldCard from './fields-cards/DateFieldCard';
import TimeFieldCard from './fields-cards/TimeFieldCard';
import DateTimeFieldCard from './fields-cards/DateTimeFieldCard';
import EnumFieldCard from './fields-cards/EnumFieldCard';
import ReferenceFieldCard from './fields-cards/ReferenceFieldCard';

export default function FormBuilderSection() {
	const Cards = [
		TextFieldCard,
		NumberFieldCard,
		BooleanFieldCard,
		DateFieldCard,
		TimeFieldCard,
		DateTimeFieldCard,
		EnumFieldCard,
		ReferenceFieldCard,
	];

	return (
		<Box
			sx={{
				height: '100vh',
				padding: 4,
				borderLeft: 1,
				borderLeftColor: 'divider',
			}}
		>
			<Grid container spacing={2}>
				{Cards.map((Card, i) => (
					<Grid size={6} key={i}>
						<Card />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
