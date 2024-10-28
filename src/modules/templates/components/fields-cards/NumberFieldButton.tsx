import PinOutlinedIcon from '@mui/icons-material/PinOutlined';
import FieldButton from '../common/FieldButton';

interface NumberFieldButtonProps {
	height: number;
	iconSize: number;
}

export default function NumberFieldButton({
	height,
	iconSize,
}: NumberFieldButtonProps) {
	return (
		<FieldButton
			Icon={PinOutlinedIcon}
			iconSize={iconSize}
			text="Number"
			height={height}
		/>
	);
}
