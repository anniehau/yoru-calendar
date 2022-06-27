import Task from '../database/models/Task';
import { DbResult, ITask } from '../interfaces/task';
import { Op } from 'sequelize';

export default class TaskModel {
	public getAll = async (): Promise<DbResult[]> => {
		const result = await Task.findAll();
		return result;
	};

	public getByTitle = async (title: string): Promise<DbResult> => {
		const result = await Task.findOne({ where: {
			title: {
				[Op.substring]: title,
			}
		}});
		return result;
	};

	public update = async (task: ITask): Promise<DbResult> => {
		const result = await Task.findByPk(task.id);
		if (!result) return null;
		result.set(task);
		return result;
	};

	public create = async (task: ITask): Promise<DbResult> => {
		const result = await Task.create(task);
		return result;
	};

	public remove = async (id: number): Promise<number> => {
		const result = await Task.destroy({ where: { id } });
		return result;
	};
}
