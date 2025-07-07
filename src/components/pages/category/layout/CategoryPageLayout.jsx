import React from 'react';
import ProductFilters from '../filter/ProductFilters';
import { Link } from 'react-router-dom';

const CategoryPageLayout = ({ category, children, productCount }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation - Simplified */}
<div className="text-sm breadcrumbs mb-4">
  <ul className="flex items-center space-x-2">
    <li><Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
    <li><span className="text-gray-400">/</span></li>
    <li><span className="text-gray-600">{category}</span></li>
  </ul>
</div>

      <h1 className="text-3xl font-bold mb-6 capitalize">{category}</h1>
      
      {/* Rest of your layout remains the same */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <ProductFilters />
        </div>
        
        <div className="md:w-3/4">
          {/* Product Header with Sort Options */}
          <div className="product_click_title mb-6">
            <form>
              <div className="showing_result flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="first_showing">
                  <p className="text-gray-600">Showing {productCount} products</p>
                </div>
                
                <div className="second_showing">
                  <p className="flex items-center gap-2">
                    <span className="text-gray-600">Sort by:</span> 
                    <select 
                      className="form-control border rounded px-3 py-1" 
                      style={{ width: '105px' }}
                      onChange={(e) => console.log('Sort changed:', e.target.value)}
                    >
                      <option value="title-ascending" selected>Sort</option>
                      <option value="product_name_asc">Name (A - Z)</option>
                      <option value="product_name_desc">Name (Z - A)</option>
                      <option value="price_low_to_high">Price (Low &gt; High)</option>
                      <option value="price_high_to_low">Price (High &gt; Low)</option>
                    </select>
                  </p>
                </div>
              </div>
            </form>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default CategoryPageLayout;