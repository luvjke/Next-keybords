import { Component } from '@prisma/client';
import React from 'react';
import { Api } from '../services/api_client';

export const useComponenets = () => {
  const [components, setComponents] = React.useState<Component[]>([]);

  React.useEffect(() => {
    async function fetchComponents() {
      try {
        const components = await Api.components.getAll();
        setComponents(components);
      } catch (error) {
        console.log(error);
      }
    }

    fetchComponents();
  }, []);
  return { components };
};
