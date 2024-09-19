import { hashSync } from 'bcrypt';
import { prisma } from './prisma_client';
import { categories, components, products } from './constans';
import { Prisma } from '@prisma/client';

const generateProductItem = ({
  productId,
  keyboardType,
  size,
  price,
}: {
  productId: number;
  keyboardType?: number;
  size?: number;
  price: number;
}) => {
  return {
    productId,
    price,
    keyboardType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};
async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User',
        email: 'user@localhost.ru',
        password: hashSync('11111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin',
        email: 'Admin@localhost.ru',
        password: hashSync('11111', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });
  await prisma.component.createMany({
    data: components,
  });

  await prisma.product.createMany({
    data: products,
  });

  const Keyboard1 = await prisma.product.create({
    data: {
      name: 'Varmilo Victory 67',
      imageUrl:
        'https://static.insales-cdn.com/images/products/1/2166/837912694/large_varmilo-victory-11.webpPRhttps://static.insales-cdn.com/images/products/1/5533/838325661/large_varmilo-victory__9_.webpPRhttps://static.insales-cdn.com/images/products/1/5523/838325651/large_varmilo-victory__2_.webpPR',
      categoryId: 1,
      components: {
        connect: components.slice(0, 3),
      },
    },
  });

  const Keyboard2 = await prisma.product.create({
    data: {
      name: 'Epomaker x Aula F75',
      imageUrl:
        'https://static.insales-cdn.com/images/products/1/5920/905492256/large_1-240G5111K14X.pngPRhttps://static.insales-cdn.com/images/products/1/1830/905479974/large_1802736132828420.webpPRhttps://static.insales-cdn.com/images/products/1/7992/905494328/large_1802736159791281.webpPR',
      categoryId: 2,
      components: {
        connect: components.slice(0, 10),
      },
    },
  });
  const Keyboard3 = await prisma.product.create({
    data: {
      name: 'Keychron K3 Pro QMK/VIA',
      imageUrl:
        'https://static.insales-cdn.com/images/products/1/4514/647926178/large_keychron-k3-pro-qmk.jpgPRhttps://static.insales-cdn.com/images/products/1/8116/647921588/large_2.jpgPRhttps://static.insales-cdn.com/images/products/1/3206/647916678/large_1.jpgPR',
      categoryId: 4,
      components: {
        connect: components.slice(6, 9),
      },
    },
  });

  const Keyboard4 = await prisma.product.create({
    data: {
      name: 'Varmilo Koi V2 87',
      imageUrl:
        'https://static.insales-cdn.com/images/products/1/5642/596555274/large_1.jpgPRhttps://static.insales-cdn.com/images/products/1/5675/596555307/large_12.jpgPRhttps://static.insales-cdn.com/images/products/1/5655/596555287/large_2.jpgPR',
      categoryId: 1,
      components: {
        connect: components.slice(0, 2),
      },
    },
  });
  const Keyboard5 = await prisma.product.create({
    data: {
      name: 'Varmilo Sea Melody V3 108',
      imageUrl:
        'https://static.insales-cdn.com/images/products/1/3123/891948083/large_Varmilo_Sea_Melody_V3_108.pngPRhttps://static.insales-cdn.com/images/products/1/4165/886362181/large_7_sea_melody_108_.jpgPRhttps://static.insales-cdn.com/images/products/1/4150/886362166/large_2.jpg',
      categoryId: 1,
      components: {
        connect: components.slice(0, 2),
      },
    },
  });
  const Keyboard6 = await prisma.product.create({
    data: {
      name: 'Varmilo Change V3 108',
      imageUrl:
        'https://static.insales-cdn.com/images/products/1/3751/891948711/large_Varmilo_Chang_e_V3_108.pngPRhttps://static.insales-cdn.com/images/products/1/1627/886376027/large_наискосок108.jpgPRhttps://static.insales-cdn.com/images/products/1/1631/886376031/large_4__2_.jpgPR',
      categoryId: 1,
      components: {
        connect: components.slice(0, 4),
      },
    },
  });

  const Keyboard7 = await prisma.product.create({
    data: {
      name: 'Keychron K3 V2',
      imageUrl:
        'https://static.insales-cdn.com/images/products/1/3061/899075061/large_1159ФЫВФЫУВФЫВУВ.webpPRhttps://static.insales-cdn.com/images/products/1/3060/899075060/large_1159ФЫВФЫУВФЫВВФЫВ.webpPRhttps://static.insales-cdn.com/images/products/1/3059/899075059/large_1159ФЫВУВВВВФЫВ.webpPR',
      categoryId: 4,
      components: {
        connect: components.slice(6, 7),
      },
    },
  });
  await prisma.productItem.createMany({
    data: [
      generateProductItem({ productId: Keyboard1.id, keyboardType: 1, size: 75, price: 7499 }),
      generateProductItem({ productId: Keyboard1.id, keyboardType: 2, size: 100, price: 7999 }),
      generateProductItem({ productId: Keyboard1.id, keyboardType: 1, size: 60, price: 8999 }),

      generateProductItem({ productId: Keyboard2.id, keyboardType: 2, size: 75, price: 9999 }),
      generateProductItem({ productId: Keyboard2.id, keyboardType: 1, size: 100, price: 9999 }),
      generateProductItem({ productId: Keyboard2.id, keyboardType: 1, size: 60, price: 10999 }),

      generateProductItem({ productId: Keyboard3.id, keyboardType: 1, size: 75, price: 14990 }),
      generateProductItem({ productId: Keyboard3.id, keyboardType: 1, size: 100, price: 15990 }),
      generateProductItem({ productId: Keyboard3.id, keyboardType: 1, size: 60, price: 13990 }),

      generateProductItem({ productId: Keyboard4.id, keyboardType: 1, size: 75, price: 16190 }),
      generateProductItem({ productId: Keyboard4.id, keyboardType: 1, size: 100, price: 16190 }),
      generateProductItem({ productId: Keyboard4.id, keyboardType: 1, size: 60, price: 17190 }),
      generateProductItem({ productId: Keyboard4.id, keyboardType: 2, size: 60, price: 19190 }),

      generateProductItem({ productId: Keyboard5.id, keyboardType: 1, size: 75, price: 25690 }),
      generateProductItem({ productId: Keyboard5.id, keyboardType: 1, size: 100, price: 24690 }),
      generateProductItem({ productId: Keyboard5.id, keyboardType: 1, size: 60, price: 24990 }),
      generateProductItem({ productId: Keyboard5.id, keyboardType: 2, size: 60, price: 19190 }),

      generateProductItem({ productId: Keyboard6.id, keyboardType: 1, size: 75, price: 28690 }),
      generateProductItem({ productId: Keyboard6.id, keyboardType: 1, size: 100, price: 29690 }),
      generateProductItem({ productId: Keyboard6.id, keyboardType: 1, size: 60, price: 26990 }),
      generateProductItem({ productId: Keyboard6.id, keyboardType: 2, size: 60, price: 25190 }),

      generateProductItem({ productId: Keyboard7.id, keyboardType: 2, size: 60, price: 9490 }),

      generateProductItem({ productId: 1, price: 1190 }),
      generateProductItem({ productId: 2, price: 2490 }),
      generateProductItem({ productId: 3, price: 2490 }),
      generateProductItem({ productId: 4, price: 290 }),
      generateProductItem({ productId: 5, price: 2490 }),
      generateProductItem({ productId: 6, price: 2490 }),
      generateProductItem({ productId: 7, price: 4490 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      { userId: 1, totalAmount: 0, token: '1111' },
      { userId: 2, totalAmount: 0, token: '22222' },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      components: {
        connect: [{ id: 1 }, { id: 2 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User"  RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category"  RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product"  RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem"  RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Component"  RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart"  RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem"  RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
