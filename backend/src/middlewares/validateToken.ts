import User from '../database/models/User';
import jwt from '../helpers';
import { Response, NextFunction } from 'express';
import { IUser, RequestWithUser } from '../interfaces/user';

const validateToken = async (req: RequestWithUser, res: Response, next: NextFunction) => {
	const token = req.headers.authorization;
	if (!token) return res.status(401).json({ error: 'Token not provided!' });
	try {
		const { email } = jwt.token.verify(token) as IUser;
		const user = await User.findOne({ where: { email } });
		if (!user) return res.status(401).json({ error: 'Expired or invalid token.' });
		req.user = user;
		next();
	} catch (error) {
		console.log(error);
		return res.status(401).json({ error: 'Expired or invalid token.' });
	}
};

export default validateToken;
