import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FieldButton from '../common/FieldButton';

interface ReferenceFieldButtonProps {
	height: number;
	iconSize: number;
}

export default function ReferenceFieldButton({
	height,
	iconSize,
}: ReferenceFieldButtonProps) {
	return (
		<FieldButton
			Icon={LibraryBooksIcon}
			iconSize={iconSize}
			text="Reference"
			height={height}
		/>
	);
}
