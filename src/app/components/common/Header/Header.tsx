'use client';
import React from 'react';

import styles from './Header.module.scss';

import { Keyboard, User } from 'lucide-react';
import { Button } from '../../ui/Button';
import Link from 'next/link';
import { SearchInput } from '../SearchInput';
import { CartDrawer } from '../CartDrawer';
import { useCartStore } from '../../../../../shared/store/cart';
import { useSession, signIn } from 'next-auth/react';
import { AuthModal } from '../AuthModal';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

interface Props {
  hasSearch?: boolean;
}

export const Header: React.FC<Props> = ({ hasSearch = true }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [openAuthModal, setOpenAuthModal] = React.useState(false);
  const [totalAmount, items, loading] = useCartStore((state) => [
    state.totalAmount,
    state.items,
    state.loading,
  ]);
  const searchParams = useSearchParams();
  React.useEffect(() => {
    let toastMessage = '';

    if (searchParams.has('paid')) {
      toastMessage = 'Заказ успешно оплачен! Информация отправлена на почту.';
    }

    if (searchParams.has('verified')) {
      toastMessage = 'Почта успешно подтверждена!';
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace('/');
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
    }
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.link} href={`/`}>
          <div className={styles.logo_box}>
            <div>
              <h1 className={styles.under_image}>Next keyboard</h1>
            </div>
            <div>
              <Keyboard width={35} height={35} />
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className={styles.search_input}>
            <SearchInput />
          </div>
        )}
        <div className={styles.autorize_box}>
          <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />
          {!session ? (
            <Button
              onClick={() => setOpenAuthModal(true)}
              version={'outline'}
              label={'Войти'}
              icon={<User width={16} height={18} className={styles.user_icon} />}
              lversion={'regular'}
            />
          ) : (
            <Button
              version={'custom'}
              lversion={'bold'}
              label={'Профиль'}
              tag="link"
              href={'/profile'}
            />
          )}
          <div>
            <CartDrawer>
              <Button
                version={'cart'}
                lversion={'regular'}
                label={''}
                tag="cart_button"
                price={totalAmount}
                count={items.length}
              />
            </CartDrawer>
          </div>
        </div>
      </div>
    </header>
  );
};
