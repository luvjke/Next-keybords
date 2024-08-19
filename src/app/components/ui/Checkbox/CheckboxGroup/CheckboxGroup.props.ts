import { CheckboxProps } from '../Checkbox.props';

export interface CheckboxGroupProps {
  title: string;
  items: CheckboxProps[];
  defaultItems?: CheckboxProps[];
  limit?: number;
  searchInputPlaceholder?: string;
  onClickChange?: (id: string) => void;
  defaultValue?: string;
  selected?: Set<string>;
  name?: string;
}
