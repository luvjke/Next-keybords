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
    name: 'Cherry MX Brown',
    price: 60,
    imageUrl:
      'https://static.insales-cdn.com/images/option_values/1/4145/2027569/thumb/cherry_mx_brown.webp',
  },
  {
    name: 'Cherry MX Red',
    price: 90,
    imageUrl:
      'https://static.insales-cdn.com/images/option_values/1/4147/2027571/thumb/cherry_mx_red.webp',
  },
  {
    name: 'Cherry MX Silent Red',
    price: 100,
    imageUrl:
      'https://static.insales-cdn.com/images/option_values/1/3310/8408302/thumb/cherry_mx_silent_red.webp',
  },
  {
    name: 'Kailh  Box White',
    price: 300,
    imageUrl:
      'https://static.insales-cdn.com/images/option_values/1/2765/12577485/thumb/kailh_box_red.webp',
  },
  {
    name: 'Kailh  Box Red',
    price: 350,
    imageUrl:
      'https://static.insales-cdn.com/images/option_values/1/2764/12577484/thumb/kailh_box_white.webp',
  },
  {
    name: 'Kailh  Box Silent Pink',
    price: 350,
    imageUrl:
      'https://static.insales-cdn.com/images/option_values/1/1441/23471521/thumb/kailh_box_silent_pink.webp',
  },
  {
    name: 'Keychron Optical Low Profile Black',
    price: 200,
    imageUrl:
      'https://static.insales-cdn.com/images/option_values/1/4205/24334445/thumb/keychron-optical-low-profile-black.webp',
  },
  {
    name: 'Keychron Optical Low Profile White',
    price: 200,
    imageUrl:
      'https://static.insales-cdn.com/images/option_values/1/4234/24334474/thumb/keychron-optical-low-profile-white.webp',
  },
  {
    name: 'Keychron Optical Low Profile Mint',
    price: 200,
    imageUrl:
      'https://static.insales-cdn.com/images/option_values/1/8087/23265175/thumb/keychron-optical-low-profile-mint.webp',
  },
  {
    name: 'Keychron Optical Low Profile Banana',
    price: 200,
    imageUrl:
      'https://static.insales-cdn.com/images/option_values/1/8088/23265176/thumb/keychron-optical-low-profile-banana.webp',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'HyperX Alloy FPS Pro',
    imageUrl: 'https://hyperx.ru/hyperx/product/hx-product-keyboard-alloy-pro-ru-1-zm-lg.jpg',
    categoryId: 1,
  },
];
