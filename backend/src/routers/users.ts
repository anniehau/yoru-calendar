import { Router } from 'express';
import UserController from '../controllers/user';
import UserSchema from '../schemas/user';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware';

const controller = new UserController();
const schema = new UserSchema();

const router = Router();

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
