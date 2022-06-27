import TaskService from '../services/task';
import { Response } from 'express';
import { RequestWithUser } from '../interfaces/user';

export default class TaskController {
	constructor(private service = new TaskService()) { }

	public getAllFromUser = async (req: RequestWithUser, res: Response) => {
		if (!req.user) return res.status(500).json({ error: 'Unknown token error!' });
		const userId = Number(req.user.id);
		try {
			const result = await this.service.getAllFromUser(userId);
			return res.status(200).json(result);
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: 'The server ran into some kind of problem!' });
		}
	};

	public getByTitle = async (req: RequestWithUser, res: Response) => {
		if (!req.user) return res.status(500).json({ error: 'Unknown token error!' });
		const userId = Number(req.user.id);
		const { title } = req.body;
		try {
			const result = await this.service.getByTitle(userId, title);
			if (!result) return res.status(404).json({ error: 'Task not found!' });
			return res.status(200).json(result);
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: 'The server ran into some kind of problem!' });
		}
	};

	public update = async (req: RequestWithUser, res: Response) => {
		if (!req.user) return res.status(500).json({ error: 'Unknown token error!' });
		const userId = Number(req.user.id);
		const id = Number(req.params.id);
		const task = req.body;
		try {
			const result = await this.service.update(userId, id, task);
			if (!result) return res.status(404).json({ error: 'Task not found!' });
			return res.status(200).json(result);
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: 'The server ran into some kind of problem!' });
		}
	};

	public create = async (req: RequestWithUser, res: Response) => {
		if (!req.user) return res.status(500).json({ error: 'Unknown token error!' });
		const userId = Number(req.user.id);
		const task = req.body;
		try {
			const result = await this.service.create(userId, task);
			return res.status(201).json(result);
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: 'The server ran into some kind of problem!' });
		}
	};

	public remove = async (req: RequestWithUser, res: Response) => {
		if (!req.user) return res.status(500).json({ error: 'Unknown token error!' });
		const userId = Number(req.user.id);
		const id = Number(req.params.id);
		try {
			const result = await this.service.remove(userId, id);
			if (!result) return res.status(404).json({ error: 'Task not found!' });
			return res.status(200).json({ rowsDeleted: result });
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: 'The server ran into some kind of problem!' });
		}
	};
}
