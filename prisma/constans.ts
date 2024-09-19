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
    name: 'Клавиша ZOMO X B.Duck Уточка',
    imageUrl:
      'https://static.insales-cdn.com/images/products/1/2601/789948969/large_zomo_b.duck_duck.jpgPRhttps://static.insales-cdn.com/images/products/1/1260/789660908/large_zomo_b.duck_duck_14.webpPRhttps://static.insales-cdn.com/images/products/1/1261/789660909/large_zomo_b.duck_duck_12.webpPR',
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
  {
    name: 'Клавиши Geekboards «Mac OS» Retro White',
    imageUrl:
      // 'https://static.insales-cdn.com/images/products/1/1170/751740050/large_wuse_octopus_ember_4.webp',
      'https://static.insales-cdn.com/images/products/1/7879/743513799/large_2__1_.jpgPRhttps://static.insales-cdn.com/images/products/1/1443/743654819/large_17.jpgPRhttps://static.insales-cdn.com/images/products/1/7876/743513796/large_1__1_.jpgPR',
    categoryId: 6,
  },
  {
    name: 'Клавиша Wuzenkey «Owl Gloom»',
    imageUrl:
      'https://static.insales-cdn.com/images/products/1/8115/771178419/large_wuse_keycap_owl_gloom_02.webpPRhttps://static.insales-cdn.com/images/products/1/8116/771178420/large_wuse_keycap_owl_gloom_01.webpPRhttps://static.insales-cdn.com/images/products/1/8113/771178417/large_wuse_keycap_owl_gloom_03.webpPR',
    categoryId: 6,
  },
  {
    name: 'Клавиша Wuzenkey «USSR Remnant»',
    imageUrl:
      'https://static.insales-cdn.com/images/products/1/1718/771196598/large_wuse_keycap_ussr_remnant_01.webpPRhttps://static.insales-cdn.com/images/products/1/1715/771196595/large_wuse_keycap_ussr_remnant_02.webpPRhttps://static.insales-cdn.com/images/products/1/1716/771196596/large_wuse_keycap_ussr_remnant_03.webpPR',
    categoryId: 6,
  },
  {
    name: 'Набор прозрачных клавиш Akko «Clear White»',
    imageUrl:
      'https://static.insales-cdn.com/images/products/1/7494/644750662/large_full-set-white-rgb.jpgPRhttps://static.insales-cdn.com/images/products/1/2010/835839962/large_akko-clear-white-set.webpPRhttps://static.insales-cdn.com/images/products/1/7418/641645818/large_full-set-white-side.jpg',
    categoryId: 6,
  },
];
