import { CreateFieldDto, UpdateFieldDto } from './field.dtos';

export interface CreateTemplateDto {
	name: string;
	nameAr: string;

	fields: CreateFieldDto[];
}

export interface UpdateTemplateDto {
	name?: string;
	nameAr?: string;

	fields: UpdateFieldDto[];
}
