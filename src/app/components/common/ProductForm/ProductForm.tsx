'use client';
import React from 'react';
import { useCartStore } from '../../../../../shared/store/cart';
import { ProductFormProps } from './ProductForm.props';
import { ChooseKeyboardForm } from '../ChooseProductForm/ChooseKeyboardForm/ChooseKeyboardForm';
import { ChooseProductForm } from '../ChooseProductForm';

export const ProductForm: React.FC<ProductFormProps> = ({ product, onSubmit: _onSubmit }) => {
  const [addCartItem, loading] = useCartStore((state) => [state.addCartItem, state.loading]);
  const firstItem = product.items[0];
  const isKeyboardForm = Boolean(firstItem.keyboardType);

  const onSubmit = async (productItemId?: number, components?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;
      await addCartItem({
        productItemId: itemId,
        components,
      });
      _onSubmit?.();
    } catch (error) {
      console.error(error);
    }
  };

  if (isKeyboardForm) {
    return (
      <ChooseKeyboardForm
        imageUrl={product.imageUrl.split('PR')[0]}
        name={product.name}
        components={product.components}
        items={product.items}
        onSumbit={onSubmit}
        loading={loading}
      />
    );
  }
  return (
    <ChooseProductForm
      imageUrl={product.imageUrl.split('PR')[0]}
      name={product.name}
      onSubmit={onSubmit}
      price={firstItem.price}
      loading={loading}
    />
  );
};
