import { Request, Response } from 'express';
import { NotFound, Unauthorized } from '../errors';

const INTERNAL_ERROR = { message: 'An internal error has occurred!' };

function errorHandlingMiddleware(
	err: Error,
	_req: Request,
	res: Response,
) {
	if (err instanceof NotFound) {
		return res.status(404).json({ message: err.message });
	}

	if (err instanceof Unauthorized) {
		return res.status(401).json({ message: err.message });
	}

	console.log(err);
	return res.status(500).json(INTERNAL_ERROR);
}

export default errorHandlingMiddleware;
