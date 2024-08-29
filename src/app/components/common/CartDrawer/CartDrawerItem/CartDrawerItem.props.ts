import { Component } from '@prisma/client';

export interface CartItemProps {
  name: string;
  type?: number | null;
  size?: number | null;
  components?: Component[];
}
