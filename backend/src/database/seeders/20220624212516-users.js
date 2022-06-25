module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('users', [{
			name: 'Admin',
			email: 'admin@email.com',
			password: 'c5e6e0c779dfb160b799b986492c71fa',
		}]);
	},
	
	async down(queryInterface) {
		await queryInterface.bulkDelete('users', null, {});
	}	
}