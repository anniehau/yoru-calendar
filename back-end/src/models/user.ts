import User from '../database/models/User';
import { DbResult, UserBody } from '../interfaces/user';

export default class UserModel {
	public async getById(id: number): Promise<DbResult> {
		const result = await User.scope('noPassword').findByPk(id);
		return result;
	}

	public async getOne(email: string): Promise<DbResult> {
		const result = await User.scope('noPassword').findOne({ where: { email } });
		return result;
	}

	public async register(user: UserBody): Promise<DbResult> {
		const userExists = await this.getOne(user.email);
		if (userExists) return null;

		const result = await User.scope('noPassword').create(user);
		return result;
	}
}
