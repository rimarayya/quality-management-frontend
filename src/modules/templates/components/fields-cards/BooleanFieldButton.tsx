import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FieldButton from '../common/FieldButton';

interface BooleanFieldButtonProps {
	height: number;
	iconSize: number;
}

export default function BooleanFieldButton({
	height,
	iconSize,
}: BooleanFieldButtonProps) {
	return (
		<FieldButton
			Icon={CheckBoxIcon}
			iconSize={iconSize}
			text="Boolean"
			height={height}
		/>
	);
}
