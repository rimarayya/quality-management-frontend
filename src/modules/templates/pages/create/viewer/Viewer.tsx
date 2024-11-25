import { Box } from '@mui/material';
import { CreateTemplateDto } from '../../../types/template.dtos';
import { FieldTypeEnum } from '../../../types/field.types';
import Text from './fields-buttons-viewer/Text';
import Number from './fields-buttons-viewer/Number';
import Boolean from './fields-buttons-viewer/Boolean';
import Date from './fields-buttons-viewer/Date';
import Time from './fields-buttons-viewer/Time';
import DateTime from './fields-buttons-viewer/DateTime';
import Enum from './fields-buttons-viewer/Enum';
import Reference from './fields-buttons-viewer/Reference';
import FormName from '../../../components/FormName';

interface ViewerProps {
	data: CreateTemplateDto;
	onButtonClick: (i: number) => void;
	onDeleteField: (i: number) => void;
}

export default function Viewer({
	data,
	onButtonClick,
	onDeleteField,
}: ViewerProps) {
	const ButtonComponents = [
		{ component: Text, type: FieldTypeEnum.String },
		{ component: Number, type: FieldTypeEnum.Number },
		{ component: Boolean, type: FieldTypeEnum.Boolean },
		{ component: Date, type: FieldTypeEnum.Date },
		{ component: Time, type: FieldTypeEnum.Time },
		{ component: DateTime, type: FieldTypeEnum.Datetime },
		{ component: Enum, type: FieldTypeEnum.Enum },
		{ component: Reference, type: FieldTypeEnum.Reference },
	];

	return (
		<>
			<FormName name={data.name || 'Form Name'} />
			<Box>
				{data.fields.map((field, i) => {
					const FieldComponent = ButtonComponents.find(
						(ButtonComponent) => ButtonComponent.type === field.type
					)?.component;

					return FieldComponent ? (
						<Box
							key={i}
							onClick={() => onButtonClick(i)}
							sx={{
								margin: 1,
							}}
						>
							<FieldComponent
								label={field.label || `${field.type} field`}
								value={
									field.formInitialValue ?? 'value here ...'
								}
								onDelete={() => onDeleteField(i)}
							/>
						</Box>
					) : null;
				})}
			</Box>
		</>
	);
}
