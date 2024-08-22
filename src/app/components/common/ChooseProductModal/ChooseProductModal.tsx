'use client';

import React from 'react';
import { Modal } from '../../ui/Modal';
import { ProductModal } from './ChooseProductModal.props';
import { ChooseKeyboardForm } from '../ChooseKeyboardForm';

export const ChooseProductModal = ({ product }: ProductModal) => {
  const [modalActive, setModalActive] = React.useState(true);
  return (
    <Modal active={modalActive} setActive={setModalActive} product={product}>
      <ChooseKeyboardForm imageUrl={product.imageUrl} name={product.name} components={[]} />
    </Modal>
  );
};
