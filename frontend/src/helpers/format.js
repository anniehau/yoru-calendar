const user = {
	obj: (user) => ({ name: user.name, email: user.email, token: user.token }),
};

const task = {
	datetime: (datetime) => datetime.replace(/\.\d+Z/, ''),
};

const format = { user, task };

export default format;
