import Joi from 'joi';
import { CreateTemplateDto } from '../types/template.dtos';
import { FieldTypeEnum } from '../types/field.types';

const FieldTypeEnumValues = Object.values(FieldTypeEnum);

const FieldSchema = Joi.object({
	type: Joi.string()
		.valid(...FieldTypeEnumValues)
		.required(),
	label: Joi.string()
		.pattern(/^[a-zA-Z ]+$/)
		.required()
		.messages({
			'string.base': 'label must be a valid string',
			'string.empty': 'label cannot be empty',
			'string.pattern.base':
				'label should contain only letters and spaces',
			'any.required': 'label is required',
		}),
	labelAr: Joi.string()
		.pattern(new RegExp('^[\\u0621-\\u064A\\u0660-\\u0669\\s]+$'))
		.required()
		.messages({
			'string.base': 'Arabic label must be a valid string',
			'string.empty': 'Arabic label cannot be empty',
			'string.pattern.base':
				'Arabic label should contain only Arabic letters and spaces',
			'any.required': 'Arabic label is required',
		}),
	required: Joi.boolean(),
	defaultValue: Joi.when('type', {
		switch: [
			{
				is: 'number',
				then: Joi.number()
					.when('required', {
						is: false,
						then: Joi.number(),
						otherwise: Joi.forbidden(),
					})
					.label('Default value')
					.messages({
						'number.empty': 'Form initial value cannot be empty.',
						'number.base': 'Default value must be a valid number.',
						'any.required': 'Default value is required.',
						'any.forbidden': 'Default value is not allowed.',
					}),
			},
			{
				is: 'string',
				then: Joi.string()
					.when('required', {
						is: false,
						then: Joi.string(),
						otherwise: Joi.forbidden(),
					})
					.label('Default value')
					.messages({
						'string.empty': 'Default value cannot be empty',
						'string.base': 'Default value must be a valid string.',
						'any.required': 'Default value is required.',
						'any.forbidden': 'Default value is not allowed.',
					}),
			},
			{
				is: 'boolean',
				then: Joi.boolean()
					.when('required', {
						is: false,
						then: Joi.boolean(),
						otherwise: Joi.forbidden(),
					})
					.label('Default value')
					.messages({
						'boolean.base':
							'Default value must be a valid boolean.',
						'any.required': 'Default value is required.',
						'any.forbidden': 'Default value is not allowed.',
					}),
			},
			{
				is: 'date',
				then: Joi.date()
					.when('required', {
						is: false,
						then: Joi.date(),
						otherwise: Joi.forbidden(),
					})
					.label('Default value')
					.messages({
						'date.base': 'Default value must be a valid date.',
						'any.required': 'Default value is required.',
						'any.forbidden': 'Default value is not allowed.',
					}),
			},
			{
				is: 'time',
				then: Joi.string()
					.pattern(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/)
					.when('required', {
						is: false,
						then: Joi.string().pattern(
							/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/
						),
						otherwise: Joi.forbidden(),
					})
					.label('Default value')
					.messages({
						'string.empty': 'Default value cannot be empty',
						'string.base':
							'Default value must be a valid time in HH:mm:ss format.',
						'string.pattern.base':
							'Default value must match the time format HH:mm:ss.',
						'any.required':
							'Default value is required when the field is required.',
						'any.forbidden':
							'Default value is not allowed for required fields.',
					}),
			},
			{
				is: 'datetime',
				then: Joi.date()
					.iso()
					.when('required', {
						is: false,
						then: Joi.date().iso(),
						otherwise: Joi.forbidden(),
					})
					.label('Default value')
					.messages({
						'date.format':
							'Default value must be a valid ISO date-time.',
						'any.required':
							'Default value is required when the field is required.',
						'any.forbidden':
							'Default value is not allowed for required fields.',
					}),
			},
			{
				is: 'enum',
				then: Joi.any().when('required', {
					is: false,
					then: Joi.any,
					otherwise: Joi.forbidden(),
				}),
				// .label('Default value')
				// .messages({
				// 	'any.empty': 'Default value cannot be empty.',
				// 	'any.required':
				// 		'Default value is required when the field is required.',
				// 	'any.forbidden':
				// 		'Default value is not allowed for required fields.',
				// }),
			},
			{
				is: 'reference',
				then: Joi.any().when('required', {
					is: false,
					then: Joi.any(),
					otherwise: Joi.forbidden(),
				}),
				// .label('Default value')
				// .messages({
				// 	'any.empty': 'Default value cannot be empty.',
				// 	'any.required':
				// 		'Default value is required when the field is required.',
				// 	'any.forbidden':
				// 		'Default value is not allowed for required fields.',
				// }),
			},
		],
		otherwise: Joi.forbidden(),
	}),
	formInitialValue: Joi.when('type', {
		switch: [
			{
				is: 'number',
				then: Joi.number().label('Form initial value').messages({
					'number.base': 'Form initial value must be a valid number.',
					'any.required': 'Form initial value is required.',
				}),
			},
			{
				is: 'string',
				then: Joi.string().label('Form initial value').messages({
					'string.empty': 'Form initial value cannot be empty.',
					'string.base': 'Form initial value must be a valid string.',
					'any.required': 'Form initial value is required.',
				}),
			},
			{
				is: 'boolean',
				then: Joi.boolean().label('Form initial value').messages({
					'boolean.base':
						'Form initial value must be a valid boolean.',
					'any.required': 'Form initial value is required.',
				}),
			},
			{
				is: 'date',
				then: Joi.date().label('Form initial value').messages({
					'date.base': 'Form initial value must be a valid date.',
					'any.required': 'Form initial value is required.',
				}),
			},
			{
				is: 'time',
				then: Joi.string()
					.pattern(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/)
					.label('Form initial value')
					.messages({
						'string.empty': 'Form initial value cannot be empty.',
						'string.base':
							'Form initial value must be a valid time.',
						'string.pattern.base':
							'Form initial value must match the time format HH:mm:ss.',
						'any.required': 'Form initial value is required.',
					}),
			},
			{
				is: 'datetime',
				then: Joi.date().iso().label('Form initial value').messages({
					'date.format':
						'Form initial value must be a valid ISO date-time.',
					'any.required': 'Form initial value is required.',
				}),
			},
			{
				is: 'enum',
				then: Joi.any().label('Form initial value'),
				// .messages({
				// 	'any.empty': 'Form initial value is required.',
				// }),
			},
			{
				is: 'reference',
				then: Joi.any().label('Form initial value'),
				// .messages({
				// 	'any.empty': 'Form initial value is required.',
				// }),
			},
		],
		otherwise: Joi.forbidden().messages({
			'any.forbidden':
				'Form initial value is not allowed for this field type.',
		}),
	}),
	// Conditional fields based on the type
	when: Joi.object()
		.keys({
			type: Joi.string().valid(
				'number',
				'string',
				'boolean',
				'date',
				'time',
				'datetime',
				'enum',
				'reference'
			),
		})
		.unknown(),
});
const createTemplateSchema = Joi.object<CreateTemplateDto>({
	name: Joi.string()
		.pattern(/^[a-zA-Z ]+$/)
		.required()
		.messages({
			'string.base': 'Name must be a valid string',
			'string.empty': 'Name cannot be empty',
			'string.pattern.base':
				'Name should contain only letters and spaces',
			'any.required': 'Name is required',
		}),
	nameAr: Joi.string()
		.pattern(new RegExp('^[\\u0621-\\u064A\\u0660-\\u0669\\s]+$'))
		.required()
		.messages({
			'string.base': 'Arabic name must be a valid string',
			'string.empty': 'Arabic name cannot be empty',
			'string.pattern.base':
				'Arabic name should contain only Arabic letters and spaces',
			'any.required': 'Arabic name is required',
		}),
	fields: Joi.array().items(FieldSchema),
});

export default createTemplateSchema;
