import ListIcon from '@mui/icons-material/List';
import FieldButton from '../common/FieldButton';

interface EnumFieldButtonProps {
	height: number;
	iconSize: number;
}

export default function EnumFieldButton({
	height,
	iconSize,
}: EnumFieldButtonProps) {
	return (
		<FieldButton
			Icon={ListIcon}
			iconSize={iconSize}
			text="Options"
			height={height}
		/>
	);
}
