import React from 'react';

import styles from './SliderImage.module.scss';
import { SliderImageProps } from './SliderImage.props';
export const SliderImage: React.FC<SliderImageProps> = ({ imageUrl }) => {
  const imageUrls = imageUrl.split('PR').filter(Boolean);
  console.log(imageUrls);
  return (
    <div className={styles.container_image}>
      <div className={styles.slider_wrapper}>
        {imageUrls.map((imageUrlLLL, index) => (
          <div key={index} className={styles.slider_wrapper_item}>
            <img className={styles.image} src={imageUrlLLL} alt={name} />
          </div>
        ))}
      </div>
      <div className={styles.slider_pagination}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};
