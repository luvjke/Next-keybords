import { ReactNode } from 'react';

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  version: 'unfilled' | 'filled' | 'outline' | 'custom' | 'pagination' | 'categories';
  lversion: 'regular' | 'bold' | 'medium';
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  tag?: 'link' | 'button';
  href?: any;
}
