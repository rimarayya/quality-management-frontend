import { CreateFieldDto } from '../types/field.dtos';
import {
	BooleanFieldObj,
	DateFieldObj,
	DatetimeFieldObj,
	EnumFieldObj,
	FieldTypeEnum,
	NumberFieldObj,
	ReferenceFieldObj,
	StringFieldObj,
	TimeFieldObj,
} from '../types/field.types';

export function createBooleanField(): CreateFieldDto<BooleanFieldObj> {
	return {
		type: FieldTypeEnum.Boolean,
		required: false,
		label: '',
		labelAr: '',
	};
}

export function createStringField(): CreateFieldDto<StringFieldObj> {
	return {
		type: FieldTypeEnum.String,
		required: false,
		label: '',
		labelAr: '',
	};
}

export function createDateField(): CreateFieldDto<DateFieldObj> {
	return {
		type: FieldTypeEnum.Date,
		required: false,
		label: '',
		labelAr: '',
	};
}

export function createDatetimeField(): CreateFieldDto<DatetimeFieldObj> {
	return {
		type: FieldTypeEnum.Datetime,
		required: false,
		label: '',
		labelAr: '',
	};
}

export function createTimeField(): CreateFieldDto<TimeFieldObj> {
	return {
		type: FieldTypeEnum.Time,
		required: false,
		label: '',
		labelAr: '',
	};
}

export function createNumberField(): CreateFieldDto<NumberFieldObj> {
	return {
		type: FieldTypeEnum.Number,
		required: false,
		label: '',
		labelAr: '',
	};
}

export function createEnumField(): CreateFieldDto<EnumFieldObj> {
	return {
		type: FieldTypeEnum.Enum,
		required: false,
		label: '',
		labelAr: '',
		enum: [],
	};
}

export function createReferenceField(): CreateFieldDto<ReferenceFieldObj> {
	return {
		type: FieldTypeEnum.Reference,
		required: false,
		label: '',
		labelAr: '',
		displayFields: [],
		separator: '',
	};
}
