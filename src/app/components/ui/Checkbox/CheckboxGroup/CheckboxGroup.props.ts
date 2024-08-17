import { CheckboxProps } from '../Checkbox.props';

export interface CheckboxGroupProps {
  title: string;
  items: CheckboxProps[];
  defaultItems: CheckboxProps[];
  limit?: number;

  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => string;
  defaultValue?: string;
}
