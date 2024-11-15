import {
	FieldErrors,
	UseFieldArrayAppend,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form';
import { CreateTemplateDto } from '../../types/template.dtos';
import { Box, Button } from '@mui/material';
import FormBuilderControlPanel from './FormBuilderControlPanel';
import FormBuilderInputDetails from './FormBuilderInputDetails';

interface FormBuilderSidebarProps {
	submit: (data: CreateTemplateDto) => void;
	handleSubmit: UseFormHandleSubmit<CreateTemplateDto>;
	register: UseFormRegister<CreateTemplateDto>;
	append: UseFieldArrayAppend<CreateTemplateDto>;
	errors: FieldErrors<CreateTemplateDto>;
	sidebarState: { mode: string; selectedButtonIndex: number | null };
	handleSidebarModeChange: (newMode: string, index: number | null) => void;
}

export default function FormBuilderSidebar({
	submit,
	handleSubmit,
	register,
	append,
	errors,
	sidebarState,
	handleSidebarModeChange,
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
					<>
						<FormBuilderInputDetails
							submit={submit}
							handleSubmit={handleSubmit}
							setSidebarState={(mode, index) =>
								handleSidebarModeChange(mode, index ?? null)
							}
							errors={errors}
							register={register}
						/>
					</>
				)}
				<Button type="submit" variant="contained" color="primary">
					Submit
				</Button>
			</form>
		</Box>
	);
}
