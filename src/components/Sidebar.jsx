import React, { useState, useEffect } from 'react';
import productsData from '../service/data';

const initialFilters = {
  category: '',
  brand: '',
  available: '',
  minPrice: 0,
  maxPrice: Math.max(...productsData.map(p => p.price)),
  minRating: 0,
  search: '',
  sortBy: '',
};

export default function Sidebar({ filters, setFilters }) {
  const minProductPrice = Math.min(...productsData.map(p => p.price));
  const maxProductPrice = Math.max(...productsData.map(p => p.price));
  const [priceRange, setPriceRange] = useState({ min: minProductPrice, max: maxProductPrice });
  const [showResetButton, setShowResetButton] = useState(false);

  const availableCategories = ['All', ...new Set(productsData.map(product => product.category_en))];

  const popularProducts = productsData
    .filter(product => product.trendy === true)
    .map(product => ({
      name: product.name_en,
      price: product.price,
      image: product.image,
    }));

  useEffect(() => {
    setPriceRange({
      min: filters.minPrice,
      max: filters.maxPrice,
    });
    if (
      filters.minPrice === minProductPrice &&
      filters.maxPrice === maxProductPrice &&
      filters.category === ''
    ) {
      setShowResetButton(false);
    }
  }, [filters]);

  const updateFilter = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleCategoryClick = (category_en) => {
    updateFilter('category', category_en === 'All' ? '' : category_en);
  };

  const handlePriceInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    const type = event.target.name;
    setPriceRange((prevRange) => ({ ...prevRange, [type]: value }));
  };

  const handleApplyPriceFilter = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
    }));
    setShowResetButton(true);
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
    setPriceRange({ min: minProductPrice, max: maxProductPrice });
    setShowResetButton(false);
  };

  return (
    <aside className="w-full p-6 bg-white shadow-lg rounded-lg sticky top-4">
      {/* Categories */}
      <div className="mb-8">
        <h3 className="font-bold text-xl mb-4 text-gray-800 border-b pb-2">CATEGORIES</h3>
        <ul className="space-y-3">
          {availableCategories.map((category_en, index) => (
            <li key={index}>
              <button
                onClick={() => handleCategoryClick(category_en)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                  filters.category === (category_en === 'All' ? '' : category_en)
                    ? 'bg-primary text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {category_en}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Items */}
      <div className="mb-8">
        <h3 className="font-bold text-xl mb-4 text-gray-800 border-b pb-2">POPULAR ITEMS</h3>
        <ul className="space-y-4">
          {popularProducts.map((product, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">{product.name}</p>
                <p className="text-xs text-primary font-medium">${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="font-bold text-xl mb-4 text-gray-800 border-b pb-2">FILTER BY PRICE</h3>
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>${minProductPrice}</span>
            <span>${maxProductPrice}</span>
          </div>
          <input
            type="range"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            min={minProductPrice}
            max={maxProductPrice}
            value={priceRange.max}
            name="max"
            onChange={handlePriceInputChange}
          />
          <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
            <span>Min: ${priceRange.min}</span>
            <span>Max: ${priceRange.max}</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleApplyPriceFilter}
            className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition font-medium"
          >
            APPLY
          </button>
          {showResetButton && (
            <button
              onClick={handleResetFilters}
              className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition font-medium"
            >
              RESET
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
