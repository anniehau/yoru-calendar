import Task from '../database/models/Task';
import { DbResult } from '../interfaces/task';

export default class TaskModel {
	public getAll = async (): Promise<DbResult[]> => {
		const result = await Task.findAll();
		return result;
	};
}
