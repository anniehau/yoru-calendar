export const up = async (queryInterface) => {
	await queryInterface.bulkInsert('users', [{
		name: 'Admin',
		email: 'admin@email.com',
		password: '@75C+mNSZB',
	}]);
};

export const down = async (queryInterface) => {
	await queryInterface.bulkDelete('users', null, {});
};
