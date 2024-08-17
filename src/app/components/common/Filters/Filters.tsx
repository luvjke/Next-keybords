'use client';
import React from 'react';

import styles from './Filters.module.scss';
import { Checkbox } from '../../ui/Checkbox';
import { CheckboxGroup } from '../../ui/Checkbox/CheckboxGroup';
import { useFilterComponents } from '../../../../../hooks/useFilterComponents';
export const Filters = () => {
  const { components } = useFilterComponents();

  const items = components.map((component) => ({
    value: String(component.id),
    text: component.name,
  }));
  return (
    <div className={styles.filter_box}>
      <h2 className={styles.title}>Фильтрация</h2>
      <div className={styles.filter_container}>
        <Checkbox text={'Игровая клавиатура'} value={'1'} />
        <Checkbox text={'Игровая клавиатура'} value={'2'} />
      </div>
      <div className={styles.price_filter}>
        <input type="number" placeholder="0" min={0} max={1200} />
        <input type="number" placeholder="1000" min={500} max={1200} />
      </div>
      <CheckboxGroup
        title={'Комплектующие'}
        items={items}
        defaultItems={items.slice(0, 6)}
        limit={6}
      />
    </div>
  );
};
