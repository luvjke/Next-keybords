import React from 'react';

import styles from './Filters.module.scss';
import { Checkbox } from '../../ui/Checkbox';
import { CheckboxGroup } from '../../ui/Checkbox/CheckboxGroup';
export const Filters = () => {
  return (
    <div>
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
        items={[
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Чери', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Чери', value: '3' },
          { text: 'Кейкапы', value: '3' },
        ]}
        defaultItems={[
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Кейкапы', value: '3' },
          { text: 'Чери', value: '3' },
        ]}
        limit={6}
      />
    </div>
  );
};
