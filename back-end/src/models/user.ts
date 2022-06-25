import { DbResult, UserBody } from '../interfaces/user';
import User from '../database/models/User';

export default class UserModel {
	public async getOne(id: number): Promise<DbResult> {
		const result = await User.findByPk(id);
		if (!result) return null;
		delete result.password;
		return result;
	}

	public async create(user: UserBody): Promise<DbResult> {
		const result = await User.create(user);
		delete result.password;
		return result;
	}
}
