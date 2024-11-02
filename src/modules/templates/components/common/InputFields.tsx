import { TextField } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import { CreateTemplateDto } from '../../types/template.dtos';

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
		<div>
			<TextField
				{...register(fieldName)}
				label={label}
				variant="outlined"
				helperText={ErrorMessage}
				error={ErrorMessage ? true : false}
				sx={(theme) => ({
					'& label.Mui-focused': {
						color: '#424242',
					},
					'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
						{
							borderColor: '#757575',
						},
					'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
						{
							borderColor: '#757575',
						},
					...theme.applyStyles('dark', {
						'& label.Mui-focused': {
							color: '#9e9e9e',
						},
						'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
							{
								borderColor: '#616161',
							},
						'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
							{
								borderColor: '#616161',
							},
					}),
					width: '100%',
					marginBottom: 2,
					'& .MuiInputLabel-root': {
						paddingY: 0.1,
						fontSize: 15,
					},
				})}
			/>
		</div>
	);
}
