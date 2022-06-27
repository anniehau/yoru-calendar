import { Router } from 'express';
import TaskController from '../controllers/task';
import TaskSchema from '../schemas/task';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware';
import validateToken from '../middlewares/validateToken';

const controller = new TaskController();
const schema = new TaskSchema();

const router = Router();

router.get(
	'/',
	validateToken,
	controller.getAllFromUser,
);

router.get(
	'/title',
	validateToken,
	validateSchemaMiddleware(schema.getByTitleBody),
	controller.getByTitle,
);

router.post(
	'/',
	validateToken,
	validateSchemaMiddleware(schema.taskBody),
	controller.create,
);

router.put(
	'/:id',
	validateToken,
	validateSchemaMiddleware(schema.taskBody),
	controller.update,
);

router.delete(
	'/:id',
	validateToken,
	controller.remove,
);

export default router;
