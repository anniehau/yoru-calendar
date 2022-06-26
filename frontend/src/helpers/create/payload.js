// Accept Header is required for all payloads
const accept = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};

const generic = {
	post: (body) => ({
		method: 'POST',
		headers: accept,
		body: JSON.stringify(body),
	})
};

const to = {
	login: (body) => generic.post(body),
	register: (body) => generic.post(body),
};

const functions = { to };

export default functions;
