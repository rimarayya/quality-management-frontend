import { useState } from 'react';
import { Box, Grid2 as Grid } from '@mui/material';
import TextFieldButton from './fields-cards/TextFieldButton';
import NumberFieldButton from './fields-cards/NumberFieldButton';
import BooleanFieldButton from './fields-cards/BooleanFieldButton';
import DateFieldButton from './fields-cards/DateFieldButton';
import TimeFieldButton from './fields-cards/TimeFieldButton';
import DateTimeFieldButton from './fields-cards/DateTimeFieldButton';
import EnumFieldButton from './fields-cards/EnumFieldButton';
import ReferenceFieldButton from './fields-cards/ReferenceFieldButton';
import { useFieldArray, useForm } from 'react-hook-form';
import InputFields from './common/InputFields';
import { joiResolver } from '@hookform/resolvers/joi';
import { FieldTypeEnum } from '../types/field.types';
import {
	createBooleanField,
	createDateField,
	createDatetimeField,
	createEnumField,
	createNumberField,
	createReferenceField,
	createStringField,
	createTimeField,
} from '../services/fields.service';
import { CreateTemplateDto } from '../types/template.dtos';
import createTemplateSchema from '../schemas/create-template.schema';

export default function FormBuilderSidebar() {
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

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [nameErrors, setNameErrors] = useState<string[]>([]);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [nameArErrors, setNameArErrors] = useState<string[]>([]);

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateTemplateDto>({
		defaultValues: {
			name: '',
			nameAr: '',
			fields: [],
		},
		resolver: joiResolver(createTemplateSchema),
	});

	const { append } = useFieldArray<CreateTemplateDto>({
		control,
		name: 'fields',
	});

	const submit = (data: CreateTemplateDto) => {
		setNameErrors([]);
		setNameArErrors([]);

		const { error } = createTemplateSchema.validate(data, {
			abortEarly: false,
		});

		if (error) {
			const nameError: string[] = [];
			const nameArError: string[] = [];

			for (let i = 0; i < error.details.length; i++) {
				for (let j = 0; j < error.details[i].path.length; j++) {
					if (error.details[i].path[j] === 'nameAr') {
						nameArError.push(error.details[i].message);
					} else if (error.details[i].path[j] === 'name') {
						nameError.push(error.details[i].message);
					}
				}
			}
			setNameArErrors(nameArError);
			setNameErrors(nameError);
		} else {
			console.log(data);
		}
	};

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
		<form
			onSubmit={handleSubmit(submit)}
			onKeyDown={(e) => {
				if (e.key === 'Enter') {
					// Prevent Enter from submitting other fields unintentionally
					e.preventDefault();
					handleSubmit(submit)();
				}
			}}
		>
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
									<ButtonComponent
										height={115}
										iconSize={45}
									/>
								</Box>
							</Grid>
						)
					)}
				</Grid>
			</Box>
		</form>
	);
}
