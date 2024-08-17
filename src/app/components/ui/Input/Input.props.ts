import { ChangeEvent, KeyboardEvent, ReactNode } from 'react';

export interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  button?: ReactNode;
  placeholder?: string;
  isDisabled?: boolean;
  icon?: ReactNode;
  version: 'unfilled' | 'filled' | 'outline' | 'custom' | 'advanced';
}
