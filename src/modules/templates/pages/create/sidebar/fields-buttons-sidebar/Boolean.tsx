import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FieldButton from '../../../../components/FieldButton';

interface BooleanProps {
	height: number;
	iconSize: number;
}

export default function Boolean({ height, iconSize }: BooleanProps) {
	return (
		<FieldButton
			Icon={CheckBoxIcon}
			iconSize={iconSize}
			text="Boolean"
			height={height}
		/>
	);
}
