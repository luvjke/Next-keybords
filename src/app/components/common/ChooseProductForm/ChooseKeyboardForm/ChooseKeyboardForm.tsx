'use client';
import React from 'react';
import { Button } from '@/app/components/ui/Button';
import { ProductImage } from '../../ProductImage';

import styles from './ChooseKeyboardForm.module.scss';

import { KeyboardFormProps } from './ChooseKeyboardForm.props';
import { ToggleButtons } from '@/app/components/ui/ToggleButtons';
import {
  KeyboardSize,
  keyboardSizes,
  KeyboardType,
  keyboardTypes,
  mapType,
} from '../../../../../../shared/constans/keyboards';
import { Component } from '../../Component';
import { useSet } from 'react-use';
import { calcKeyboardsPrice } from '../../../../../../shared/utils/calcKeyboardsPrice';

export const ChooseKeyboardForm: React.FC<KeyboardFormProps> = ({
  name,
  items,
  imageUrl,
  onClickAdd,
  components,
}) => {
  const [size, setSize] = React.useState<KeyboardSize>(60);
  const [type, setType] = React.useState<KeyboardType>(1);

  const [selectedComponents, { toggle: addComponent }] = useSet(new Set<number>([]));
  const textDetails = `${size}%, клавиатура ${mapType[type]}`;

  const totalPrice = calcKeyboardsPrice(type, size, items, components, selectedComponents);

  const availableKeybord = items.filter((item) => item.keyboardType === type);
  const availableKeybordSize = keyboardSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !availableKeybord.some((keybord) => Number(keybord.size) === Number(item.value)),
  }));

  React.useEffect(() => {
    const disabledSize = availableKeybordSize?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availableKeybordSize?.find((item) => !item.disabled);

    if (!disabledSize && availableSize) {
      setSize(Number(availableSize.value) as KeyboardSize);
    }
  }, [availableKeybordSize, size, type]);

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
          label={`Добавить в корзину за ${totalPrice}`}
        />
      </div>
    </div>
  );
};
