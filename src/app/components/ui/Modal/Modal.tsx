'use client';

import React, { PropsWithChildren } from 'react';

import styles from './Modal.module.scss';
import { ModalProps } from './Modal.props';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';

export const Modal: React.FC<ModalProps & { children: React.ReactNode }> = ({
  active,
  setActive,
  children,
}) => {
  const router = useRouter();

  return (
    <div
      className={classNames(styles.modal, active && styles.modal_active)}
      onClick={(element) => {
        element.stopPropagation();
        setActive?.(false);
        router.back();
      }}
    >
      <div
        className={classNames(styles.modal_content, active && styles.modal_content_active)}
        onClick={(element) => element.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
