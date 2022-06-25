// Basic type
type User = {
	name: string,
	email: string,
}

// Used types
export type UserBody = User & { password: string };
export type UserFromDb = User & { id: number };
export type DbResult = UserFromDb | null;
