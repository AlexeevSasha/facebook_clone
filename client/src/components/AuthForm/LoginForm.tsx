import { Input } from '../ui/input';
import React from 'react';

export const LoginForm = () => {
  return (
    <div>
      <Input id="1" label="Email" name="email" placeholder="Enter your email" />
      <Input id="1" label="Password" name="password" placeholder="Password" type="password" />
    </div>
  );
};
