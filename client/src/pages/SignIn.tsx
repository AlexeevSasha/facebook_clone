import React from 'react';
import { FC } from 'react';
import { Input } from '../components/ui/input';

export const SignIn: FC = () => {
  return (
    <div style={{ margin: 100 }}>
      <Input id="1" label="Test" name="email" />
    </div>
  );
};
