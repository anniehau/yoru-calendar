import { Request, Response } from 'express';
import UserService from '../services/user';

export default class UserController {
	constructor(protected service = new UserService()) {}

	public async getOne(req: Request, res: Response) {
		const { id } = req.body;
		
		try {
			const result = await this.service.getOne(id);
			if (!result) return res.status(404).json({ error: 'User not found!' });
			return res.status(200).json(result);
		} catch (error) {
			res.status(500).json({ error });
		}
	}

	public async create(req: Request, res: Response) {
		try {
			const result = await this.service.create(req.body);
			return res.status(201).json(result);
		} catch (error) {
			res.status(500).json({ error });
		}
	}
}
