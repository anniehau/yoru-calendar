import UserService from '../services/user';
import { Request, Response } from 'express';

export default class UserController {
	constructor(private service = new UserService()) { }

	public getOne = async (req: Request, res: Response) => {
		const { email } = req.body;
		try {
			const result = await this.service.getOne(email);
			if (!result) return res.status(401).json({ error: 'User not found!' });
			return res.status(200).json(result);
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: 'The server ran into some kind of problem!' });
		}
	};

	public getById = async (req: Request, res: Response) => {
		const { id } = req.params;
		try {
			const result = await this.service.getById(Number(id));
			if (!result) return res.status(404).json({ error: 'User not found!' });
			return res.status(200).json(result);
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: 'The server ran into some kind of problem!' });
		}
	};


	public login = async (req: Request, res: Response) => {
		try {
			const result = await this.service.login(req.body);
			if (!result) return res.status(401).json({ error: 'Your login data is incorrect!' });
			return res.status(200).json(result);
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: 'The server ran into some kind of problem!' });
		}
	};

	public register = async (req: Request, res: Response) => {
		try {
			const result = await this.service.register(req.body);
			if (!result) return res.status(400).json({ error: 'User already exists!' });
			return res.status(201).json(result);
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: 'The server ran into some kind of problem!' });
		}
	};
}
