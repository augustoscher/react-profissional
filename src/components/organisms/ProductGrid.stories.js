import React from 'react';
import ProductGrid from './ProductGrid';

import CornHarvest from '../../stories/assets/corn-harvest.jpg';
import ValtraMachine from '../../stories/assets/valtra.jpg';
import Harvester from '../../stories/assets/harvester.jpg';

export default {
  title: 'Components/Organisms/ProductGrid',
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid
    products={[
      {
        id: 1,
        title: 'Teste',
        image: CornHarvest,
        summary:
          'Excepteur excepteur dolor velit voluptate nostrud qui in aute dolor labore. Proident pariatur enim proident i.',
      },
      {
        id: 2,
        title: 'Title 2',
        image: ValtraMachine,
        summary:
          'Excepteur excepteur dolor velit voluptate nostrud qui in aute dolor labore. Proident pariatur enim proident i.',
      },
      {
        id: 3,
        title: 'Title 3',
        image: Harvester,
        summary:
          'Excepteur excepteur dolor velit voluptate nostrud qui in aute dolor labore. Proident pariatur enim proident i.',
      },
      {
        id: 4,
        title: 'Teste 4',
        image: CornHarvest,
        summary:
          'Excepteur excepteur dolor velit voluptate nostrud qui in aute dolor labore. Proident pariatur enim proident i.',
      },
      {
        id: 5,
        title: 'Title 5',
        image: ValtraMachine,
        summary:
          'Excepteur excepteur dolor velit voluptate nostrud qui in aute dolor labore. Proident pariatur enim proident i.',
      },
      {
        id: 6,
        title: 'Title 6',
        image: Harvester,
        summary:
          'Excepteur excepteur dolor velit voluptate nostrud qui in aute dolor labore. Proident pariatur enim proident i.',
      },
    ]}
  ></ProductGrid>
);
