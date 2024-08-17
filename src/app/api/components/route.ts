import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma_client';

export async function GET() {
  const components = await prisma.component.findMany();

  return NextResponse.json(components);
}
