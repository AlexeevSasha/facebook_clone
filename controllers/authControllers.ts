import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { IUser } from '../types/users';
import Users from '../models/Users';
import { emailValidate, lengthValidate } from '../helpers/validation';
import { generateToken } from '../helpers/generateToken';
import { sendVerificationEmail } from '../helpers/mailing';
import { BadRequestError, UnauthenticatedError } from '../errors';



export const register = async (req: Request<{}, {}, IUser>, res: Response, next: NextFunction) => {
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
      throw new BadRequestError('Password must be at least 3 and not more than 30 characters');
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

export const activateEmail = async (req: Request<{}, {}, {token: string}>, res: Response, next: NextFunction) => {
  try {
    const { token } = req.body;
    const user = jwt.verify(token, process.env.JWT_SECRET as string);

    if (typeof user === 'string') {
      throw new BadRequestError('User nod found');
    }

    const check = await Users.findOne({ where: { id: user.id } });
    if (check && check.verified) {
      throw new BadRequestError('This email is already activated');
    } else {
      return res.status(200).json({ message: "Account has beeen activated successfully." });
    }
  } catch (error) {
    next(error);
  }
};


export const login = async (req: Request<{}, {}, {email: string, password: string}>, res: Response, next: NextFunction) => {
  try {
    const {email, password} = req.body;

    const user = await Users.scope('withPassword').findOne({ where: { email } });
    if (!user) {
      throw new UnauthenticatedError('The email address you entered does not exist');
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      throw new UnauthenticatedError('Invalid password')
    }

    res.send(user)
  } catch (error) {
    next(error);
  }
};
