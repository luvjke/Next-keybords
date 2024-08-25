import { hashSync } from 'bcrypt';
import { prisma } from './prisma_client';
import { categories, components, products } from './constans';
import { Prisma } from '@prisma/client';

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  keyboardType,
  size,
}: {
  productId: number;
  keyboardType?: number;
  size?: number;
}) => {
  return {
    productId,
    price: randomDecimalNumber(2000, 13000),
    keyboardType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};
async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User',
        email: 'user@localhost',
        password: hashSync('11111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin',
        email: 'Admin@localhost',
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
      name: 'HyperX Alloy FPS Pro',
      imageUrl: 'https://hyperx.ru/hyperx/product/hx-product-keyboard-alloy-pro-ru-1-zm-lg.jpg',
      categoryId: 1,
      components: {
        connect: components.slice(0, 5),
      },
    },
  });
  const Keyboard2 = await prisma.product.create({
    data: {
      name: 'Logitech G213 Prodigy',
      imageUrl:
        'https://c.dns-shop.ru/thumb/st4/fit/500/500/4d9fcf1bcd60efc29ee109a7d21cf94e/a4b633837b674467db22fd12724d78a9c6650abccb812729c0d6e1489cee6d49.jpg.webp',
      categoryId: 2,
      components: {
        connect: components.slice(0, 10),
      },
    },
  });
  const Keyboard3 = await prisma.product.create({
    data: {
      name: 'Dark Project KD87A Optical Gateron Blue TKL',
      imageUrl:
        'https://c.dns-shop.ru/thumb/st4/fit/500/500/856ff9133355752655aae30368c060ae/8b32d12f31df8788eeed9ac1b4b659872bd362224533d167d1b690362a242cd6.jpg.webp',
      categoryId: 3,
      components: {
        connect: components.slice(0, 9),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      generateProductItem({ productId: Keyboard1.id, keyboardType: 1, size: 75 }),
      generateProductItem({ productId: Keyboard1.id, keyboardType: 2, size: 100 }),
      generateProductItem({ productId: Keyboard1.id, keyboardType: 1, size: 60 }),

      generateProductItem({ productId: Keyboard2.id, keyboardType: 2, size: 75 }),
      generateProductItem({ productId: Keyboard2.id, keyboardType: 1, size: 100 }),
      generateProductItem({ productId: Keyboard2.id, keyboardType: 1, size: 60 }),

      generateProductItem({ productId: Keyboard3.id, keyboardType: 1, size: 75 }),
      generateProductItem({ productId: Keyboard3.id, keyboardType: 1, size: 100 }),
      generateProductItem({ productId: Keyboard3.id, keyboardType: 1, size: 60 }),

      generateProductItem({ productId: 1 }),
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
