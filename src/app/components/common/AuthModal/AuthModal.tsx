'use client';
import React from 'react';
import { Modal } from '../../ui/Modal';

import styles from './AuthModal.module.scss';
import { Button } from '../../ui/Button';
import { signIn } from 'next-auth/react';
import { Github } from 'lucide-react';
import { AuthModalProps } from './AuthModal.props';
import { useClickAway } from 'react-use';
import { LoginForm } from './forms/LoginForm';
import { RegisterForm } from './forms/RegisterForm';
export const AuthModal: React.FC<AuthModalProps> = ({ open, onClose }) => {
  const [type, setType] = React.useState<'login' | 'register'>('login');
  const onSwitchType = () => {
    setType((prev) => (prev === 'login' ? 'register' : 'login'));
  };
  const ref = React.useRef(null);

  useClickAway(ref, () => onClose?.());

  return (
    <Modal
      active={open}
      setActive={onClose}
      version={'modal_auth'}
      version_content={'modal_content_auth'}
    >
      <div className={styles.auth_content} ref={ref}>
        {type === 'login' ? <LoginForm onClose={onClose} /> : <RegisterForm onClose={onClose} />}
        <hr />
        <div>
          <Button
            onClick={() => signIn('github', { callbackUrl: '/', redirect: true })}
            version={'outline'}
            label={'GitHub'}
            icon={<Github width={16} height={18} className={styles.user_icon} />}
            lversion={'regular'}
          />

          <Button
            onClick={() => signIn('google', { callbackUrl: '/', redirect: true })}
            version={'outline'}
            label={'Google'}
            icon={<Github width={16} height={18} className={styles.user_icon} />}
            lversion={'regular'}
          />
        </div>
        <Button
          onClick={onSwitchType}
          label={type === 'login' ? 'Зарегистрироваться' : 'Войти'}
          version={'unfilled'}
          lversion={'bold'}
        />
      </div>
    </Modal>
  );
};
