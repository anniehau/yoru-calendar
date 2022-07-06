module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('tasks', [{
			userId: 1,
			title: 'Criar um app de calendário',
			description: 'Preciso criar o app para apresentar!',
			datetime: new Date('2022-07-06T00:00:00Z'),
			duration: '120m+',
		}]);
	},
	
	async down(queryInterface) {
		await queryInterface.bulkDelete('tasks', null, {});
	}	
}