module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('tasks', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
					key: 'id',
				}
			},
			title: {
				type: Sequelize.STRING(50),
				allowNull: false,
			},
			description: Sequelize.STRING(200),
			datetime: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			duration: Sequelize.STRING(10),
		});
	},
	
	async down(queryInterface) {
		await queryInterface.dropTable('tasks');
	}	
}