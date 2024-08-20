import { Filters, QueryFilters } from '@/app/components/common/Filters/Filters.props';
import { useRouter } from 'next/navigation';
import qs from 'qs';
import React from 'react';

export const useQuryFiltes = (filters: Filters) => {
  const router = useRouter();

  React.useEffect(() => {
    const params = {
      ...filters.prices,
      types: Array.from(filters.types),
      sizes: Array.from(filters.sizes),
      components: Array.from(filters.selectedComponents),
    };

    const queryString = qs.stringify(params, { arrayFormat: 'comma' });

    router.push(`?${queryString}`, { scroll: false });
  }, [filters, router]);
};
