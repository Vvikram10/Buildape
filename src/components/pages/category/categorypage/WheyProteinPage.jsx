import React from 'react';
import ProductList from '../../../product/ProductList';
import CategoryPageLayout from '../layout/CategoryPageLayout';

// Mock data
const wheyProteinProducts = [
  {
    id: 1,
    name: 'Gold Standard Whey',
    brand: 'Optimum Nutrition',
    price: 4499,
    image: '/images/whey-protein.jpg'
  },
  // Add more products...
];

const WheyProteinPage = () => {
  return (
    <CategoryPageLayout category="Whey Proteins">
      <ProductList products={wheyProteinProducts} />
    </CategoryPageLayout>
  );
};

export default WheyProteinPage;