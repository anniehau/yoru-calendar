const userFunctions = {
	get: () => JSON.parse(localStorage.getItem('user')),
	set: (user) => localStorage.setItem('user', JSON.stringify(user)),
	remove: () => localStorage.removeItem('user'),
	token: {
		get: () => {
			const user = userFunctions.get();
			if (!user) return false;
			return user.token;
		},
	}
};

const storage = { user: userFunctions };

export default storage;
