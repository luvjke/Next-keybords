import React from 'react';

import styles from './Skeleton.module.scss';
import { SkeletonProps } from './Skeleton.props';
import classNames from 'classnames';
export const Skeleton: React.FC<SkeletonProps> = ({ version, ...props }) => {
  const SkeletonClassNames = classNames(styles.skeleton, version && styles[version]);
  return <div className={SkeletonClassNames} {...props} />;
};
