import Joi from 'joi';
import { CreateTemplateDto } from '../types/template.dtos';
import { FieldTypeEnum } from '../types/field.types';

const baseFieldSchema = Joi.object({
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
	required: Joi.boolean().required(),
});

// const numberFieldSchema = baseFieldSchema.keys({
// 	type: Joi.string().equal(FieldTypeEnum.Number).required(),
// 	defaultValue: Joi.number().when('required', {
// 		is: false,
// 		then: Joi.number(),
// 		otherwise: Joi.forbidden(),
// 	}),
// 	formInitialValue: Joi.string().when('required', {
// 		is: false,
// 		then: Joi.string(),
// 		otherwise: Joi.forbidden(),
// 	}),
// });

const stringFieldSchema = baseFieldSchema.keys({
	type: Joi.string().equal(FieldTypeEnum.String).required(),
	defaultValue: Joi.boolean().when('required', {
		is: false,
		then: Joi.boolean(),
		otherwise: Joi.forbidden(),
	}),
	formInitialValue: Joi.boolean().when('required', {
		is: false,
		then: Joi.boolean(),
		otherwise: Joi.forbidden(),
	}),
});

// const booleanFieldSchema = baseFieldSchema.keys({
// 	type: Joi.string().equal(FieldTypeEnum.Boolean).required(),
// 	defaultValue: Joi.boolean().when('required', {
// 		is: false,
// 		then: Joi.boolean(),
// 		otherwise: Joi.forbidden(),
// 	}),
// 	formInitialValue: Joi.boolean().when('required', {
// 		is: false,
// 		then: Joi.boolean(),
// 		otherwise: Joi.forbidden(),
// 	}),
// });

// const dateFieldSchema = baseFieldSchema.keys({
// 	type: Joi.string().equal(FieldTypeEnum.Date).required(),
// 	defaultValue: Joi.date().when('required', {
// 		is: false,
// 		then: Joi.date(),
// 		otherwise: Joi.forbidden(),
// 	}),
// 	formInitialValue: Joi.date().when('required', {
// 		is: false,
// 		then: Joi.date(),
// 		otherwise: Joi.forbidden(),
// 	}),
// });

// const timeFieldSchema = baseFieldSchema.keys({
// 	type: Joi.string().equal(FieldTypeEnum.Time).required(),
// 	defaultValue: Joi.string()
// 		.pattern(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/)
// 		.when('required', {
// 			is: false,
// 			then: Joi.string().pattern(
// 				/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/
// 			),
// 			otherwise: Joi.forbidden(),
// 		}),
// 	formInitialValue: Joi.string()
// 		.pattern(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/)
// 		.when('required', {
// 			is: false,
// 			then: Joi.string().pattern(
// 				/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/
// 			),
// 			otherwise: Joi.forbidden(),
// 		}),
// });

// const datetimeFieldSchema = baseFieldSchema.keys({
// 	type: Joi.string().equal(FieldTypeEnum.Datetime).required(),
// 	defaultValue: Joi.date().iso().when('required', {
// 		is: false,
// 		then: Joi.date().iso(),
// 		otherwise: Joi.forbidden(),
// 	}),
// 	formInitialValue: Joi.date().iso().when('required', {
// 		is: false,
// 		then: Joi.date().iso(),
// 		otherwise: Joi.forbidden(),
// 	}),
// });

// const enumFieldSchema = baseFieldSchema.keys({
// 	type: Joi.string().equal(FieldTypeEnum.Enum).required(),
// 	defaultValue: Joi.any().when('required', {
// 		is: false,
// 		then: Joi.any(),
// 		otherwise: Joi.forbidden(),
// 	}),
// 	formInitialValue: Joi.any().when('required', {
// 		is: false,
// 		then: Joi.any(),
// 		otherwise: Joi.forbidden(),
// 	}),
// });

// const referenceFieldSchema = baseFieldSchema.keys({
// 	type: Joi.string().equal(FieldTypeEnum.Reference).required(),
// 	defaultValue: Joi.any().when('required', {
// 		is: false,
// 		then: Joi.any(),
// 		otherwise: Joi.forbidden(),
// 	}),
// 	formInitialValue: Joi.any().when('required', {
// 		is: false,
// 		then: Joi.any(),
// 		otherwise: Joi.forbidden(),
// 	}),
// });

// const fieldsSchema = Joi.array().items(
// 	Joi.alternatives().try(
// 		numberFieldSchema,
// 		stringFieldSchema,
// 		booleanFieldSchema,
// 		dateFieldSchema,
// 		timeFieldSchema,
// 		datetimeFieldSchema,
// 		enumFieldSchema,
// 		referenceFieldSchema
// 	)
// );

// const fieldSchema = Joi.alternatives().try(
// 	numberFieldSchema,
// 	stringFieldSchema,
// 	booleanFieldSchema,
// 	dateFieldSchema,
// 	timeFieldSchema,
// 	datetimeFieldSchema,
// 	enumFieldSchema,
// 	referenceFieldSchema
// );
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
	fields:
		// Joi.array()
		// 	.items(
		// 		Joi.object({
		// 			type: Joi.string()
		// 				.valid(
		// 					'string'
		// 					// 'number',
		// 					// 'boolean',
		// 					// 'date',
		// 					// 'time',
		// 					// 'datetime',
		// 					// 'enum',
		// 					// 'reference'
		// 				)
		// 				.required(),
		// 		}).unknown(true)
		// 	)
		// 	.optional()
		// 	.messages({
		// 		'array.base': 'Fields must be an array',
		// 	}),
		Joi.array().items(stringFieldSchema).optional().messages({
			'array.base': 'Fields must be an array',
		}),
});

export default createTemplateSchema;
