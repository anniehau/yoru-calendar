export const up = (queryInterface, Sequelize) => {
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
		description: Sequelize.STRING,
		datetime: {
			type: Sequelize.DATETIME,
			allowNull: false,
		},
		duration: Sequelize.TIME,
	});
};

export const down = (queryInterface) => await queryInterface.dropTable('tasks');
