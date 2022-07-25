import TextField from '@mui/material/TextField';
import { FC } from 'react';

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
