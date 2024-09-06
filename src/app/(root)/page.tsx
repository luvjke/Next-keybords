import styles from './page.module.scss';

import { Categories } from '../components/common/Categories';
import { Popup } from '../components/ui/Popup';
import { Filters } from '../components/common/Filters';

import { CardGroupList } from '../components/common/CardGroupList';
import { prisma } from '../../../prisma/prisma_client';
import { Suspense } from 'react';
import { findKeyboards, GetSearchParams } from '../../../shared/utils/findKeyboards';

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {
  const categories = await findKeyboards(searchParams);
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Все клавиатуры</h1>
      </div>
      <div className={styles.sort}>
        <div className={styles.sort_container}>
          <Categories items={categories.filter((category) => category.products.length > 0)} />
          <Popup
            active={false}
            setActive={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      </div>
      <div className={styles.keyboards_container}>
        <Suspense>
          <Filters />
        </Suspense>
        <div className={styles.keyboards_box}>
          {categories.map(
            (category) =>
              category.products.length > 0 && (
                <CardGroupList
                  key={category.id}
                  title={category.name}
                  items={category.products}
                  categoryId={category.id}
                />
              )
          )}
        </div>
      </div>
    </>
  );
}
