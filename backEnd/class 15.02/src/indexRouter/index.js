import { Router } from 'express';

import users from '../users/index';
import students from '../students/index';

const indexRouter = Router();

indexRouter.use(users.route);
indexRouter.use(students.route);

export default indexRouter;