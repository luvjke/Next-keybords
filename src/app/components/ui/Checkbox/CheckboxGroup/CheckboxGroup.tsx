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

  searchInputPlaceholder = 'Поиск...',
  onChange,
  defaultValue,
}: CheckboxGroupProps) => {
  const [showAll, setShowAll] = React.useState(false);
  const [seacrhValue, setSearchValue] = React.useState('');

  const onChangeSearchInput = (element: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(element.target.value);
  };

  const list = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(seacrhValue.toLowerCase()))
    : defaultItems?.slice(0, limit);

  return (
    <div>
      <p className={styles.title}>{title}</p>

      {showAll && (
        <div>
          <input onChange={onChangeSearchInput} placeholder={searchInputPlaceholder} />
        </div>
      )}
      <div>
        <div className={styles.group_items}>
          {list.map((item, index) => (
            <Checkbox
              key={index}
              text={item.text}
              value={item.value}
              checked={false}
              onChackedChange={(ids) => console.log(ids)}
            />
          ))}
        </div>
        {items.length > limit && (
          <Button
            tag="button"
            version={'unfilled'}
            lversion={'bold'}
            label={showAll ? 'Скрыть' : 'Показать все'}
            onClick={() => setShowAll(!showAll)}
          />
        )}
      </div>
    </div>
  );
};
