import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import FieldButton from '../common/FieldButton';

interface DateTimeFieldButtonProps {
	height: number;
	iconSize: number;
}

export default function DateTimeFieldButton({
	height,
	iconSize,
}: DateTimeFieldButtonProps) {
	return (
		<FieldButton
			Icon={BrowseGalleryIcon}
			iconSize={iconSize}
			text="Datetime"
			height={height}
		/>
	);
}
