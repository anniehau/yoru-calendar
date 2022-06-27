import { Router } from 'express';
import usersRouter from './users';
import tasksRouter from './tasks';

const router = Router();

router.use('/users', usersRouter);
router.use('/tasks', tasksRouter);

export default router;
