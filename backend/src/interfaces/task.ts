// Full type
export type ITask = {
	id?: number,
	title: string,
	description: string,
	datetime: string,
	duration: string,
}

// Used types
export type DbResult = ITask | null;
