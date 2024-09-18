'use client';
import React from 'react';

import styles from './Filters.module.scss';
import { CheckboxGroup } from '../../ui/Checkbox/CheckboxGroup';
import { useComponenets, useFilters, useQuryFiltes } from '../../../../../shared/hooks';
import { Component } from '@prisma/client';

export const Filters = () => {
  const { components, isLoading } = useComponenets();
  const filters = useFilters();
  useQuryFiltes(filters);

  const items = components.map((component: Component) => ({
    value: String(component.id),
    text: component.name,
  }));

  return (
    <div className={styles.filter_box}>
      <h2 className={styles.title}>Фильтрация</h2>

      <CheckboxGroup
        title={'Беспроводная клавиатура:'}
        items={[
          { text: 'Нет', value: '2' },
          { text: 'Да', value: '1' },
        ]}
        onClickChange={filters.setTypes}
        selected={filters.types}
        name="type"
      />
      <CheckboxGroup
        title={'Размер:'}
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
        onClickChange={filters.setSizes}
        selected={filters.sizes}
        name="sizes"
      />
      <p className={styles.title}>
        <b>Цена от и до:</b>
      </p>
      <div className={styles.filter}>
        <input
          type="number"
          placeholder="0"
          min={0}
          max={14999}
          value={String(filters.prices.priceFrom || '0')}
          onChange={(element) => filters.setPrices('priceFrom', Number(element.target.value))}
        />
        <input
          type="number"
          placeholder="1000"
          min={500}
          max={15000}
          value={String(filters.prices.priceTo || '15000')}
          onChange={(element) => filters.setPrices('priceTo', Number(element.target.value))}
        />
      </div>
      <CheckboxGroup
        title={'Комплектующие:'}
        items={items}
        defaultItems={items.slice(0, 6)}
        limit={6}
        onClickChange={filters.setComponents}
        selected={filters.selectedComponents}
        name="components"
        loading={isLoading}
      />
    </div>
  );
};
