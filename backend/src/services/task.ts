import TaskModel from '../models/task';

export default class TaskService {
	constructor(private model = new TaskModel()) { }

	public getAll = async () => {
		const result = await this.model.getAll();
		if (!result) return null;
		return result;
	};

	public getByTitle = async (title: string) => {
		const result = await this.model.getByTitle(title);
		if (!result) return null;
		return result;
	};
}
