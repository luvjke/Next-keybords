import { Filters, QueryFilters } from '@/app/components/common/Filters/Filters.props';
import { useRouter } from 'next/navigation';
import qs from 'qs';
import React from 'react';

export const useQuryFiltes = (filters: Filters) => {
  const isMounted = React.useRef(false);
  const router = useRouter();

  React.useEffect(() => {
    if (isMounted.current) {
      const params = {
        ...filters.prices,
        types: Array.from(filters.types),
        sizes: Array.from(filters.sizes),
        components: Array.from(filters.selectedComponents),
      };

      const queryString = qs.stringify(params, { arrayFormat: 'comma' });

      router.push(`?${queryString}`, { scroll: false });
    }
    isMounted.current = true;
  }, [filters]);
};
