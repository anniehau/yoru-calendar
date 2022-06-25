// Accept Header is required for all payloads
const accept = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const to = {
	login: (body) => ({
		method: 'POST',
		headers: accept,
		body: JSON.stringify(body),
	})
}

const functions = { to };

export default functions;
