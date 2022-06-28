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
			})
		}
	},
};

const to = {
	login: (body) => generic.post(body),
	register: (body) => generic.post(body),
	get: {
		tasks: (token) => payload.includes.token.get(token)
	}
};

const functions = { to };

export default functions;
