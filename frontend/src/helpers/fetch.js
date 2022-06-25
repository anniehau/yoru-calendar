import fetch from 'node-fetch';

// Routes
const route = {
	login: '/user/login',
	register: '/user/register',
}

// Error Messages
export const GENERIC_ERROR = 'There was an error on our end!';

// Fetch
const includes = {
	body: async ({ url, payload }) => {
		const result = await fetch(`http://localhost:3001${route[url]}`, payload)
			.then((data) => data.json());
	
		if (result.error) return { success: false, data: result };
	
		return { success: true, result };
	},
	
	params: async ({ url, payload, params }) => {
		const result = await fetch(`http://localhost:3001${route[url]}/${params}`, payload)
			.then((data) => data.json());
	
		if (result.error) return { success: false, data: result };
	
		return { success: true, result };
	},
}

module.exports = { includes }
