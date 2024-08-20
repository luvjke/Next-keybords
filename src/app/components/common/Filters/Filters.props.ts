import { Filters } from './Filters';
export interface FiltersProps {
  priceFrom?: number;
  priceTo?: number;
}

export interface QueryFilters extends FiltersProps {
  types: string;
  sizes: string;
  components: string;
}

export interface Filters {
  sizes: Set<string>;
  types: Set<string>;
  selectedComponents: Set<string>;
  prices: FiltersProps;
}

export interface ReturnProps extends Filters {
  setPrices: (name: keyof FiltersProps, value: number) => void;
  setTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setComponents: (value: string) => void;
}
