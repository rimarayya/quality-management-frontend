import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FieldButton from '../../../../components/FieldButton';

interface DateProps {
	height: number;
	iconSize: number;
}

export default function Date({ height, iconSize }: DateProps) {
	return (
		<FieldButton
			Icon={CalendarMonthOutlinedIcon}
			iconSize={iconSize}
			text="Date"
			height={height}
		/>
	);
}
