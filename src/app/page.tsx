import styles from './page.module.scss';

import { Categories } from './components/common/Categories';
import { Popup } from './components/ui/Popup';
import { Filters } from './components/common/Filters';

import { CardGroupList } from './components/common/CardGroupList';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Все клавиатуры</h1>
      </div>
      <div className={styles.sort}>
        <div className={styles.sort_container}>
          <Categories />
          <Popup
            active={false}
            setActive={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      </div>
      <div className={styles.keyboards_container}>
        <Filters />

        <div className={styles.keyboards_box}>
          <CardGroupList
            title={'Механическая'}
            category={[
              {
                id: 1,
                name: 'Hypper-X Alloy FPS Pro',
                imageUrl:
                  'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/0bdc35558dc900ffb291b148f54b9b6d/be2339e03713c808b052382a58d99c058cca061df68f8fdff3e48bbd7936c6da.jpg.webp',
                price: 4999,
                items: [{ price: 4999 }],
              },
              {
                id: 2,
                name: 'HyperX Alloy Core RGB',
                imageUrl:
                  'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/792571e7e70b7670f998814bb36b93a5/ce7ba03f6696990c90aaa474003d70ac764dc391251e79871a4d36cdb923b0be.jpg.webp',
                price: 5499,
                items: [{ price: 5499 }],
              },
              {
                id: 3,
                name: 'Hypper-X Alloy FPS Pro',
                imageUrl:
                  'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/0bdc35558dc900ffb291b148f54b9b6d/be2339e03713c808b052382a58d99c058cca061df68f8fdff3e48bbd7936c6da.jpg.webp',
                price: 4999,
                items: [{ price: 4999 }],
              },
              {
                id: 4,
                name: 'HyperX Alloy Core RGB',
                imageUrl:
                  'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/792571e7e70b7670f998814bb36b93a5/ce7ba03f6696990c90aaa474003d70ac764dc391251e79871a4d36cdb923b0be.jpg.webp',
                price: 5499,
                items: [{ price: 5499 }],
              },
            ]}
            categoryId={1}
          />
          <CardGroupList
            title={'Мембранная'}
            category={[
              {
                id: 1,
                name: 'Hypper-X Alloy FPS Pro',
                imageUrl:
                  'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/0bdc35558dc900ffb291b148f54b9b6d/be2339e03713c808b052382a58d99c058cca061df68f8fdff3e48bbd7936c6da.jpg.webp',
                price: 4999,
                items: [{ price: 4999 }],
              },
              {
                id: 2,
                name: 'HyperX Alloy Core RGB',
                imageUrl:
                  'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/792571e7e70b7670f998814bb36b93a5/ce7ba03f6696990c90aaa474003d70ac764dc391251e79871a4d36cdb923b0be.jpg.webp',
                price: 5499,
                items: [{ price: 5499 }],
              },
              {
                id: 3,
                name: 'Hypper-X Alloy FPS Pro',
                imageUrl:
                  'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/0bdc35558dc900ffb291b148f54b9b6d/be2339e03713c808b052382a58d99c058cca061df68f8fdff3e48bbd7936c6da.jpg.webp',
                price: 4999,
                items: [{ price: 4999 }],
              },
              {
                id: 4,
                name: 'HyperX Alloy Core RGB',
                imageUrl:
                  'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/792571e7e70b7670f998814bb36b93a5/ce7ba03f6696990c90aaa474003d70ac764dc391251e79871a4d36cdb923b0be.jpg.webp',
                price: 5499,
                items: [{ price: 5499 }],
              },
            ]}
            categoryId={2}
          />
        </div>
      </div>
    </>
  );
}
