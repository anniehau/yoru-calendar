import UserController from '../controllers/user';
import { Router } from 'express';

const controller = new UserController();

const router = Router();

router.get(
	'/:id',
	controller.getById,
);

router.post(
	'/login',
	controller.login,
);

router.post(
	'/register',
	controller.register,
);

export default router;
