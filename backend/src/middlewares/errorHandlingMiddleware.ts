import { NextFunction, Request, Response } from 'express';
import { Conflict, NotFound, Unauthorized } from '../errors';

function errorHandlingMiddleware(
	err: Error,
	_req: Request,
	res: Response,
	// eslint-disable-next-line
	_next: NextFunction,
) {
	if (err instanceof NotFound) {
		return res.status(404).json({ error: err.message });
	}

	if (err instanceof Unauthorized) {
		return res.status(401).json({ error: err.message });
	}

	if (err instanceof Conflict) {
		return res.status(409).json({ error: err.message });
	}

	console.log(err);
	return res.status(500).json({ error: 'An internal error has occurred!' });
}

export default errorHandlingMiddleware;
