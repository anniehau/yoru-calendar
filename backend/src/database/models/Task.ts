import { Model, DataTypes } from 'sequelize';
import db from '.';

class Task extends Model {
	public id!: number;
	public userId!: number;
	public title!: string;
	public description!: string;
	public datetime!: string;
	public duration!: string;
}

Task.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	userId: DataTypes.INTEGER,
	title: DataTypes.STRING(50),
	description: DataTypes.STRING,
	datetime: DataTypes.DATE,
	duration: DataTypes.TIME,
}, {
	sequelize: db,
	tableName: 'tasks',
	timestamps: false,
});

export default Task;
