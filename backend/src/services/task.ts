import TaskModel from '../models/task';

export default class TaskService {
	constructor(private model = new TaskModel()) { }

	public getAll = async () => {
		const result = await this.model.getAll();
		if (!result) return null;
		return result;
	};
}
