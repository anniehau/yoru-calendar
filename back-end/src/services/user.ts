import UserModel from '../models/user';
import { UserBody } from '../interfaces/user';

export default class UserService {
	constructor(protected model = new UserModel()) {}

	public async getOne(id: number) {
		const result = await this.model.getOne(id);
		if (!result) return null;
		return result;
	}

	public async create(user: UserBody) {
		const result = await this.model.create(user);
		if (!result) return null;
		return result;
	}
}
