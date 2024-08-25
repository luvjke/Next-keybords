'use client';

import React from 'react';
import { Modal } from '../../ui/Modal';
import { ProductModal } from './ChooseProductModal.props';
import { ChooseProductForm } from '../ChooseProductForm';
import { ChooseKeyboardForm } from '../ChooseProductForm/ChooseKeyboardForm/ChooseKeyboardForm';

export const ChooseProductModal = ({ product }: ProductModal) => {
  const [modalActive, setModalActive] = React.useState(true);
  const isKeyboardForm = product.items[0]?.keyboardType;
  return (
    <Modal active={modalActive} setActive={setModalActive} product={product}>
      {isKeyboardForm ? (
        <ChooseKeyboardForm
          imageUrl={product.imageUrl}
          name={product.name}
          components={product.components}
          items={product.items}
        />
      ) : (
        <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
      )}
    </Modal>
  );
};
