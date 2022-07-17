import { Request, Response, NextFunction } from 'express';
import {IUsersModel} from "../models/types/users";
import Users from "../models/Users";

export const register = async (req: Request<{}, {}, IUsersModel>, res: Response, next: NextFunction) => {
  try {
    const {email, firstname, lastname, username, password} = req.body;
    const user =  await  Users.create({email, firstname, lastname, username, password})
    res.send(user)
  } catch (e) {
    console.log(e)
  }
};
