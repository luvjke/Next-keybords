'use client';
import React from 'react';
import { useIntersection } from 'react-use';

import styles from './CardGroupList.module.scss';
import { CardGroupListProps } from './CardGroupList.props';
import { KeyboardCard } from '../KeyboardCard';
import { useCategoryStore } from '../../../../../shared/store/category';

export const CardGroupList = ({ title, items, categoryId }: CardGroupListProps) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, categoryId, setActiveCategoryId]);
  return (
    <div className={styles.container} id={title} ref={intersectionRef}>
      <h1 className={styles.title}>{title}</h1>
      <ul className={styles.container_grid}>
        {items.map((product) => (
          <KeyboardCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.items[0]?.price}
            imageUrl={product.imageUrl}
            components={product.components}
          />
        ))}
      </ul>
    </div>
  );
};
