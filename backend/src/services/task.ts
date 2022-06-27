import TaskModel from '../models/task';
import { ITask } from '../interfaces/task';

export default class TaskService {
	constructor(private model = new TaskModel()) { }

	public getAllFromUser = async (userId: number) => {
		const result = await this.model.getAllFromUser(userId);
		if (!result) return null;
		return result;
	};

	public getByTitle = async (userId: number, title: string) => {
		const result = await this.model.getByTitle(userId, title);
		if (!result) return null;
		return result;
	};

	public update = async (id: number, task: ITask) => {
		const result = await this.model.update(task);
		if (!result) return null;
		return result;
	};

	public create = async (task: ITask) => {
		const result = await this.model.create(task);
		return result;
	};

	public remove = async (id: number) => {
		const result = await this.model.remove(id);
		if (result === 0) return null;
		return result;
	};
}
