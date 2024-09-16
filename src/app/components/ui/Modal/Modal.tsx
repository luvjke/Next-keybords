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
  version,
  version_content,
}) => {
  const router = useRouter();
  const ModalClassNames = classNames(
    styles.modal,
    version && styles[version],
    active && styles.modal_active
  );
  const ModalContentClassNames = classNames(
    styles.modal_content,
    version_content && styles[version_content],
    active && styles.modal_content_active
  );
  return (
    <div
      className={ModalClassNames}
      onClick={(element) => {
        element.stopPropagation();
        setActive?.(false);
        router.back();
      }}
    >
      <div className={ModalContentClassNames} onClick={(element) => element.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
