import { Router } from 'express';
import { register, activateEmail, login } from '../controllers/authControllers';

const userRouter = Router();

userRouter.route('/register').post(register);
userRouter.route('/activate').post(activateEmail);
userRouter.route('/login').post(login);

export default userRouter;
