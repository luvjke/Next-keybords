import React from 'react';
import { KeyboardSize, KeyboardType } from '../constans/keyboards';
import { Variant } from '@/app/components/ui/ToggleButtons/ToggleButtons.props';
import { useSet } from 'react-use';
import { getAvailableKeyboards } from '../utils/getAvailableKeyboards';
import { ProductItem } from '@prisma/client';

interface ReturnProps {
  size: KeyboardSize;
  type: KeyboardType;
  availableKeybordSize: Variant[];
  selectedComponents: Set<number>;
  setSize: (size: KeyboardSize) => void;
  setType: (type: KeyboardType) => void;
  addComponent: (id: number) => void;
}

export const useKeyboardOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = React.useState<KeyboardSize>(60);
  const [type, setType] = React.useState<KeyboardType>(1);
  const [selectedComponents, { toggle: addComponent }] = useSet(new Set<number>([]));

  const availableKeybordSize = getAvailableKeyboards(type, items);

  React.useEffect(() => {
    const disabledSize = availableKeybordSize?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availableKeybordSize?.find((item) => !item.disabled);

    if (!disabledSize && availableSize) {
      setSize(Number(availableSize.value) as KeyboardSize);
    }
  }, [availableKeybordSize, size, type]);

  return {
    size,
    type,
    selectedComponents,
    availableKeybordSize,
    setSize,
    setType,
    addComponent,
  };
};
