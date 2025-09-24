import ViewerFieldButton from '../../../../components/ViewerFieldButton';

interface TextProps {
	label: string;
	value: string | number | boolean | Date | 'dateTime' | 'Enum' | 'Reference';
	onDelete: () => void;
}

export default function Text({ label, value, onDelete }: TextProps) {
	const stringValue = String(value);
	return (
		<ViewerFieldButton
			label={label}
			value={stringValue}
			onDelete={onDelete}
		/>
	);
}
