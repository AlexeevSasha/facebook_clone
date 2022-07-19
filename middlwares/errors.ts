import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

interface CustomError extends Error {
  status: number;
  statusCode?: number;
}

export const errorHandlerMiddleware = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.statusCode || StatusCodes.BAD_REQUEST;
  const msg = error.message || 'Something went wrong, try again later';

  res.status(status).send(msg);
  next();
};
