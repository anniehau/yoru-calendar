const user = {
	obj: (user) => ({ name: user.name, email: user.email, token: user.token }),
};

const task = {
	datetime: (datetime) => {
		const date = new Date(datetime);
		const day = date.getDate()+1 < 10 ? `0${date.getDate()}`:date.getDate();
		const month = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}`: date.getMonth()+1;
		const year = date.getFullYear();
		if (year < 2000) return false;
		const hours = date.getHours();
		const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes();
		const formatted = `${[year, month, day].join('-')}T${[hours, minutes].join(':')}`;
		return formatted;
	},
	body: (body) => ({
		...body,
		datetime: `${body.datetime}.000Z`
	}),
};

const format = { user, task };

export default format;
