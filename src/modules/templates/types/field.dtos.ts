import { FieldType } from './field.types';

export type CreateFieldDto<T extends FieldType> = Omit<T, 'camelCaseLabel'>;

export type UpdateFieldDto<T extends FieldType> = Partial<CreateFieldDto<T>>;
