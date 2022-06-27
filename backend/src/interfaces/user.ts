import { Request } from 'express';

// Full type
export type IUser = {
	id?: number,
	name: string,
	email: string,
	password?: string,
}

// Used types
export type RegisterBody = { name: string, email: string, password: string };
export type LoginBody = { email: string, password: string }
export type DbResult = IUser | null;
export interface RequestWithUser extends Request { user?: IUser }
