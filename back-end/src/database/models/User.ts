import { Model, DataTypes } from 'sequelize';
import db from '.';

class User extends Model {
	public id!: number;
	public name!: string;
	public email!: string;
	public password?: string;
}

User.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: DataTypes.STRING,
	email: DataTypes.STRING,
	password: DataTypes.STRING,
}, {
	sequelize: db,
	tableName: 'users',
	timestamps: false,
	scopes: {
		noPassword: { attributes: { exclude: ['password'] } },
	}
});

export default User;
