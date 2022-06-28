import fetch from 'node-fetch';

// Routes
const route = {
	login: '/users/login',
	register: '/users/register',
	tasks: '/tasks',
};

// Error Messages
export const GENERIC_ERROR = 'There was an error on our end!';

// Error handler
const handleError = (error) => {
	console.log(error);
	return { error: GENERIC_ERROR };
};

// Fetch
const generic = async ({ url, payload }) => {
	const result = await fetch(`http://localhost:3001${route[url]}`, payload)
		.then((data) => data.json())
		.catch(handleError);

	if (result.error) return { success: false, data: result.error };

	return { success: true, data: result };
};

const includes = {
	body: async ({ url, payload }) => {
		const result = await fetch(`http://localhost:3001${route[url]}`, payload)
			.then((data) => data.json())
			.catch(handleError);

		if (result.error) return { success: false, data: result.error };

		return { success: true, data: result };
	},

	params: async ({ url, payload, params }) => {
		const result = await fetch(`http://localhost:3001${route[url]}/${params}`, payload)
			.then((data) => data.json())
			.catch(handleError);

		if (result.error) return { success: false, data: result.error };

		return { success: true, data: result };
	}
};

const functions = { includes, generic };

export default functions;
