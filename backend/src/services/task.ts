import TaskModel from '../models/task';
import { ITask } from '../interfaces/task';
import { NotFound } from '../errors';

export default class TaskService {
	constructor(private model = new TaskModel()) { }

	public getAllFromUser = async (userId: number) => {
		const result = await this.model.getAllFromUser(userId);
		return result;
	};

	public getByTitle = async (userId: number, title: string) => {
		const result = await this.model.getByTitle(userId, title);
		if (!result) throw new NotFound('Task not found!');
		return result;
	};

	public update = async (userId: number, id: number, task: ITask) => {
		const result = await this.model.update(userId, id, task);
		if (!result) throw new NotFound('Task not found!');
		return result;
	};

	public create = async (userId: number, task: ITask) => {
		const result = await this.model.create(userId, task);
		return result;
	};

	public remove = async (userId: number, id: number) => {
		const result = await this.model.remove(userId, id);
		if (result === 0) throw new NotFound('Task not found!');
		return result;
	};
}
