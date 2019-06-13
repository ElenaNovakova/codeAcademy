import { Router } from 'express';

import users from '../users/index';
import students from '../students/index';
import posts from '../posts/index';
import comments from '../comments/index';

const indexRouter = Router();

indexRouter.use(users.route);
indexRouter.use(students.route);
indexRouter.use(posts.route);
indexRouter.use(comments.route);

export default indexRouter;