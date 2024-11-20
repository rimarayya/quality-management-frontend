import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FieldButton from '../../../components/FieldButton';

interface ReferenceProps {
	height: number;
	iconSize: number;
}

export default function Reference({ height, iconSize }: ReferenceProps) {
	return (
		<FieldButton
			Icon={LibraryBooksIcon}
			iconSize={iconSize}
			text="Reference"
			height={height}
		/>
	);
}
