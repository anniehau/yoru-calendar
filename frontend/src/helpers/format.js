const user = {
	obj: (user) => ({ name: user.name, email: user.email, token: user.token }),
};

const datetime = {
	str: (date) => {
		const dateString = date.format('YYYY-MM-DD');
		const timeString = date.format('HH:mm:ss');
		const datetimeString = `${dateString}T${timeString}`;
		console.log(datetimeString);
		return datetimeString;
	},
};

const format = { user, datetime };

export default format;
