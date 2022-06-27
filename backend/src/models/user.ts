import User from '../database/models/User';
import { IUser, DbResult, RegisterBody } from '../interfaces/user';

export default class UserModel {
	public async getOne(email: string): Promise<DbResult> {
		const result = await User.findOne({ where: { email } });
		return result;
	}

	public async getById(id: number): Promise<DbResult> {
		const result = await User.findByPk(id);
		return result;
	}

	public async register(user: RegisterBody): Promise<IUser> {
		const result = await User.create(user);
		return result;
	}
}
