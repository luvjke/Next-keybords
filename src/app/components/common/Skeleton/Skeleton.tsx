import React from 'react';

import styles from './Skeleton.module.scss';
export const Skeleton = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={styles.skeleton} {...props} />;
};
