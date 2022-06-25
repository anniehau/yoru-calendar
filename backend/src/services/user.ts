import UserModel from '../models/user';
import { RegisterBody, LoginBody } from '../interfaces/user';
import format from '../helpers/format';
import token from '../helpers/jwt';

export default class UserService {
	constructor(private model = new UserModel()) {}

	public getById = async (id: number) => {
		const result = await this.model.getById(id);
		if (!result) return null;
		return format.user.body(result);
	};

	public login = async (login: LoginBody) => {
		const user = await this.model.getOne(login.email);

		if (!user) return null;
		if (login.password !== user.password) return null;

		const formatted = format.user.body(user);
		return token.generate(formatted);
	};

	public register = async (user: RegisterBody) => {
		const userExists = await this.model.getOne(user.email);
		if (userExists) return null;

		const result = await this.model.register(user);
		return format.user.body(result);
	};
}
