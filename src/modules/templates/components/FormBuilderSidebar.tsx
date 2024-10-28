import { Box, Grid2 as Grid, TextField } from '@mui/material';
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
				overflowY: 'auto',
			}}
		>
			<Box
				sx={{
					paddingBottom: 2,
					fontSize: 20,
					fontWeight: 'bold',
				}}
			>
				Form
			</Box>
			<TextField
				label="Name"
				variant="outlined"
				sx={[
					(theme) => ({
						'& label.Mui-focused': {
							color: '#424242',
						},
						'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
							{
								borderColor: '#757575',
							},
						'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
							{
								borderColor: '#757575',
							},
						...theme.applyStyles('dark', {
							'& label.Mui-focused': {
								color: '#9e9e9e',
							},
							'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
								{
									borderColor: '#616161',
								},
							'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
								{
									borderColor: '#616161',
								},
						}),
						width: '100%',
						marginBottom: 2,
						'& .MuiInputLabel-root': {
							paddingY: 0.1,
							fontSize: 15,
						},
					}),
				]}
			/>

			<TextField
				label="Name in arabic"
				variant="outlined"
				sx={[
					(theme) => ({
						'& label.Mui-focused': {
							color: '#424242',
						},
						'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
							{
								borderColor: '#757575',
							},
						'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
							{
								borderColor: '#757575',
							},
						...theme.applyStyles('dark', {
							'& label.Mui-focused': {
								color: '#9e9e9e',
							},
							'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
								{
									borderColor: '#616161',
								},
							'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
								{
									borderColor: '#616161',
								},
						}),

						width: '100%',
						marginBottom: 2,
						'& .MuiInputLabel-root': {
							paddingY: 0.1,
							fontSize: 15,
						},
					}),
				]}
			/>
			<Box
				sx={{
					paddingBottom: 2,
					fontSize: 20,
					fontWeight: 'bold',
				}}
			>
				Fields
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
