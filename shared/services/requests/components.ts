import { Component } from '@prisma/client';
import { axiosInstance } from '../instance';
import { ApiRoutes } from '../constans';

export const getAll = async (): Promise<Component[]> => {
  return (await axiosInstance.get<Component[]>(ApiRoutes.COMPONENTS)).data;
};
