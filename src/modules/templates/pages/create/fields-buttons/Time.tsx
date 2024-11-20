import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FieldButton from '../../../components/FieldButton';

interface TimeProps {
	height: number;
	iconSize: number;
}

export default function Time({ height, iconSize }: TimeProps) {
	return (
		<FieldButton
			Icon={AccessTimeIcon}
			iconSize={iconSize}
			text="Time"
			height={height}
		/>
	);
}
