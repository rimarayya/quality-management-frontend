import ListIcon from '@mui/icons-material/List';
import FieldButton from '../../../components/FieldButton';

interface EnumProps {
	height: number;
	iconSize: number;
}

export default function Enum({ height, iconSize }: EnumProps) {
	return (
		<FieldButton
			Icon={ListIcon}
			iconSize={iconSize}
			text="Options"
			height={height}
		/>
	);
}
