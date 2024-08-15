export const categories = [
  { name: 'Механическая' },
  { name: 'Мембранная' },
  { name: 'Оптомеханическая' },
  { name: 'Ножничная' },
  { name: 'Плунжерная' },
  { name: 'Оптическая' },
];

export const components = [
  {
    name: 'Cherry MX Red',
    price: 90,
    imageUrl:
      'https://static.insales-cdn.com/images/option_values/1/4147/2027571/thumb/cherry_mx_red.webp',
  },

  {
    name: 'Cherry MX Brown',
    price: 60,
    imageUrl:
      'https://static.insales-cdn.com/images/option_values/1/4145/2027569/thumb/cherry_mx_brown.webp',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'HyperX Alloy FPS Pro',
    imageUrl: 'https://hyperx.ru/hyperx/product/hx-product-keyboard-alloy-pro-ru-1-zm-lg.jpg',
    categoryId: 1,
  },
];
