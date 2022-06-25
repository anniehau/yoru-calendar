// Accept Header is required for all payloads
const accept = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const create = {
	login: (body) => ({
		method: 'POST',
		headers: accept,
		body: JSON.stringify(body),
	})
}

module.exports = { create }
