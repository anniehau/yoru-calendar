import { IUser } from '../interfaces/user';

const user = {
	body: (user: IUser) => ({ id: user.id, name: user.name, email: user.email }),
};

const format = { user };

export default format;
