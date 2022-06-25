import UserModel from '../models/user';
import { UserBody, LoginBody } from '../interfaces/user';
import format from '../helpers/format';

export default class UserService {
	constructor(private model = new UserModel()) {}

	public getById = async (id: number) => {
		const result = await this.model.getById(id);
		if (!result) return null;
		return format.user.body(result);
	};

	public login = async (login: LoginBody) => {
		const userExists = await this.model.getOne(login.email);
		if (userExists) return null;
		return login;
	};

	public register = async (user: UserBody) => {
		const userExists = await this.model.getOne(user.email);
		if (userExists) return null;

		const result = await this.model.register(user);
		return format.user.body(result);
	};
}
