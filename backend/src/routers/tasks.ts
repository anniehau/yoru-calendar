import { Router } from 'express';
import TaskController from '../controllers/task';
import TaskSchema from '../schemas/task';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware';

const controller = new TaskController();
const schema = new TaskSchema();

const router = Router();

router.get(
	'/',
	validateSchemaMiddleware(schema.getAllFromUserBody),
	controller.getAllFromUser,
);

router.get(
	'/title',
	validateSchemaMiddleware(schema.getByTitleBody),
	controller.getByTitle,
);

router.post(
	'/',
	validateSchemaMiddleware(schema.taskBody),
	controller.create,
);

router.put(
	'/:id',
	validateSchemaMiddleware(schema.taskBody),
	controller.update,
);

router.delete(
	'/:id',
	controller.remove,
);

export default router;
