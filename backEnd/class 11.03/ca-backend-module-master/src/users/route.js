import { Router } from 'express';
import actions from './actions';

const userRoute = Router();

userRoute.post('/users', actions.create);
userRoute.get('/users', actions.getModels);

export default userRoute;