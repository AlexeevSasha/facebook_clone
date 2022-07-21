import jwt from 'jsonwebtoken';

export const generateToken = (payload: { id: string }, expired: string) =>
  jwt.sign(payload, String(process.env.JWT_SECRET), {
    expiresIn: expired
  });
