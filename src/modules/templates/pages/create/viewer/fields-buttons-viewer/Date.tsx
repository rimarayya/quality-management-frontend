import ViewerFieldButton from '../../../../components/ViewerFieldButton';

interface DateProps {
	label: string;
	value: string | number | boolean | Date | 'dateTime' | 'Enum' | 'Reference';
	onDelete: () => void;
}

export default function Date({ label, value, onDelete }: DateProps) {
	const stringValue = String(value);
	return (
		<ViewerFieldButton
			label={label}
			value={stringValue}
			onDelete={onDelete}
		/>
	);
}
