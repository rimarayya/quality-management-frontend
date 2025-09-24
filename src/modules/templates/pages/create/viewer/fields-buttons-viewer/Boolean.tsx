import ViewerFieldButton from '../../../../components/ViewerFieldButton';

interface BooleanProps {
	label: string;
	value: string | number | boolean | Date | 'dateTime' | 'Enum' | 'Reference';
	onDelete: () => void;
}

export default function Boolean({ label, value, onDelete }: BooleanProps) {
	const stringValue = String(value);
	return (
		<ViewerFieldButton
			label={label}
			value={stringValue}
			onDelete={onDelete}
		/>
	);
}
