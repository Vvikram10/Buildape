import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <Link 
          to={`/products/${product.id}`} 
          key={product.id}
          className="block"
        >
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.brand}</p>
              <p className="text-orange-500 font-bold">${product.price.toLocaleString()}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;