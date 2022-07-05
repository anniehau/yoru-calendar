import User from '../database/models/User';
import jwt from '../helpers';
import { Response, NextFunction } from 'express';
import { IUser, RequestWithUser } from '../interfaces/user';
import { Unauthorized } from '../errors';

const validateToken = async (req: RequestWithUser, res: Response, next: NextFunction) => {
	const token = req.headers.authorization;
	if (!token) throw new Unauthorized('Token not provided.');
	try {
		const { email } = jwt.token.verify(token) as IUser;
		const user = await User.findOne({ where: { email } });
		if (!user) throw new Unauthorized('Expired or invalid token.');
		req.user = user;
		next();
	} catch (error) {
		console.log(error);
		throw new Unauthorized('Expired or invalid token.');
	}
};

export default validateToken;
