import React from 'react';
import { useSearchParams } from 'next/navigation';

import { useSet } from 'react-use';
import {
  FiltersProps,
  QueryFilters,
  ReturnProps,
} from '@/app/components/common/Filters/Filters.props';

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

  const [selectedComponents, { toggle: toggleComponents }] = useSet(
    new Set<string>(searchParams.get('components')?.split(','))
  );

  const [sizes, { toggle: toogleSizes }] = useSet(
    new Set<string>(searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : [])
  );
  const [types, { toggle: toogleType }] = useSet(
    new Set<string>(searchParams.has('types') ? searchParams.get('types')?.split(',') : [])
  );
  const [prices, setPrices] = React.useState<FiltersProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  const updatePrice = (name: keyof FiltersProps, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    sizes,
    types,
    selectedComponents,
    prices,
    setPrices: updatePrice,
    setTypes: toogleType,
    setSizes: toogleSizes,
    setComponents: toggleComponents,
  };
};
