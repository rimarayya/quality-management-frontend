export enum FieldTypeEnum {
	Number = 'number',
	String = 'string',
	Boolean = 'boolean',
	/**
	 * ISO Date its time part is set to 00:00:00.
	 */
	Date = 'date',
	/**
	 * ISO Date its date part is set to 1970-01-01.
	 */
	Time = 'time',
	/**
	 * Normal ISO Date.
	 */
	Datetime = 'datetime',
	Enum = 'enum',
	Reference = 'reference',
}

export type FieldTypeMappingType = {
	[FieldTypeEnum.Number]: number;
	[FieldTypeEnum.String]: string;
	[FieldTypeEnum.Boolean]: boolean;
	[FieldTypeEnum.Date]: Date;
	[FieldTypeEnum.Time]: Date;
	[FieldTypeEnum.Datetime]: Date;
	[FieldTypeEnum.Enum]: string | number | boolean;
	[FieldTypeEnum.Reference]: string;
};

export type FieldType =
	| NumberFieldObj
	| BooleanFieldObj
	| DateFieldObj
	| DatetimeFieldObj
	| TimeFieldObj
	| EnumFieldObj
	| ReferenceFieldObj
	| StringFieldObj;

export interface BaseFieldObj<type extends FieldTypeEnum> {
	type: type;

	label: string;
	camelCaseLabel: string;
	labelAr: string;

	required: boolean;
	defaultValue?: FieldTypeMappingType[type];
	formInitialValue?: FieldTypeMappingType[type];
}

export interface NumberFieldObj extends BaseFieldObj<FieldTypeEnum.Number> {}
export interface StringFieldObj extends BaseFieldObj<FieldTypeEnum.String> {}
export interface BooleanFieldObj extends BaseFieldObj<FieldTypeEnum.Boolean> {}
export interface DateFieldObj extends BaseFieldObj<FieldTypeEnum.Date> {}
export interface TimeFieldObj extends BaseFieldObj<FieldTypeEnum.Time> {}
export interface DatetimeFieldObj
	extends BaseFieldObj<FieldTypeEnum.Datetime> {}
export interface EnumFieldObj extends BaseFieldObj<FieldTypeEnum.Enum> {
	enum: FieldTypeMappingType[FieldTypeEnum.Enum][];
}
export interface ReferenceFieldObj
	extends BaseFieldObj<FieldTypeEnum.Reference> {
	displayFields: string[];
	separator: string;
}
