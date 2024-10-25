import {
	NumberFieldObj,
	StringFieldObj,
	BooleanFieldObj,
	DateFieldObj,
	TimeFieldObj,
	DatetimeFieldObj,
	EnumFieldObj,
	ReferenceFieldObj,
} from './field.types';

export type CreateFieldDto =
	| Omit<NumberFieldObj, 'camelCaseLabel'>
	| Omit<StringFieldObj, 'camelCaseLabel'>
	| Omit<BooleanFieldObj, 'camelCaseLabel'>
	| Omit<DateFieldObj, 'camelCaseLabel'>
	| Omit<TimeFieldObj, 'camelCaseLabel'>
	| Omit<DatetimeFieldObj, 'camelCaseLabel'>
	| Omit<EnumFieldObj, 'camelCaseLabel'>
	| Omit<ReferenceFieldObj, 'camelCaseLabel'>;

export type UpdateFieldDto = Partial<CreateFieldDto>;
