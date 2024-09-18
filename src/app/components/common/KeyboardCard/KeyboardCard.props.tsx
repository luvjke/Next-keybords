import { Component } from '@prisma/client';

export interface KeyboardCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  components: Component[];
}
