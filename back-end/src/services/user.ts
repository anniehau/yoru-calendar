import UserModel from '../models/user';
import { UserBody } from '../interfaces/user';

export default class UserService {
	constructor(private model = new UserModel()) {}

	public getById = async (id: number) => {
		const result = await this.model.getById(id);
		if (!result) return null;
		return result;
	};

	public getOne = async (email: string) => {
		const result = await this.model.getOne(email);
		if (!result) return null;
		return result;
	};

	public register = async (user: UserBody) => {
		const result = await this.model.register(user);
		if (!result) return null;
		return result;
	};
}
