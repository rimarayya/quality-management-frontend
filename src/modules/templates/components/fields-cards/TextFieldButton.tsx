import TextFieldsIcon from '@mui/icons-material/TextFields';
import FieldButton from '../common/FieldButton';

interface TextFieldButtonProps {
	height: number;
	iconSize: number;
}

export default function TextFieldButton({
	height,
	iconSize,
}: TextFieldButtonProps) {
	return (
		<FieldButton
			Icon={TextFieldsIcon}
			iconSize={iconSize}
			text="Text"
			height={height}
		/>
	);
}
