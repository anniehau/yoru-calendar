import express, { Express, RequestHandler } from 'express';
import 'express-async-errors';
import router from './routers';
import errorHandlingMiddleware from './middlewares/errorHandlingMiddleware';

export default class App {
	public app: Express;

	constructor() {
		this.app = express();
		this.config();
	}

	private config(): void {
		const accessControl: RequestHandler = (_req, res, next) => {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
			res.header('Access-Control-Allow-Headers', '*');
			next();
		};

		this.app.use(express.json()); // Starts up body parser middleware
		this.app.use(accessControl);
		this.app.use('/', router);
		this.app.use(errorHandlingMiddleware);
	}

	public start(PORT: number): void {
		this.app.listen(
			PORT,
			() => console.log(`Yoru Calendar's server is up on port ${PORT}!`)
		);
	}
}
