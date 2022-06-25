const userFunctions = {
	get: () => JSON.parse(localStorage.getItem('user')),
	set: (user) => localStorage.setItem('user', JSON.stringify(user))
}

const storage = { user: userFunctions };

export default storage;
