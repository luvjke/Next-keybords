import { Component } from '@prisma/client';
import React from 'react';
import { Api } from '../services/api_client';

export const useComponenets = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [components, setComponents] = React.useState<Component[]>([]);

  React.useEffect(() => {
    async function fetchComponents() {
      setIsLoading(true);
      try {
        const components = await Api.components.getAll();
        setComponents(components);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchComponents();
  }, []);
  return { components, isLoading };
};
