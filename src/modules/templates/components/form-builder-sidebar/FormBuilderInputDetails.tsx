import React from 'react';
import {
	Box,
	Button,
	Divider,
	Switch,
	TextField,
	Typography,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { CreateTemplateDto } from '../../types/template.dtos';
import { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';
import { FieldType } from '../../types/field.types';

interface FormBuilderInputDetailsProps {
	register: UseFormRegister<CreateTemplateDto>;
	fieldIndex: number;
	formData: CreateTemplateDto;
	setSidebarState: (
		mode: 'controlPanel' | 'inputDetails',
		index?: number | null
	) => void;
	errors: FieldErrors<CreateTemplateDto>;
}

const FormBuilderInputDetails = ({
	register,
	setSidebarState,
	formData,
	fieldIndex,
	errors,
}: FormBuilderInputDetailsProps) => {
	const types: {
		[key in keyof Omit<FieldType, 'camelCaseLabel' | 'type'>]: string;
	} = {
		label: 'Label',
		labelAr: 'Arabic label',
		required: 'Required',
		defaultValue: 'Default value',
		formInitialValue: 'Form initial value',
	};

	function renderFieldsDetails() {
		const elements: React.ReactNode[] = [];

		Object.entries(types).forEach(([type, label], i) => {
			if (formData.fields[fieldIndex].required && type == 'defaultValue')
				return;

			if (type != 'required') {
				elements.push(
					<React.Fragment key={i}>
						<Typography sx={{ fontWeight: 'bold' }}>
							{type}
						</Typography>
						<TextField
							{...register(`fields.${fieldIndex}.${type}` as any)}
							error={
								!!errors?.fields?.[fieldIndex]?.[
									type as keyof (typeof formData.fields)[number]
								]
							}
							helperText={
								(
									errors?.fields?.[fieldIndex]?.[
										type as keyof (typeof formData.fields)[number]
									] as FieldError
								)?.message ||
								`The ${label.toLowerCase()} of the field.`
							}
							label={label}
							variant="outlined"
							size="small"
							sx={{
								width: '100%',
								marginY: 1,
							}}
							FormHelperTextProps={{
								style: {
									marginLeft: 0,
									marginTop: 10,
								},
							}}
						/>
					</React.Fragment>
				);
			}

			if (type == 'required') {
				elements.push(
					<Box
						key="required-switch"
						sx={(theme) => ({
							border: '1px solid ',
							padding: 1,
							paddingY: 1,
							borderColor: 'grey.400',
							borderRadius: 1,
							marginY: 1,
							width: '100%',
							height: 100,
							display: 'flex',
							alignItems: 'center',
							...theme.applyStyles('dark', {
								borderColor: 'grey.700',
							}),
						})}
					>
						<Typography
							component="div"
							variant="body2"
							sx={{
								color: 'text.secondary',
								marginTop: 1,
							}}
						>
							<Typography
								sx={(theme) => ({
									fontWeight: 'bold',
									color: 'black',
									...theme.applyStyles('dark', {
										color: 'white',
									}),
								})}
							>
								{label}
							</Typography>
							The helper text of the field. It will be displayed
							below the field.
						</Typography>

						<Switch
							color={
								formData.fields[fieldIndex].required
									? 'primary'
									: 'default'
							}
							{...register(
								`fields.${fieldIndex}.required` as any
							)}
							checked={formData.fields[fieldIndex].required}
						/>
					</Box>
				);
			}
		});

		return elements;
	}

	return (
		<Box
			sx={{
				paddingBottom: 2,
				fontSize: 20,
				fontWeight: 'bold',
			}}
		>
			Element properties
			<Button onClick={() => setSidebarState('controlPanel')}>
				<ClearIcon
					sx={(theme) => ({
						fontSize: 20,
						marginLeft: 4,
						...theme.applyStyles('dark', {
							color: 'white',
						}),
					})}
				/>
			</Button>
			<Divider sx={{ marginY: 1 }} />
			<Box
				sx={{
					marginY: 2,
					fontSize: 18,
				}}
			>
				{renderFieldsDetails()}
			</Box>
		</Box>
	);
};

export default FormBuilderInputDetails;
