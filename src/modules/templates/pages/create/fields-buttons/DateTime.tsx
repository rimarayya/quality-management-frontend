import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import FieldButton from '../../../components/FieldButton';

interface DateTimeProps {
	height: number;
	iconSize: number;
}

export default function DateTime({ height, iconSize }: DateTimeProps) {
	return (
		<FieldButton
			Icon={BrowseGalleryIcon}
			iconSize={iconSize}
			text="Datetime"
			height={height}
		/>
	);
}
