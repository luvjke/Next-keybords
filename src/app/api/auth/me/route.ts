import { NextResponse } from 'next/server';
import { getUserSession } from '../../../../../shared/utils/getUserSession';
import { prisma } from '../../../../../prisma/prisma_client';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const user = await getUserSession();

    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const data = await prisma.user.findUnique({
      where: {
        id: Number(user.id),
      },
      select: {
        fullName: true,
        email: true,
        password: false,
      },
    });
    return NextResponse.json(data);
  } catch (error) {}
}
