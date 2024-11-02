import { CreateFieldDto, UpdateFieldDto } from './field.dtos';
import { FieldType } from './field.types';

export interface CreateTemplateDto {
	name: string;
	nameAr: string;

	fields: CreateFieldDto<FieldType>[];
}

export interface UpdateTemplateDto {
	name?: string;
	nameAr?: string;

	fields: UpdateFieldDto<FieldType>[];
}
