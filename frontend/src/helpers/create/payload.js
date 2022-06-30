// Accept Header is required for all payloads
const accept = {
	Accept: 'application/json',
	'Content-Type': 'application/json'
};

const generic = {
	post: (body) => ({
		method: 'POST',
		headers: accept,
		body: JSON.stringify(body)
	})
};

const payload = {
	includes: {
		token: {
			get: (token = '') => ({
				method: 'GET',
				headers: {
					...accept,
					'Authorization': token,
				},
			}),
			remove: (token = '') => ({
				method: 'DELETE',
				headers: {
					...accept,
					'Authorization': token,
				}
			}),
			put: ({ token = '', body }) => ({
				method: 'PUT',
				headers: {
					...accept,
					'Authorization': token,
				},
				body: JSON.stringify(body)
			}),
			post: ({ token = '', body }) => ({
				method: 'POST',
				headers: {
					...accept,
					'Authorization': token,
				},
				body: JSON.stringify(body)
			}),
		}
	},
};

const to = {
	login: (body) => generic.post(body),
	register: (body) => generic.post(body),
	get: {
		tasks: (token) => payload.includes.token.get(token)
	},
	remove: {
		task: (token) => payload.includes.token.remove(token)
	},
	put: {
		task: ({ token, body }) => payload.includes.token.put({ token, body })
	},
	post: {
		task: ({ token, body }) => payload.includes.token.post({ token, body })
	}
};

const functions = { to };

export default functions;
