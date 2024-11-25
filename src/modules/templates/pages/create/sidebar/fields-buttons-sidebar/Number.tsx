import PinOutlinedIcon from '@mui/icons-material/PinOutlined';
import FieldButton from '../../../../components/FieldButton';

interface NumberProps {
	height: number;
	iconSize: number;
}

export default function Number({ height, iconSize }: NumberProps) {
	return (
		<FieldButton
			Icon={PinOutlinedIcon}
			iconSize={iconSize}
			text="Number"
			height={height}
		/>
	);
}
