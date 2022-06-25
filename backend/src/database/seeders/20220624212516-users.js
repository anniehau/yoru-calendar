module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('users', [{
			name: 'Admin',
			email: 'admin@email.com',
			password: '@75C+mNSZB',
		}]);
	},
	
	async down(queryInterface) {
		await queryInterface.bulkDelete('users', null, {});
	}	
}