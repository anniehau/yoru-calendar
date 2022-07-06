import { Md5 } from 'ts-md5';
import UserModel from '../models/user';
import { RegisterBody, LoginBody } from '../interfaces/user';
import format from '../helpers/format';
import token from '../helpers/jwt';
import { NotFound, Unauthorized, Conflict } from '../errors';

export default class UserService {
	constructor(private model = new UserModel()) {}

	public login = async (login: LoginBody) => {
		const user = await this.model.getByEmail(login.email);
		if (!user) throw new NotFound('User not found!');

		const passwordIsValid = Md5.hashStr(login.password) === user.password;
		if (!passwordIsValid) throw new Unauthorized('Your login data is incorrect!');

		const formatted = format.user.body(user);
		return { ...formatted, token: token.generate(formatted) };
	};

	public register = async (user: RegisterBody) => {
		const userExists = await this.model.getByEmail(user.email);
		if (userExists) throw new Conflict('User already exists!');

		const newUser = { ...user, password: Md5.hashStr(user.password) };
		const result = await this.model.register(newUser);

		const formatted = format.user.body(result);
		return { ...formatted, token: token.generate(formatted) };
	};
}
