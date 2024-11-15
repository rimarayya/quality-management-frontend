import {
	FieldErrors,
	UseFieldArrayAppend,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form';
import { CreateTemplateDto } from '../../types/template.dtos';
import { Box } from '@mui/material';
import FormBuilderControlPanel from './FormBuilderControlPanel';
import FormBuilderInputDetails from './FormBuilderInputDetails';

interface FormBuilderSidebarProps {
	submit: (data: CreateTemplateDto) => void;
	formData: CreateTemplateDto;
	handleSubmit: UseFormHandleSubmit<CreateTemplateDto>;
	register: UseFormRegister<CreateTemplateDto>;
	append: UseFieldArrayAppend<CreateTemplateDto>;
	errors: FieldErrors<CreateTemplateDto>;
	sidebarState: { mode: string; selectedButtonIndex: number | null };
	fieldIndex: number | null;
	handleSidebarModeChange: (
		newMode: 'controlPanel' | 'inputDetails',
		index: number | null
	) => void;
}

export default function FormBuilderSidebar({
	submit,
	handleSubmit,
	formData,
	register,
	append,
	errors,
	sidebarState,
	handleSidebarModeChange,
	fieldIndex,
}: FormBuilderSidebarProps) {
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
				{sidebarState.mode === 'controlPanel' ? (
					<FormBuilderControlPanel
						register={register}
						append={append}
						errors={errors}
					/>
				) : (
					<FormBuilderInputDetails
						formData={formData}
						fieldIndex={fieldIndex!}
						setSidebarState={(mode, index) =>
							handleSidebarModeChange(mode, index ?? null)
						}
						errors={errors}
						register={register}
					/>
				)}
			</form>
		</Box>
	);
}
