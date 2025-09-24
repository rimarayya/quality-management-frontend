import {
	BooleanFieldObj,
	DateFieldObj,
	DatetimeFieldObj,
	EnumFieldObj,
	NumberFieldObj,
	ReferenceFieldObj,
	StringFieldObj,
	TimeFieldObj,
} from './field.types';

export type FormFieldObj =
	| NumberFieldObj
	| StringFieldObj
	| BooleanFieldObj
	| DateFieldObj
	| DatetimeFieldObj
	| TimeFieldObj
	| EnumFieldObj
	| ReferenceFieldObj;

export interface TemplateObj {
	_id: string;

	name: string;
	nameAr: string;

	camelCaseName: string;

	fields: Record<string, FormFieldObj>;
}
