export interface CheckboxProps {
  text: string;
  value: string;
  checked?: boolean;
  onChackedChange?: (checked: boolean) => void;
  name?: string;
}
