const userFunctions = {
	get: () => JSON.parse(localStorage.getItem('user')),
	set: (user) => localStorage.setItem('user', JSON.stringify(user)),
	remove: () => localStorage.removeItem('user'),
};

const storage = { user: userFunctions };

export default storage;
