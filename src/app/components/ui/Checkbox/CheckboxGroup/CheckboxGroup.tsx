'use client';
import React from 'react';
import { CheckboxGroupProps } from './CheckboxGroup.props';

import styles from './CheckboxGroup.module.scss';
import { Checkbox } from '../Checkbox';
import { Button } from '../../Button';

export const CheckboxGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  selected,
  searchInputPlaceholder = 'Поиск...',
  onClickChange,
  defaultValue,
  name,
}: CheckboxGroupProps) => {
  const [showAll, setShowAll] = React.useState(false);
  const [seacrhValue, setSearchValue] = React.useState('');

  const onChangeSearchInput = (element: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(element.target.value);
  };

  const list = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(seacrhValue.toLowerCase()))
    : (defaultItems || items).slice(0, limit);

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>

      {showAll && (
        <div>
          <input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className={styles.input_search}
          />
        </div>
      )}
      <div>
        <div className={styles.group_items}>
          {list?.map((item, index) => (
            <Checkbox
              key={index}
              text={item.text}
              value={item.value}
              checked={selected?.has(item.value)}
              onChackedChange={() => onClickChange?.(item.value)}
              name={name}
            />
          ))}
        </div>
        {items.length > limit && (
          <Button
            tag="button"
            version={'filled'}
            lversion={'regular'}
            label={showAll ? 'Скрыть' : 'Показать все'}
            onClick={() => setShowAll(!showAll)}
            disabled={false}
          />
        )}
      </div>
    </div>
  );
};
