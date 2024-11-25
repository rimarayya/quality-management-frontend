import { Grid2 as Grid } from '@mui/material';
import { joiResolver } from '@hookform/resolvers/joi';
import { useFieldArray, useForm } from 'react-hook-form';
import { CreateTemplateDto } from '../../types/template.dtos';
import Sidebar from './sidebar/Sidebar';

import { useState } from 'react';
import Viewer from './viewer/Viewer';
import createTemplateSchema from '../../schemas/create-template.schema';

export default function CreateTemplatePage() {
	const [sidebarState, setSidebarState] = useState<{
		mode: 'controlPanel' | 'inputDetails';
		selectedButtonIndex: null | number;
	}>({
		mode: 'controlPanel',
		selectedButtonIndex: null,
	});

	const handleSidebarModeChange = (
		newMode: 'controlPanel' | 'inputDetails',
		index: number | null = null
	) => {
		if (newMode == 'inputDetails' && index == null)
			throw Error(
				'You should provide field index in input details mode.'
			);

		setSidebarState({
			mode: newMode,
			selectedButtonIndex: index,
		});
	};

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<CreateTemplateDto>({
		defaultValues: {
			name: '',
			nameAr: '',
			fields: [],
		},
		resolver: joiResolver(createTemplateSchema),
	});

	const { append, remove } = useFieldArray<CreateTemplateDto>({
		control,
		name: 'fields',
	});

	const formData = watch();

	const submit = (data: CreateTemplateDto) => {
		console.log('Form submission data:', data);
	};
	console.log('Form Data Fields:', JSON.stringify(formData.fields, null, 2));
	console.log('Errors on submit:', errors);

	return (
		<>
			<Grid container spacing={2}>
				<Grid size={{ md: 7, lg: 8, xl: 9, xl4: 10 }}>
					<Viewer
						data={formData}
						onButtonClick={(index) =>
							handleSidebarModeChange('inputDetails', index)
						}
						onDeleteField={remove}
					/>
				</Grid>

				<Grid size={{ md: 5, lg: 4, xl: 3, xl4: 2 }}>
					<Sidebar
						formData={formData}
						fieldIndex={sidebarState.selectedButtonIndex}
						submit={submit}
						handleSubmit={handleSubmit}
						register={register}
						append={append}
						errors={errors}
						sidebarState={sidebarState}
						handleSidebarModeChange={handleSidebarModeChange}
					/>
				</Grid>
			</Grid>
		</>
	);
}
