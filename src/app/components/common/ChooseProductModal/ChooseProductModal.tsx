'use client';

import React from 'react';
import { Modal } from '../../ui/Modal';
import { ProductModal } from './ChooseProductModal.props';
import { useRouter } from 'next/navigation';
import { ProductForm } from '../ProductForm';

export const ChooseProductModal = ({ product }: ProductModal) => {
  const [modalActive, setModalActive] = React.useState(true);
  const router = useRouter();

  return (
    <Modal
      active={modalActive}
      setActive={setModalActive}
      product={product}
      version={'modal_product'}
      version_content={'modal_content_product'}
    >
      <ProductForm product={product} onSubmit={() => router.back()} />
    </Modal>
  );
};
