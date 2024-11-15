import { Box, Grid2 as Grid } from '@mui/material';
import { FieldTypeEnum } from '../../types/field.types';
import {
	createBooleanField,
	createDateField,
	createDatetimeField,
	createEnumField,
	createNumberField,
	createReferenceField,
	createStringField,
	createTimeField,
} from '../../services/fields.service';
import TextFieldButton from '../fields-cards/TextFieldButton';
import NumberFieldButton from '../fields-cards/NumberFieldButton';
import BooleanFieldButton from '../fields-cards/BooleanFieldButton';
import DateFieldButton from '../fields-cards/DateFieldButton';
import TimeFieldButton from '../fields-cards/TimeFieldButton';
import DateTimeFieldButton from '../fields-cards/DateTimeFieldButton';
import EnumFieldButton from '../fields-cards/EnumFieldButton';
import ReferenceFieldButton from '../fields-cards/ReferenceFieldButton';
import InputFields from '../common/InputFields';
import { CreateTemplateDto } from '../../types/template.dtos';
import {
	FieldErrors,
	UseFieldArrayAppend,
	UseFormRegister,
} from 'react-hook-form';

interface FormBuilderControlPanelProps {
	register: UseFormRegister<CreateTemplateDto>;
	append: UseFieldArrayAppend<CreateTemplateDto>;
	errors: FieldErrors<CreateTemplateDto>;
}

const FormBuilderControlPanel = ({
	register,
	append,
	errors,
}: FormBuilderControlPanelProps) => {
	const ButtonComponents = [
		{
			component: TextFieldButton,
			name: 'Text Field',
			type: FieldTypeEnum.String,
		},
		{
			component: NumberFieldButton,
			name: 'Number Field',
			type: FieldTypeEnum.Number,
		},
		{
			component: BooleanFieldButton,
			name: 'Boolean Field',
			type: FieldTypeEnum.Boolean,
		},
		{
			component: DateFieldButton,
			name: 'Date Field',
			type: FieldTypeEnum.Date,
		},
		{
			component: TimeFieldButton,
			name: 'Time Field',
			type: FieldTypeEnum.Time,
		},
		{
			component: DateTimeFieldButton,
			name: 'DateTime Field',
			type: FieldTypeEnum.Datetime,
		},
		{
			component: EnumFieldButton,
			name: 'Enum Field',
			type: FieldTypeEnum.Enum,
		},
		{
			component: ReferenceFieldButton,
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
};

export default FormBuilderControlPanel;
