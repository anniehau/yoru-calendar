import UserService from '../services/user';
import { Request, Response } from 'express';

export default class UserController {
	constructor(private service = new UserService()) { }

	public login = async (req: Request, res: Response) => {
		const user = req.body;
		const result = await this.service.login(user);
		return res.status(200).json(result);
	};

	public register = async (req: Request, res: Response) => {
		const user = req.body;
		const result = await this.service.register(user);
		return res.status(201).json(result);
	};
}
