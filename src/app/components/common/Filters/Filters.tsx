'use client';
import React from 'react';

import styles from './Filters.module.scss';
import { CheckboxGroup } from '../../ui/Checkbox/CheckboxGroup';
import { useFilterComponents } from '../../../../../hooks/useFilterComponents';
import { useSet } from 'react-use';
import qs from 'qs';
import { useRouter, useSearchParams } from 'next/navigation';

export const Filters = () => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;
  const router = useRouter();
  const { components, onToggleId, selectedIds } = useFilterComponents();

  const [sizes, { toggle: toogleSizes }] = useSet(
    new Set<string>(searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : [])
  );
  const [types, { toggle: toogleType }] = useSet(
    new Set<string>(searchParams.has('types') ? searchParams.get('types')?.split(',') : [])
  );
  const [prices, setPrice] = React.useState<FiltersProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  const items = components.map((component) => ({
    value: String(component.id),
    text: component.name,
  }));

  const updatePrice = (name: keyof FiltersProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };

  React.useEffect(() => {
    const filters = {
      ...prices,
      types: Array.from(types),
      sizes: Array.from(sizes),
      components: Array.from(selectedIds),
    };

    const queryString = qs.stringify(filters, { arrayFormat: 'comma' });

    router.push(`?${queryString}`, { scroll: false });
  }, [prices, types, sizes, selectedIds, router]);

  return (
    <div className={styles.filter_box}>
      <h2 className={styles.title}>Фильтрация</h2>

      <CheckboxGroup
        title={'Игровая клавиатура'}
        items={[
          { text: 'Да', value: '1' },
          { text: 'Нет', value: '2' },
        ]}
        onClickChange={toogleType}
        selected={types}
        name="type"
      />
      <CheckboxGroup
        title={'Размер'}
        items={[
          {
            text: '60%',
            value: '60',
          },
          {
            text: '75%',
            value: '75',
          },
          {
            text: '100%',
            value: '100',
          },
        ]}
        onClickChange={toogleSizes}
        selected={sizes}
        name="sizes"
      />
      <p className={styles.price_title}>
        <b>Цена от и до:</b>
      </p>
      <div className={styles.price_filter}>
        <input
          type="number"
          placeholder="0"
          min={0}
          max={1200}
          value={String(prices.priceFrom || '0')}
          onChange={(element) => updatePrice('priceFrom', Number(element.target.value))}
        />
        <input
          type="number"
          placeholder="1000"
          min={500}
          max={1200}
          value={String(prices.priceTo || '1200')}
          onChange={(element) => updatePrice('priceTo', Number(element.target.value))}
        />
      </div>
      <CheckboxGroup
        title={'Комплектующие'}
        items={items}
        defaultItems={items.slice(0, 6)}
        limit={6}
        onClickChange={onToggleId}
        selected={selectedIds}
        name="components"
      />
    </div>
  );
};
