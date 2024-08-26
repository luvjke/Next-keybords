import { ProductItem } from '@prisma/client';
import { KeyboardSize, keyboardSizes, KeyboardType } from '../constans/keyboards';
import { Variant } from '@/app/components/ui/ToggleButtons/ToggleButtons.props';

export const getAvailableKeyboards = (type: KeyboardType, items: ProductItem[]): Variant[] => {
  const availableKeybord = items.filter((item) => item.keyboardType === type);

  return keyboardSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !availableKeybord.some((keybord) => Number(keybord.size) === Number(item.value)),
  }));
};
