import { Box, Grid2 as Grid } from '@mui/material';
import { FieldTypeEnum } from '../../../types/field.types';
import {
	createBooleanField,
	createDateField,
	createDatetimeField,
	createEnumField,
	createNumberField,
	createReferenceField,
	createStringField,
	createTimeField,
} from '../../../services/fields.service';
import Text from '../fields-buttons/Text';
import Number from '../fields-buttons/Number';
import Boolean from '../fields-buttons/Boolean';
import Date from '../fields-buttons/Date';
import Time from '../fields-buttons/Time';
import DateTime from '../fields-buttons/DateTime';
import Enum from '../fields-buttons/Enum';
import Reference from '../fields-buttons/Reference';
import { CreateTemplateDto } from '../../../types/template.dtos';
import {
	FieldErrors,
	UseFieldArrayAppend,
	UseFormRegister,
} from 'react-hook-form';
import InputFields from '../../../components/InputFields';

interface ControlPanelProps {
	register: UseFormRegister<CreateTemplateDto>;
	append: UseFieldArrayAppend<CreateTemplateDto>;
	errors: FieldErrors<CreateTemplateDto>;
}

export default function ControlPanel({
	register,
	append,
	errors,
}: ControlPanelProps) {
	const ButtonComponents = [
		{
			component: Text,
			name: 'Text Field',
			type: FieldTypeEnum.String,
		},
		{
			component: Number,
			name: 'Number Field',
			type: FieldTypeEnum.Number,
		},
		{
			component: Boolean,
			name: 'Boolean Field',
			type: FieldTypeEnum.Boolean,
		},
		{
			component: Date,
			name: 'Date Field',
			type: FieldTypeEnum.Date,
		},
		{
			component: Time,
			name: 'Time Field',
			type: FieldTypeEnum.Time,
		},
		{
			component: DateTime,
			name: 'DateTime Field',
			type: FieldTypeEnum.Datetime,
		},
		{
			component: Enum,
			name: 'Enum Field',
			type: FieldTypeEnum.Enum,
		},
		{
			component: Reference,
			name: 'Reference Field',
			type: FieldTypeEnum.Reference,
		},
	];

	const handleNewFieldClick = (type: FieldTypeEnum) => {
		if (type == FieldTypeEnum.Boolean) {
			const fieldObj = createBooleanField();
			append(fieldObj);
		} else if (type == FieldTypeEnum.String) {
			const fieldObj = createStringField();
			append(fieldObj);
		} else if (type == FieldTypeEnum.Date) {
			const fieldObj = createDateField();
			append(fieldObj);
		} else if (type == FieldTypeEnum.Datetime) {
			const fieldObj = createDatetimeField();
			append(fieldObj);
		} else if (type == FieldTypeEnum.Time) {
			const fieldObj = createTimeField();
			append(fieldObj);
		} else if (type == FieldTypeEnum.Number) {
			const fieldObj = createNumberField();
			append(fieldObj);
		} else if (type == FieldTypeEnum.Enum) {
			const fieldObj = createEnumField();
			append(fieldObj);
		} else if (type == FieldTypeEnum.Reference) {
			const fieldObj = createReferenceField();
			append(fieldObj);
		}
	};

	return (
		<>
			<Box
				sx={{
					paddingBottom: 2,
					fontSize: 20,
					fontWeight: 'bold',
				}}
			>
				Form
			</Box>

			<InputFields
				label="Name"
				register={register}
				fieldName="name"
				ErrorMessage={errors.name?.message}
			/>

			<InputFields
				label="Name in arabic"
				register={register}
				fieldName="nameAr"
				ErrorMessage={errors.nameAr?.message}
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
				{ButtonComponents.map(
					({ component: ButtonComponent, type }, i) => (
						<Grid size={6} key={i}>
							<Box onClick={() => handleNewFieldClick(type)}>
								<ButtonComponent height={115} iconSize={45} />
							</Box>
						</Grid>
					)
				)}
			</Grid>
		</>
	);
}
