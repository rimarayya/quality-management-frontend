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
import { useState } from 'react';
import { CreateTemplateDto } from '../../types/template.dtos';
import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form';

interface FormBuilderInputDetailsProps {
	register: UseFormRegister<CreateTemplateDto>;
	submit: (data: CreateTemplateDto) => void;
	handleSubmit: UseFormHandleSubmit<CreateTemplateDto>;
	setSidebarState: (mode: string, index?: number | null) => void;
	errors: FieldErrors<CreateTemplateDto>;
}

const FormBuilderInputDetails = ({
	register,
	submit,
	handleSubmit,
	setSidebarState,
	errors,
}: FormBuilderInputDetailsProps) => {
	const types: string[] = [
		'Label',
		'Arabic label',
		// 'Default value',
		// 'Form initial value',
	];

	const [required, setRequired] = useState(false);

	const handleRequiredChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRequired(event.target.checked);
	};

	return (
		<div
			onSubmit={handleSubmit(submit)}
			onKeyDown={(e) => {
				if (e.key === 'Enter') {
					handleSubmit(submit)();
				}
			}}
		>
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
					{(() => {
						const elements = [];

						for (let i = 0; i < types.length; i++) {
							const type = types[i];

							if (required && type === 'Default value') {
								continue;
							}

							elements.push(
								<React.Fragment key={i}>
									<Typography sx={{ fontWeight: 'bold' }}>
										{type}
									</Typography>
									<TextField
										{...register}
										helperText={
											errors?.fields?.message ||
											`The ${type} of the field.`
										}
										error={Boolean(errors?.fields?.message)}
										label={type}
										variant="outlined"
										size="small"
										sx={{ width: '100%', marginY: 1 }}
										FormHelperTextProps={{
											style: {
												marginLeft: 0,
												marginTop: 10,
											},
										}}
									/>
								</React.Fragment>
							);

							if (i === 1) {
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
													...theme.applyStyles(
														'dark',
														{
															color: 'white',
														}
													),
												})}
											>
												Required
											</Typography>
											The helper text of the field. It
											will be displayed below the field.
										</Typography>
										<Switch
											color={
												required ? 'primary' : 'default'
											}
											onChange={handleRequiredChange}
											checked={required}
										/>
									</Box>
								);
							}
						}
						return elements;
					})()}
				</Box>
			</Box>
		</div>
	);
};

export default FormBuilderInputDetails;
