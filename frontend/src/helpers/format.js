const user = {
	obj: (user) => ({ name: user.name, email: user.email, token: user.token }),
};

const task = {
	date: (datetime) => new Date(datetime).substring(0, datetime.indexOf('T')).replaceAll('-', '/'),
	time: (datetime, locale='en_us') => new Date(datetime).toLocaleTimeString(locale),
	datetime: (datetime) => datetime.replace(/\.\d+Z/, ''),
};

const format = { user, task };

export default format;
