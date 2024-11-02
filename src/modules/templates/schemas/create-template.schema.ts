import Joi from 'joi';
import { CreateTemplateDto } from '../types/template.dtos';

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
	fields: Joi.array().messages({
		'array.base': 'Fields must be an array',
	}),
});

export default createTemplateSchema;
