module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('tasks', [{
			userId: 1,
			title: 'Criar um app de calendário',
			description: 'Preciso criar o app para apresentar em processos seletivos!',
			datetime: new Date(),
			duration: '01:00',
		}]);
	},
	
	async down(queryInterface) {
		await queryInterface.bulkDelete('tasks', null, {});
	}	
}