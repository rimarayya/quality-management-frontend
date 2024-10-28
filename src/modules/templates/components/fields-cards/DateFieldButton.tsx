import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FieldButton from '../common/FieldButton';

interface DateFieldButtonProps {
	height: number;
	iconSize: number;
}

export default function DateFieldButton({
	height,
	iconSize,
}: DateFieldButtonProps) {
	return (
		<FieldButton
			Icon={CalendarMonthOutlinedIcon}
			iconSize={iconSize}
			text="Date"
			height={height}
		/>
	);
}
