import { Grid2 as Grid } from '@mui/material';
// import createTemplateSchema from '../schemas/create-template.schema';
// import { joiResolver } from '@hookform/resolvers/joi';
import { useFieldArray, useForm } from 'react-hook-form';
import { CreateTemplateDto } from '../types/template.dtos';
import FormBuilderSidebar from '../components/form-builder-sidebar/FormBuilderSidebar';
import FormBuilderViewer from '../components/FormBuilderViewer';
import { useState } from 'react';
import { FieldTypeEnum } from '../types/field.types';

interface CreateTemplatePageProps {
	data: CreateTemplateDto;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function CreateTemplatePage({ data }: CreateTemplatePageProps) {
	const [sidebarState, setSidebarState] = useState({
		mode: 'controlPanel',
		selectedButtonIndex: null as number | null,
	});

	const handleSidebarModeChange = (
		newMode: string,
		index: number | null = null
	) => {
		setSidebarState({
			mode: newMode,
			selectedButtonIndex:
				newMode === 'inputDetails' ? (index ?? null) : null,
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
			fields: [
				{
					type: FieldTypeEnum.String,
					required: false,
					label: '',
					labelAr: '',
				},
			],
		},
		// resolver: joiResolver(createTemplateSchema),
	});
	const { append } = useFieldArray<CreateTemplateDto>({
		control,
		name: 'fields',
	});

	const formData = watch();

	const submit = (data: CreateTemplateDto) => {
		console.log(data);
	};
	return (
		<>
			<Grid container spacing={2}>
				<Grid size={{ md: 7, lg: 8, xl: 9, xl4: 10 }}>
					<FormBuilderViewer
						data={formData}
						onButtonClick={(index) =>
							handleSidebarModeChange('inputDetails', index)
						}
					/>
				</Grid>

				<Grid size={{ md: 5, lg: 4, xl: 3, xl4: 2 }}>
					<FormBuilderSidebar
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
