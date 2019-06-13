import { Router } from 'express';
import actions from './actions'

const userRouter = Router();

userRouter.get('/users', actions.list);
userRouter.get('/users/:id', actions.get)

export default userRouter;