'use client';
import React from 'react';
import { Button } from '@/app/components/ui/Button';
import { ProductImage } from '../../ProductImage';

import styles from './ChooseKeyboardForm.module.scss';

import { KeyboardFormProps } from './ChooseKeyboardForm.props';
import { ToggleButtons } from '@/app/components/ui/ToggleButtons';
import {
  KeyboardSize,
  KeyboardType,
  keyboardTypes,
  mapType,
} from '../../../../../../shared/constans/keyboards';
import { Component } from '../../Component';
import { calcKeyboardsPrice } from '../../../../../../shared/utils/calcKeyboardsPrice';
import { useKeyboardOptions } from '../../../../../../shared/hooks';

export const ChooseKeyboardForm: React.FC<KeyboardFormProps> = ({
  name,
  items,
  imageUrl,
  onClickAdd,
  components,
}) => {
  const { size, type, availableKeybordSize, selectedComponents, addComponent, setType, setSize } =
    useKeyboardOptions(items);

  const textDetails = `${size}%, клавиатура ${mapType[type]}`;
  const totalPrice = calcKeyboardsPrice(type, size, items, components, selectedComponents);

  const handleClickAdd = () => {
    onClickAdd?.();
    console.log({ size, type, components: selectedComponents });
  };

  return (
    <div className={styles.form}>
      <ProductImage imageUrl={imageUrl} size={size} />

      <div className={styles.information_container}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.details}>{textDetails}</p>

        <div className={styles.toogles}>
          <ToggleButtons
            items={availableKeybordSize}
            selectedValue={String(size)}
            onClick={(value) => setSize(Number(value) as KeyboardSize)}
          />

          <ToggleButtons
            items={keyboardTypes}
            selectedValue={String(type)}
            onClick={(value) => setType(Number(value) as KeyboardType)}
          />
        </div>
        <h2>Доступные кейкапы</h2>
        <div className={styles.components}>
          {components.map((component) => (
            <Component
              key={component.id}
              imageUrl={component.imageUrl}
              name={component.name}
              price={component.price}
              onClick={() => addComponent(component.id)}
              active={selectedComponents.has(component.id)}
            />
          ))}
        </div>
        <Button
          onClick={handleClickAdd}
          version={'modal'}
          lversion={'bold'}
          label={`Добавить в корзину за ${totalPrice} ₽`}
        />
      </div>
    </div>
  );
};
