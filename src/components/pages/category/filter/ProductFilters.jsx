import React, { useState } from 'react';

const ProductFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter options data
  const filterOptions = {
    types: ["Mass Gainer", "Whey Protein", "Pre Workout", "Fat Burner"],
    brands: ["Optimum Nutrition", "MuscleTech", "Dymatize", "BSN"],
    flavors: ["Chocolate", "Vanilla", "Strawberry", "Unflavored"]
  };

  // Toggle filters for mobile
  const toggleFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    const filterSetters = {
      type: setSelectedTypes,
      brand: setSelectedBrands,
      flavor: setSelectedFlavors
    };

    filterSetters[filterType](prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value) 
        : [...prev, value]
    );
  };

  return (
    <div className="relative">
      {/* Mobile filter toggle button - hidden on desktop */}
      <button 
        onClick={toggleFilters}
        className="md:hidden mb-4 w-full bg-orange-500 text-white py-2 px-4 rounded-md flex items-center justify-between"
      >
        <span>Filters</span>
        <svg 
          className={`w-5 h-5 transform transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Filters sidebar - responsive layout */}
      <div className={`
        ${showMobileFilters ? 'block' : 'hidden'} 
        md:block 
        w-full md:w-64 
        bg-white md:bg-gray-50 
        p-4 
        rounded-lg 
        shadow-sm md:shadow-none
        absolute md:static 
        z-10
        border md:border-none
      `}>
        {/* Price Filter */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">Price Range</h3>
          <div className="flex justify-between mb-2">
            <span>₹{priceRange[0].toLocaleString()}</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="range"
              min="0"
              max="10000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
          </div>
        </div>

        {/* Type Filter */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">Type</h3>
          {filterOptions.types.map((type) => (
            <div key={type} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`type-${type}`}
                checked={selectedTypes.includes(type)}
                onChange={() => handleFilterChange('type', type)}
                className="mr-2 h-4 w-4 text-orange-500 rounded focus:ring-orange-400"
              />
              <label htmlFor={`type-${type}`} className="text-gray-700">{type}</label>
            </div>
          ))}
        </div>

        {/* Brand Filter */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">Brands</h3>
          {filterOptions.brands.map((brand) => (
            <div key={brand} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onChange={() => handleFilterChange('brand', brand)}
                className="mr-2 h-4 w-4 text-orange-500 rounded focus:ring-orange-400"
              />
              <label htmlFor={`brand-${brand}`} className="text-gray-700">{brand}</label>
            </div>
          ))}
        </div>

        {/* Flavor Filter */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">Flavors</h3>
          {filterOptions.flavors.map((flavor) => (
            <div key={flavor} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`flavor-${flavor}`}
                checked={selectedFlavors.includes(flavor)}
                onChange={() => handleFilterChange('flavor', flavor)}
                className="mr-2 h-4 w-4 text-orange-500 rounded focus:ring-orange-400"
              />
              <label htmlFor={`flavor-${flavor}`} className="text-gray-700">{flavor}</label>
            </div>
          ))}
        </div>

        {/* Apply Button - visible only on mobile */}
        <button 
          className="md:hidden w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
          onClick={toggleFilters}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default ProductFilters;