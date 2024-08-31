import React from 'react';
import { Button } from '../../../ui/Button';
import { CountButtonsProps } from './CountButtons.props';

import styles from './CountButtons.module.scss';
import { Minus, Plus } from 'lucide-react';

export const CountButtons: React.FC<CountButtonsProps> = ({ value, onClick }) => {
  return (
    <div className={styles.container}>
      <Button
        version={'unfilled'}
        lversion={'bold'}
        label={''}
        disabled={value === 1}
        onClick={() => onClick?.('minus')}
        icon={<Minus height={16} width={16} className={styles.icon} />}
      />

      <b className={styles.value}>{value}</b>

      <Button
        version={'unfilled'}
        lversion={'bold'}
        label={''}
        onClick={() => onClick?.('plus')}
        icon={<Plus height={16} width={16} className={styles.icon} />}
      />
    </div>
  );
};
