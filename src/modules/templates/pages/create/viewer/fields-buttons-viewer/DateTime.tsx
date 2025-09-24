import ViewerFieldButton from '../../../../components/ViewerFieldButton';

interface DateTimeProps {
	label: string;
	value: string | number | boolean | Date | 'dateTime' | 'Enum' | 'Reference';
	onDelete: () => void;
}

export default function DateTime({ label, value, onDelete }: DateTimeProps) {
	const stringValue = String(value);
	return (
		<ViewerFieldButton
			label={label}
			value={stringValue}
			onDelete={onDelete}
		/>
	);
}
