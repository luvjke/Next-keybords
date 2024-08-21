export interface GroupToggleProps {
  items: readonly Variant[];
  defaultValue?: string;
  onClick?: (value: Variant['value']) => void;
  selectedValue?: Variant['value'];
}

type Variant = {
  disabled?: boolean;
  name: string;
  value: string;
};
