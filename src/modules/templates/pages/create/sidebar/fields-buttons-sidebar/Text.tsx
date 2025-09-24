import TextFieldsIcon from '@mui/icons-material/TextFields';
import FieldButton from '../../../../components/FieldButton';

interface TextProps {
	height: number;
	iconSize: number;
}

export default function Text({ height, iconSize }: TextProps) {
	return (
		<FieldButton
			Icon={TextFieldsIcon}
			iconSize={iconSize}
			text="Text"
			height={height}
		/>
	);
}
