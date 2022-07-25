import React, { lazy } from 'react';
import { IRoute } from './types';

const SignIn = lazy(async () => import('../../pages/SignIn').then((module) => ({ default: module.SignIn })));

export const AuthRoutes: IRoute[] = [
  {
    path: '/login',
    element: <SignIn />
  }
];
