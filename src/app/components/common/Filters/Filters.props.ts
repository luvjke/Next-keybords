interface FiltersProps {
  priceFrom?: number;
  priceTo?: number;
}

interface Filters extends FiltersProps {
  types: string;
  sizes: string;
  compinents: string;
}
