import { TextField } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import { CreateTemplateDto } from '../types/template.dtos';

interface InputFieldsProps {
	label: string;
	register: UseFormRegister<CreateTemplateDto>;
	fieldName: keyof CreateTemplateDto;
	ErrorMessage: string | undefined;
}

export default function InputFields({
	label,
	register,
	fieldName,
	ErrorMessage,
}: InputFieldsProps) {
	return (
		<TextField
			{...register(fieldName)}
			label={label}
			variant="outlined"
			helperText={ErrorMessage}
			error={!!ErrorMessage}
			sx={(theme) => ({
				'& label.Mui-focused': {
					color: theme.palette.text.primary,
				},
				'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
					{
						borderColor: theme.palette.primary.main,
					},
				'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
					{
						borderColor: theme.palette.primary.main,
					},
				width: '100%',
				marginBottom: 2,
				'& .MuiInputLabel-root': {
					paddingY: 0.1,
					fontSize: 15,
				},
			})}
		/>
	);
}
