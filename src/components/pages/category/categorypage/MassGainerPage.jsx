import React from 'react';
import ProductList from '../../../product/ProductList';
import CategoryPageLayout from '../layout/CategoryPageLayout';

const massGainerProducts = [
  {
    id: 1,
    name: 'Mass Gainer Pro',
    brand: 'MuscleTech',
    price: 34,
    image: '/product-2.png'
  },
  // Add more products...
];

const MassGainerPage = () => {
  return (
    <CategoryPageLayout 
      category="Mass Gainers"
      productCount={massGainerProducts.length}
    >
      <ProductList products={massGainerProducts} />
    </CategoryPageLayout>
  );
};

export default MassGainerPage;