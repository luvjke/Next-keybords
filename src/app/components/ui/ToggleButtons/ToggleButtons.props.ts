export interface GroupToggleProps {
  items: readonly Variant[];
  defaultValue?: string;
  onClick?: (value: Variant['value']) => void;
  selectedValue?: Variant['value'];
}

export type Variant = {
  disabled?: boolean;
  name: string;
  value: string;
};
