import React from 'react';

import styles from './SliderImage.module.scss';
import { SliderImageProps } from './SliderImage.props';
import classNames from 'classnames';
export const SliderImage: React.FC<SliderImageProps> = ({ imageUrl, name }) => {
  const imageUrls = imageUrl.split('PR').filter(Boolean);
  const [activeIndex, setActiveIndex] = React.useState(0);
  // const SliderItemClassName = classNames(
  //   styles.slider_item,
  //   activeIndex && styles.slider_item_active
  // );

  const handleHover = (id: number) => {
    setActiveIndex(id);
  };
  const handleLeave = () => {
    setActiveIndex(0);
  };
  return (
    <div className={styles.container_image} onMouseOut={() => handleLeave()}>
      <div className={styles.slider_wrapper}>
        {imageUrls.map((imageUrlLLL, index) => (
          <div
            key={index}
            className={classNames(
              styles.slider_item,
              index === activeIndex && styles.slider_item_active
            )}
          >
            <img className={styles.image} src={imageUrlLLL} alt={name} />
          </div>
        ))}
      </div>
      <div className={styles.slider_pagination}>
        {imageUrls.map((_, index) => (
          <span key={index} onMouseOver={() => handleHover(index)} />
        ))}
      </div>
    </div>
  );
};
