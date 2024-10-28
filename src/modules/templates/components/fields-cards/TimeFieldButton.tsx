import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FieldButton from '../common/FieldButton';

interface TimeFieldButtonProps {
	height: number;
	iconSize: number;
}

export default function TimeFieldButton({
	height,
	iconSize,
}: TimeFieldButtonProps) {
	return (
		<FieldButton
			Icon={AccessTimeIcon}
			iconSize={iconSize}
			text="Time"
			height={height}
		/>
	);
}
