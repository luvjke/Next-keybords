import { ReactNode, SyntheticEvent } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: SyntheticEvent) => void;
  version:
    | 'unfilled'
    | 'filled'
    | 'outline'
    | 'custom'
    | 'pagination'
    | 'categories'
    | 'modal'
    | 'cart'
    | 'default'
    | 'link';
  lversion: 'regular' | 'bold' | 'medium';
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  tag?: 'link' | 'button' | 'cart_button';
  href?: any;
  count?: number;
  price?: number;
}
