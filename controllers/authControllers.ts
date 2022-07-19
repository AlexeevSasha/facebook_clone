import { Request, Response, NextFunction } from 'express';
import { IUser } from '../types/users';
import Users from '../models/Users';
import { emailValidate, lengthValidate } from '../helpers/validation';
import { BadRequestError } from '../errors';

export const register = async (
  req: Request<{}, {}, IUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, firstname, lastname, password } = req.body;

    if (!emailValidate(email)) {
      throw new BadRequestError('Invalid email address');
    }

    const findEmail = await Users.findOne({ where: { email } });
    if (findEmail) {
      throw new BadRequestError('This email exist');
    }

    if (!lengthValidate(password, 3, 30)) {
      throw new BadRequestError('password should 30');
    }

    const user = await Users.create({
      email,
      firstname,
      lastname,
      password
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
};
