import Joi from 'joi';

export default class UserSchema {
	public loginBody = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(6).required(),
	});

	public registerBody = Joi.object({
		name: Joi.string().min(3).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(6).required(),
	});
}
