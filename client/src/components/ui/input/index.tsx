import TextField from '@mui/material/TextField';
import { FC, useState } from 'react';

interface IProps {
  id: string;
  label: string;
  variant?: 'filled' | 'standard';
  type?: string;
  placeholder?: string;
  name: string;
  fullWidth?: boolean;
}

export const Input: FC<IProps> = ({ id, label, variant, type, placeholder, name, fullWidth }) => {
  return <TextField name={name} placeholder={placeholder} id={id} label={label} variant={variant || 'outlined'} fullWidth={fullWidth} type={type} />;
};

export const InputPassword: FC<Omit<IProps, 'type'>> = ({ id, label, variant, placeholder, name, fullWidth }) => {
  const [showPass, setShowPass] = useState(false);
  const toggleShow = () => setShowPass(!showPass);
  return (
    <TextField
      name={name}
      placeholder={placeholder}
      id={id}
      label={label}
      variant={variant || 'outlined'}
      fullWidth={fullWidth}
      type={showPass ? 'text' : 'password'}
    />
  );
};
