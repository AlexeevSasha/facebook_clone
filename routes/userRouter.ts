import { Router } from 'express';
import {register} from "../controllers/authControllers";

const userRouter = Router();

userRouter.route('/').post(register);

export default userRouter;
