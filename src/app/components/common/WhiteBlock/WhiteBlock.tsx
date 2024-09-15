import React from 'react';
import { WhiteBlockProps } from './WhiteBlock.props';

import styles from './WhiteBlock.module.scss';
import classNames from 'classnames';
export const WhiteBlock: React.FC<React.PropsWithChildren<WhiteBlockProps>> = ({
  title,
  endAdorment,
  addClassName,
  disabled,
  children,
}) => {
  return (
    <div
      className={classNames(
        styles.container,
        addClassName && styles.classname,
        disabled && styles.disabled
      )}
    >
      {title && (
        <div className={styles.box}>
          <h1 className={styles.title}>{title}</h1>
          {endAdorment}
        </div>
      )}
      <div className={styles.children}>{children}</div>
    </div>
  );
};
