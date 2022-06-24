export const up = (queryInterface, Sequelize) => {
	await queryInterface.createTable('users', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		name: {
			type: Sequelize.STRING,
		},
		email: {
			type: Sequelize.STRING,
		},
		password: {
			type: Sequelize.STRING,
		},
	});
};

export const down = (queryInterface) => await queryInterface.dropTable('users');
