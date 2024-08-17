import React from 'react';

import { Component } from '@prisma/client';
import { Api } from '../services/api_client';

interface ReturnProps {
  components: Component[];
}

export const useFilterComponents = (): ReturnProps => {
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
