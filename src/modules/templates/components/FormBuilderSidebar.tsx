import { Box, Grid2 as Grid } from '@mui/material';
import TextFieldButton from './fields-cards/TextFieldButton';
import NumberFieldButton from './fields-cards/NumberFieldButton';
import BooleanFieldButton from './fields-cards/BooleanFieldButton';
import DateFieldButton from './fields-cards/DateFieldButton';
import TimeFieldButton from './fields-cards/TimeFieldButton';
import DateTimeFieldButton from './fields-cards/DateTimeFieldButton';
import EnumFieldButton from './fields-cards/EnumFieldButton';
import ReferenceFieldButton from './fields-cards/ReferenceFieldButton';

export default function FormBuilderSidebar() {
	const Button = [
		TextFieldButton,
		NumberFieldButton,
		BooleanFieldButton,
		DateFieldButton,
		TimeFieldButton,
		DateTimeFieldButton,
		EnumFieldButton,
		ReferenceFieldButton,
	];

	return (
		<Box
			sx={{
				height: '100vh',
				padding: 3,
				borderLeft: 1,
				borderLeftColor: 'divider',
			}}
		>
			<Box
				sx={{
					paddingBottom: 2,
					fontSize: 20,
					fontWeight: 'bold',
				}}
			>
				Form elements
			</Box>
			<Grid container spacing={1}>
				{Button.map((Button, i) => (
					<Grid size={6} key={i}>
						<Button height={115} iconSize={45} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
