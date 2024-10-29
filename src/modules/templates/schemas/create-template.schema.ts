import Joi from 'joi';
import { CreateTemplateDto } from '../types/template.dtos';

const creatTemplateSchema = Joi.object<CreateTemplateDto>({
	name: Joi.string()
		.pattern(/^[a-zA-Z ]+$/)
		.required(),
	nameAr: Joi.string()
		.pattern(new RegExp('^[\\u0621-\\u064A\\u0660-\\u0669\\s]+$'))
		.required(),
	fields: Joi.array(),
});

export default creatTemplateSchema;
