import { InfoBlock } from '@/app/components/common/InfoBlock';
import styles from './page.module.scss';

export default function UnauhorizedPage() {
  return (
    <div className={styles.container}>
      <InfoBlock
        title={'Доступ запрещён'}
        text={'Данную страницу могут просматривать только авторизированные пользователи'}
        imageUrl="/images/lock.png"
      />
    </div>
  );
}
