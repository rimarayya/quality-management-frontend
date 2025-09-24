import ViewerFieldButton from '../../../../components/ViewerFieldButton';

interface NumberProps {
	label: string;
	value: string | number | boolean | Date | 'dateTime' | 'Enum' | 'Reference';
	onDelete: () => void;
}

export default function Number({ label, value, onDelete }: NumberProps) {
	const stringValue = String(value);
	return (
		<ViewerFieldButton
			label={label}
			value={stringValue}
			onDelete={onDelete}
		/>
	);
}
