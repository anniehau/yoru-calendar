import Task from '../database/models/Task';
import { DbResult, ITask } from '../interfaces/task';
import { Op } from 'sequelize';

export default class TaskModel {
	public getAllFromUser = async (userId: number): Promise<DbResult[]> => {
		const result = await Task.findAll({ where: { userId } });
		return result;
	};

	public getByTitle = async (userId: number, title: string): Promise<DbResult> => {
		const result = await Task.findOne({ where: {
			userId,
			title: {
				[Op.substring]: title,
			}
		}});
		return result;
	};

	public update = async (userId: number, id: number, task: ITask): Promise<DbResult> => {
		const result = await Task.findOne({ where: { userId, id } });
		if (!result) return null;
		result.set(task);
		return result;
	};

	public create = async (userId: number, task: ITask): Promise<DbResult> => {
		const result = await Task.create({ ...task, userId });
		return result;
	};

	public remove = async (userId: number, id: number): Promise<number> => {
		const result = await Task.destroy({ where: { id, userId } });
		return result;
	};
}
