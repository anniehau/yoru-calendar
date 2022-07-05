import TaskService from '../services/task';
import { Response } from 'express';
import { RequestWithUser } from '../interfaces/user';

export default class TaskController {
	constructor(private service = new TaskService()) { }

	public getAllFromUser = async (req: RequestWithUser, res: Response) => {
		if (!req.user) throw new Error();

		const userId = Number(req.user.id);
		const result = await this.service.getAllFromUser(userId);
		return res.status(200).json(result);
	};

	public getByTitle = async (req: RequestWithUser, res: Response) => {
		if (!req.user) throw new Error();
	
		const userId = Number(req.user.id);
		const { title } = req.body;
	
		const result = await this.service.getByTitle(userId, title);
		return res.status(200).json(result);
	};

	public update = async (req: RequestWithUser, res: Response) => {
		if (!req.user) throw new Error();

		const userId = Number(req.user.id);
		const id = Number(req.params.id);
		const task = req.body;

		const result = await this.service.update(userId, id, task);
		return res.status(200).json(result);
	};

	public create = async (req: RequestWithUser, res: Response) => {
		if (!req.user) throw new Error();
	
		const userId = Number(req.user.id);
		const task = req.body;

		const result = await this.service.create(userId, task);
		return res.status(201).json(result);
	};

	public remove = async (req: RequestWithUser, res: Response) => {
		if (!req.user) throw new Error();
	
		const userId = Number(req.user.id);
		const id = Number(req.params.id);

		const result = await this.service.remove(userId, id);
		return res.status(200).json({ rowsDeleted: result });
	};
}
