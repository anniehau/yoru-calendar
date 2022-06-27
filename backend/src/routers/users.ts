import { Router } from 'express';
import UserController from '../controllers/user';
import UserSchema from '../schemas/users';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware';

const controller = new UserController();
const schema = new UserSchema();

const router = Router();

router.get(
	'/',
	controller.getOne,
);

router.get(
	'/:id',
	controller.getById,
);

router.post(
	'/login',
	validateSchemaMiddleware(schema.loginBody),
	controller.login,
);

router.post(
	'/register',
	validateSchemaMiddleware(schema.registerBody),
	controller.register,
);

export default router;
