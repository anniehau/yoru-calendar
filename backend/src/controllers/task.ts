import TaskService from '../services/task';
import { Request, Response } from 'express';

export default class TaskController {
	constructor(private service = new TaskService()) { }

	public getAllFromUser = async (req: Request, res: Response) => {
		const { userId } = req.body;
		try {
			const result = await this.service.getAllFromUser(userId);
			return res.status(200).json(result);
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: 'The server ran into some kind of problem!' });
		}
	};

	public getByTitle = async (req: Request, res: Response) => {
		const { userId, title } = req.body;
		try {
			const result = await this.service.getByTitle(userId, title);
			if (!result) return res.status(404).json({ error: 'Task not found!' });
			return res.status(200).json(result);
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: 'The server ran into some kind of problem!' });
		}
	};

	public update = async (req: Request, res: Response) => {
		const { id } = req.params;
		try {
			const result = await this.service.update(Number(id), req.body);
			if (!result) return res.status(404).json({ error: 'Task not found!' });
			return res.status(200).json(result);
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: 'The server ran into some kind of problem!' });
		}
	};

	public create = async (req: Request, res: Response) => {
		try {
			const result = await this.service.create(req.body);
			return res.status(201).json(result);
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: 'The server ran into some kind of problem!' });
		}
	};

	public remove = async (req: Request, res: Response) => {
		const { id } = req.params;
		try {
			const result = await this.service.remove(Number(id));
			if (!result) return res.status(404).json({ error: 'Task not found!' });
			return res.status(200).json({ rowsDeleted: result });
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: 'The server ran into some kind of problem!' });
		}
	};
}
