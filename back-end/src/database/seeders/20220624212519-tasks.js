export const up = async (queryInterface, Sequelize) => {
	await queryInterface.bulkInsert('tasks', [{
		userId: 1,
		title: 'Criar um app de calendário',
		description: 'Preciso criar o app para apresentar em processos seletivos!',
		datetime: Sequelize.NOW,
		duration: '01:00',
	}]);
};

export const down = async (queryInterface) => {
	await queryInterface.bulkDelete('tasks', null, {});
};
