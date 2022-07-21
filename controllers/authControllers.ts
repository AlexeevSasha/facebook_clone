import { Request, Response, NextFunction } from 'express';
import { IUser } from '../types/users';
import Users from '../models/Users';
import { emailValidate, lengthValidate } from '../helpers/validation';
import { BadRequestError } from '../errors';
import { generateToken } from '../helpers/generateToken';
import { sendVerificationEmail } from '../helpers/mailing';

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
      throw new BadRequestError('This email already exists');
    }

    if (!lengthValidate(password, 3, 30)) {
      throw new BadRequestError(
        'Password must be at least 3 and not more than 30 characters'
      );
    }

    const user = await Users.create({
      email,
      firstname,
      lastname,
      password
    });

    const emailVerificationToken = generateToken({ id: user.id }, '30m');
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    sendVerificationEmail(user.email, user.firstname, url);

    const token = generateToken({ id: user.id }, '7d');

    res.send({ user, token });
  } catch (error) {
    next(error);
  }
};
