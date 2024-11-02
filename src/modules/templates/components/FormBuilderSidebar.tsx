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
import { useForm } from 'react-hook-form';
import { CreateTemplateDto } from '../types/template.dtos';
import creatTemplateSchema from '../schemas/create-template.schema';
import InputFields from './common/InputFields';
import { joiResolver } from '@hookform/resolvers/joi';

export default function FormBuilderSidebar() {
	const ButtonComponents = [
		{ component: TextFieldButton, name: 'Text Field' },
		{ component: NumberFieldButton, name: 'Number Field' },
		{ component: BooleanFieldButton, name: 'Boolean Field' },
		{ component: DateFieldButton, name: 'Date Field' },
		{ component: TimeFieldButton, name: 'Time Field' },
		{ component: DateTimeFieldButton, name: 'DateTime Field' },
		{ component: EnumFieldButton, name: 'Enum Field' },
		{ component: ReferenceFieldButton, name: 'Reference Field' },
	];

	const [clickedButtons, setClickedButtons] = useState<string[]>([]);
	const [nameErrors, setNameErrors] = useState<string[]>([]);
	const [nameArErrors, setNameArErrors] = useState<string[]>([]);
	console.log(clickedButtons);
	console.log(nameErrors);
	console.log(nameArErrors);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateTemplateDto>({
		defaultValues: {
			name: '',
			nameAr: '',
			fields: [],
		},
		resolver: joiResolver(creatTemplateSchema),
	});

	const submit = (data: CreateTemplateDto) => {
		setNameErrors([]);
		setNameArErrors([]);

		const { error } = creatTemplateSchema.validate(data, {
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

	const handleClick = (name: string) => {
		setClickedButtons((button) => {
			const updatedArray = [...button, name];
			console.log('Clicked Buttons Array:', [...button, name]);
			return updatedArray;
		});
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
				{/* {nameErrors.map((error, i) => ( */}
				{/* <p className="error">{errors.name?.message} </p> */}
				{/* ))} */}

				<InputFields
					label="Name in arabic"
					register={register}
					fieldName="nameAr"
					ErrorMessage={errors.nameAr?.message}
				/>
				{/* {nameArErrors.map((error, i) => ( */}
				{/* <p className="error">{errors.nameAr?.message} </p> */}
				{/* ))} */}

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
						({ component: ButtonComponent, name }, i) => (
							<Grid size={6} key={i}>
								{/* <Button height={115} iconSize={45} /> */}
								<Box onClick={() => handleClick(name)}>
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
