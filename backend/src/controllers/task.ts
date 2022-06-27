import TaskService from '../services/task';
import { Request, Response } from 'express';

export default class TaskController {
	constructor(private service = new TaskService()) { }

	public getAll = async (req: Request, res: Response) => {
		try {
			const result = await this.service.getAll();
			return res.status(200).json(result);
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: 'The server ran into some kind of problem!' });
		}
	};

	public getByEmail = async (req: Request, res: Response) => {
		const { title } = req.body;
		try {
			const result = await this.service.getByTitle(title);
			if (!result) return res.status(404).json({ error: 'Task not found!' });
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: 'The server ran into some kind of problem!' });
		}
	};
}
