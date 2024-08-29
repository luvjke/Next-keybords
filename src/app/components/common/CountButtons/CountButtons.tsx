import React from 'react';
import { Button } from '../../ui/Button';
import { CountButtonsProps } from './CountButtons.props';

import styles from './CountButtons.module.scss';

export const CountButtons: React.FC<CountButtonsProps> = ({ value, onClick }) => {
  return (
    <div className={styles.container}>
      <Button version={'unfilled'} lversion={'bold'} label={''} disabled={value === 1} />
      <b></b>
      <Button version={'unfilled'} lversion={'bold'} label={''} />
    </div>
  );
};
