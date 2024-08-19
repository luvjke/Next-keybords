import React from 'react';

import { Component } from '@prisma/client';
import { Api } from '../services/api_client';
import { useSet } from 'react-use';

interface ReturnProps {
  components: Component[];
  selectedIds: Set<string>;
  onToggleId: (id: string) => void;
}

export const useFilterComponents = (): ReturnProps => {
  const [components, setComponents] = React.useState<Component[]>([]);

  const [selectedIds, { toggle }] = useSet(new Set<string>([]));
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
  return { components, onToggleId: toggle, selectedIds };
};
