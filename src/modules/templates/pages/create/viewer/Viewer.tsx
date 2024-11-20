import { Box, Button, Switch } from '@mui/material';
import { useThemeStore } from '../../../../common/stores/themeStore';
import { CreateTemplateDto } from '../../../types/template.dtos';

interface ViewerProps {
	data: CreateTemplateDto;
	onButtonClick: (index: number) => void;
}

export default function Viewer({ data, onButtonClick }: ViewerProps) {
	const { isLight, toggleTheme } = useThemeStore();

	return (
		<>
			<Box>
				<Switch
					color="default"
					onChange={toggleTheme}
					checked={!isLight}
				/>
			</Box>

			<Box>
				{data.fields.map((field, i) => (
					<Button
						key={i}
						variant="contained"
						onClick={() => onButtonClick(i)}
						sx={{ margin: 0.5 }}
					>
						{i + 1 + ' - ' + field.type || 'Unnamed Field'}
					</Button>
				))}
			</Box>
		</>
	);
}
