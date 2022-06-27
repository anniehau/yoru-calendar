// Full type
export type ITask = {
	id?: number,
	userId?: number,
	title: string,
	description: string,
	datetime: string,
	duration: string,
}

// Used types
export type DbResult = ITask | null;
