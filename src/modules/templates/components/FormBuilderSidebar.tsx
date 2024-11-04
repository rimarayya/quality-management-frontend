import { useFieldArray, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { CreateTemplateDto } from '../types/template.dtos';
import createTemplateSchema from '../schemas/create-template.schema';
import FormBuilderControlPanel from './FormBuilderControlPanel';

export default function FormBuilderSidebar() {
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
		console.log(data);
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
			<FormBuilderControlPanel
				register={register}
				append={append}
				errors={errors}
			/>
		</form>
	);
}
