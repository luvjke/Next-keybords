import { ReactNode, SyntheticEvent } from 'react';

export interface ButtonProps {
  onClick?: (event: SyntheticEvent) => void;
  version: 'unfilled' | 'filled' | 'outline' | 'custom' | 'pagination' | 'categories';
  lversion: 'regular' | 'bold' | 'medium';
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  tag?: 'link' | 'button';
  href?: any;
}
