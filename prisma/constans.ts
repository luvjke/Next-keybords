export const categories = [
  { name: 'Механическая' },
  { name: 'Мембранная' },
  { name: 'Оптомеханическая' },
  { name: 'Ножничная' },
  { name: 'Плунжерная' },
  { name: 'Клавиши' },
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
    name: 'Клавиша ZOMO «Кошачья лапка»',
    imageUrl:
      'https://static.insales-cdn.com/images/products/1/432/274301360/large_лапка_кошка.jpgPRhttps://static.insales-cdn.com/images/products/1/3150/271871054/large_paw4.jpgPRhttps://static.insales-cdn.com/images/products/1/4449/273199457/large_лапка_кошка_2.jpgPR',
    categoryId: 6,
  },
  {
    name: 'Клавиша Wuzenkey «Moai Ancient Stone»',
    imageUrl:
      'https://static.insales-cdn.com/images/products/1/249/771301625/large_wuse_keycap_moai_ancient_stone_1__1_.webpPRhttps://static.insales-cdn.com/images/products/1/242/771301618/large_wuse_keycap_moai_ancient_stone_1__3_.webpPRhttps://static.insales-cdn.com/images/products/1/243/771301619/large_wuse_keycap_moai_ancient_stone_1__4_.webpPR',
    categoryId: 6,
  },
  {
    name: 'Клавиша Wuzenkey «Octopus Ember»',
    imageUrl:
      // 'https://static.insales-cdn.com/images/products/1/1170/751740050/large_wuse_octopus_ember_4.webp',
      'https://static.insales-cdn.com/images/products/1/1170/751740050/large_wuse_octopus_ember_4.webpPRhttps://static.insales-cdn.com/images/products/1/1172/751740052/large_wuse_octopus_ember_3.webpPRhttps://static.insales-cdn.com/images/products/1/1173/751740053/large_wuse_octopus_ember_2.webpPR',
    categoryId: 6,
  },
];
