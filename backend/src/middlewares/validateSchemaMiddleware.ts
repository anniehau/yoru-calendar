import { RequestHandler } from 'express';
import { Schema } from 'joi';

function validateSchemaMiddleware(schema: Schema) {
	const middleware: RequestHandler = (req, res, next) => {
		const { error } = schema.validate(req.body);
		if (error) return res.status(400).json({ error: error.message });
		next();
	};
	return middleware;
}

export default validateSchemaMiddleware;
