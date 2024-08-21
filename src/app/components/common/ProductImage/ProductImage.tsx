import React from 'react';

import styles from './ProductImage.module.scss';
import classNames from 'classnames';
export const ProductImage: React.FC<ProductImageProps> = ({ imageUrl, size }) => {
  const ImageClassNames = classNames(
    {
      [styles['size-60']]: size === 60,
      [styles['size-75']]: size === 75,
      [styles['size-100']]: size === 100,
    },
    styles.sizes
  );
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="Image" className={ImageClassNames} />
    </div>
  );
};
